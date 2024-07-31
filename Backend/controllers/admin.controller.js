import { Category, Color, Material, Order, Product, Size, User } from "../models/index.js"
import bcrypt from "bcrypt";

//////////// USERS

export const getUsers = async (req, res) => {
  const entries = await User.find().exec();
  return res.json(entries);
}

export const getUser = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await User.findById(id).exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });
  return res.json(entry);
}

export const updateUser = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await User.findById(id).exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });

  entry.fullName = req.body.fullName;

  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    entry.password = await bcrypt.hash(req.body.password, salt);
  }

  await entry.save();

  return res.json(entry);
}

//////////// ORDERS

export const getOrders = async (req, res) => {
  const entries = await Order.find()
    .populate('orderItems.product')
    .populate('orderItems.size')
    .populate('user')
    .exec();
  return res.json(entries);
}

export const getOrder = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await Order.findById(id)
    .populate('orderItems.product')
    .populate('orderItems.size')
    .populate('user')
    .exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });
  return res.json(entry);
}

export const updateOrderItemStatus = async (req, res) => {
  const id = `${req.params.id}`;
  const subId = `${req.params.subId}`;

  const entry = await Order.findById(id)
    .populate('orderItems.product')
    .populate('orderItems.size')
    .exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });

  const subEntry = entry.orderItems
    .find(x => x._id.equals(subId));
  if (!subEntry)
    return res.status(404).send({ error: "Sub item not found" });

  subEntry.status = req.body.status;
  await entry.save();

  return res.json(entry);
}

//////////// SIZES

export const getSizes = async (req, res) => {
  const entries = await Size.find()
    .exec();
  return res.json(entries);
}

export const addSize = async (req, res) => {
  const entry = new Size({
    name: req.body.name,
  });

  await entry.save();

  res.json(entry);
}

export const deleteSize = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await Size.findById(id)
    .exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });
  await entry.deleteOne();
  return res.send({ ok: true });
}

//////////// COLORS

export const getColors = async (req, res) => {
  const entries = await Color.find()
    .exec();
  return res.json(entries);
}

export const addColor = async (req, res) => {
  const entry = new Color({
    name: req.body.name,
    hex: req.body.hex,
  });
  await entry.save();

  res.json(entry);
}

export const deleteColor = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await Color.findById(id)
    .exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });
  await entry.deleteOne();
  return res.send({ ok: true });
}

//////////// MATERIALS

export const getMaterials = async (req, res) => {
  const entries = await Material.find()
    .exec();
  return res.json(entries);
}

export const addMaterial = async (req, res) => {
  const entry = new Material({
    name: req.body.name,
  });

  await entry.save();

  res.json(entry);
}

export const deleteMaterial = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await Material.findById(id)
    .exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });
  await entry.deleteOne();
  return res.send({ ok: true });
}

//////////// CATEGORIES

export const getCategories = async (req, res) => {
  const entries = await Category.find()
    .exec();
  return res.json(entries);
}

export const addCategory = async (req, res) => {
  const entry = new Category({
    name: req.body.name,
    slug: req.body.slug,
  });

  await entry.save();

  res.json(entry);
}

export const deleteCategory = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await Category.findById(id)
    .exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });
  await entry.deleteOne();
  return res.send({ ok: true });
}

//////////// PRODUCTS

export const getProducts = async (req, res) => {
  const entries = await Product.find()
    .populate('stock.size')
    .populate('color')
    .populate('category')
    .exec();
  return res.json(entries);
}

export const getProduct = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await Product.findById(id)
    .populate('stock')
    .populate('color')
    .populate('category')
    .exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });
  return res.json(entry);
}

export const addProduct = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    category: req.body.categoryId,
    slug: req.body.slug,
    sku: req.body.sku,
    description: req.body.description,
    productPic: req.body.productPic,
    quantity: req.body.quantity,
    color: req.body.colorId,
    stock: req.body.stock.map(stock => ({
      size: stock.sizeId,
    }))
  });

  await product.save();

  res.json(product);
}

export const updateProduct = async (req, res) => {
  const id = `${req.params.id}`;
  const product = await Product.findById(id)
    .populate('stock')
    .exec();
  if (!product)
    return res.status(404).send({ error: "Not found" });

  product.title = req.body.title;
  product.price = req.body.price;
  product.category = req.body.categoryId;
  product.slug = req.body.slug;
  product.sku = req.body.sku;
  product.description = req.body.description;
  product.productPic = req.body.productPic;
  product.color = req.body.colorId;
  product.quantity = req.body.quantity;

  product.stock = product.stock
    .filter(stock => {
      const inputStock = req.body.stock.find(x => stock._id.equals(x._id));
      if (!inputStock)
        return false;

      stock.size = inputStock.size;
      return true;
    })
    .concat(req.body.stock.filter(x => !x._id).map(inputStock => ({
      quantity: inputStock.quantity,
      color: inputStock.colorId,
      size: inputStock.sizeId
    })));

  await product.save();

  res.json(product);
}

export const deleteProduct = async (req, res) => {
  const id = `${req.params.id}`;
  const entry = await Product.findById(id).exec();
  if (!entry)
    return res.status(404).send({ error: "Not found" });
  await entry.deleteOne();
  return res.send({ ok: true });
}