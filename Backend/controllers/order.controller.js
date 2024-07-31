import Order from "../models/order.model.js"
import Product from "../models/product.model.js"
import Size from "../models/size.model.js"

//add a single Order
export const addOrder = async (request, response) => {
  const {_id: userId} = request.user
  const {orderItems, shippingAddress} = request.body;

  //check empty values
  for (const value of Object.values(shippingAddress)) {
    if (!value) {
      return response.status(400).send({error: "Please provide a required fields"})
    }
  }

  const orderItemsWithDetails = [];
  const products = [];

  for (const item of orderItems) {
    const product = await Product.findById(item.product).populate('stock');
    if (!product) {
      return response.status(400).send({error: `Invalid product id '${item.product}'`});
    }

    const size = await Size.findById(item.size);
    if (!size) {
      return response.status(400).send({error: `Invalid size '${item.size}'`});
    }

    const stockItem = product.stock.find((stockItem) => size._id.equals(stockItem.size));
    if (!stockItem) {
      return response.status(400).send({error: `Invalid size '${item.size}'`});
    }
    if (item.quantity > product.quantity) {
      return response.status(400).send({
        error: `Product "${product.title}" (size: ${size.name}) has invalid quantity (max: ${stockItem.quantity})`
      });
    }
    product.quantity -= item.quantity;
    products.push(product);

    orderItemsWithDetails.push({
      product: product._id,
      size: size._id,
      quantity: item.quantity,
      price: product.price * item.quantity,
      status: 'Pending',
    });
  }

  const totalPrice = orderItemsWithDetails.reduce((total, item) => total + item.price, 0);

  const newOrder = await Order.create({
    orderItems: orderItemsWithDetails,
    totalPrice,
    user: userId,
    shippingAddress,
  })

  if (!newOrder)
    return response.status(400).send({error: "Could not create a new Order"})

  for (const product of products) {
    await product.save();
  }

  response.status(201).send(newOrder);
}


