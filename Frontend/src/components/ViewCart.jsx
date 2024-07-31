import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItemQuantity, removeItemFromCart } from "../slices/cart.slice";
import {NavLink} from "react-router-dom";

const ViewCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [tocChecked, setTocChecked] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-4">Your Cart</h1>
      <nav className="text-gray-600 mb-6">
        <a href="#" className="hover:underline">
          Home
        </a>{" "}
        {">"} <span>Your Shopping Cart</span>
      </nav>
      <div className="bg-blue-100 text-red-600 p-4 rounded mb-6">
        <span role="img" aria-label="alert">
          🔥
        </span>{" "}
        You’re out of time! Checkout now to avoid losing your order!
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b flex items-center">
                  <img
                    src={`http://localhost:5555/${item.product.productPic}`}
                    alt={item.product.title}
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <p>{item.product.title}</p>
                    <p className="text-gray-600">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        dispatch(
                          updateCartItemQuantity({
                            itemId: item.id,
                            quantity: Math.max(1, (item.quantity || 1) - 1),
                          })
                        )
                      }
                      className="px-2 py-1 border"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="w-12 text-center border"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      onClick={() =>
                        dispatch(
                          updateCartItemQuantity({
                            itemId: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="px-2 py-1 border"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 p-4 bg-white border rounded">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl">Subtotal</span>
          <span className="text-xl font-semibold">
            ${cart.total.toFixed(2)}
          </span>
        </div>
        <div className="text-gray-600 mb-4">
          <span>Taxes and shipping calculated at checkout</span>
        </div>
        <div className="flex items-center mb-4">
          <input
            checked={tocChecked}
            onChange={ev => setTocChecked(ev.target.checked)}
            type="checkbox"
            id="terms2"
            className="mr-2" />
          <label htmlFor="terms2">
            I agree with{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>
          </label>
        </div>
        <NavLink to="/checkout">
          <button disabled={!cart.items?.length || !tocChecked} className="w-[35%] py-2 bg-black text-white text-center">
            Checkout
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ViewCart;
