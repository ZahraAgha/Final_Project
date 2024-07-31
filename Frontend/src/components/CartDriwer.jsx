import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {removeItemFromCart, updateCartItemQuantity} from "../slices/cart.slice";

const CartDrawer = ({toggleCart, cartOpen}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [tocChecked, setTocChecked] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end ${
        cartOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div
        className={`bg-white w-80 p-4 transform ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">
            Shopping Cart ({cart.items.length})
          </h2>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        {cart.items.length ? (
          cart.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 mb-4">
              <img
                src={`http://localhost:5555/${item.product?.productPic}`}
                alt={item.product?.title}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{item.product?.title}</h3>
                <p className="text-sm text-gray-500">{item.size?.name}</p>
                <p className="text-sm font-semibold">
                  ${(item.product?.price * (item.quantity || 0)).toFixed(2)}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateCartItemQuantity({
                          itemId: item.id,
                          quantity: Math.max(1, (item.quantity || 0) - 1),
                        })
                      )
                    }
                    className="border px-2 py-1 text-gray-700"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity || 0}
                    readOnly
                    className="w-10 text-center border mx-2"
                  />
                  <button
                    onClick={() =>
                      dispatch(
                        updateCartItemQuantity({
                          itemId: item.id,
                          quantity: (item.quantity || 0) + 1,
                        })
                      )
                    }
                    className="border px-2 py-1 text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeItemFromCart(item.id))}
                className="text-gray-500 hover:text-gray-700"
              >
                🗑️
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
        <div className="flex justify-between items-center border-t pt-4">
          <div className="flex items-center">
            <input checked={tocChecked}
                   onChange={ev => setTocChecked(ev.target.checked)}
                   type="checkbox"
                   id="terms"
                   className="mr-2"/>
            <label htmlFor="terms" className="text-sm text-gray-500">
              I agree with{" "}
              <a href="#" className="text-blue-500">
                Terms & Conditions
              </a>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Subtotal</span>
            <span className="text-lg font-medium">
              ${cart.total.toFixed(2)}
            </span>
          </div>
          <Link to="/checkout" onClick={toggleCart}>
            <button
              className="w-full mt-4 py-2 bg-black text-white font-semibold"
              disabled={cart.items.length === 0 || !tocChecked}
            >
              Checkout
            </button>
          </Link>

          <Link to="/viewcart" onClick={toggleCart}>
            <button className="w-full mt-4 py-2 bg-black text-white font-semibold">
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;