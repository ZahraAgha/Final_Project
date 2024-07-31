import React, {useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import CheckoutItem from "./CheckoutItem";
import {clearCart} from "../slices/cart.slice";
import {useNavigate} from "react-router-dom";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.total);

  const streetRef = useRef();
  const zipRef = useRef();
  const cityRef = useRef();
  const districtRef = useRef();
  const countryRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formRef = useRef(null);

  const addOrderHandler = async () => {
    if (!formRef.current.reportValidity())
      return;

    const streetAddress = streetRef.current?.value;
    const city = cityRef.current?.value;
    const country = countryRef.current?.value;
    const zipCode = zipRef.current?.value;
    const district = districtRef.current?.value;

    const shippingAddress = {
      streetAddress,
      city,
      country,
      zipCode,
      district,
    };

    const orderItems = cartItems.map(item => ({
      quantity: item.quantity,
      product: item.product._id,
      size: item.size._id,
    }));

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shippingAddress,
        orderItems,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      dispatch(clearCart());
      alert('Order placed successfully!');
      // order created!!!

      console.log(data);
      navigate('/');
    } else {
      const data = await response.json();
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
            <form ref={formRef}>
              <div className="mb-4">
                <label className="block text-gray-700">Street Address</label>
                <input
                  required
                  ref={streetRef}
                  type="text"
                  autoComplete="street-address"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Street Address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">City</label>
                <input
                  required
                  ref={cityRef}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="City"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700">State</label>
                  <input
                    required
                    ref={districtRef}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="State"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    required
                    ref={zipRef}
                    autoComplete="postal-code"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <input
                  required
                  ref={countryRef}
                  type="text"
                  autoComplete="country"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Country"
                />
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Order</h2>
            <div className="border border-gray-300 p-4 rounded">
              {cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item}/>
              ))}
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-gray-700">$ {subtotal}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Shipping</span>
                <span className="text-gray-700">Free</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Tax</span>
                <span className="text-gray-700">$3.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-bold">Total</span>
                <span className="text-gray-700 font-bold">
                  $ {subtotal + 3}
                </span>
              </div>
              <button
                disabled={!cartItems || cartItems.length === 0}
                onClick={addOrderHandler}
                className="bg-black text-white py-2 px-4 rounded w-full"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
