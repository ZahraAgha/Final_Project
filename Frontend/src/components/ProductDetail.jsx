import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {FaAngleRight, FaPlus, FaMinus} from "react-icons/fa";
import {BsBarChart, BsPatchQuestion, BsShare} from "react-icons/bs";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import WishlistButton from "./WishlistButton";
import {addItemToCart} from "../slices/cart.slice";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const {id} = useParams();

  const [tocChecked, setTocChecked] = useState(false);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product && quantity > product.quantity) {
      setQuantity(x => Math.min(x, product.quantity));
    }
  }, [quantity, product]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function addToCart() {
    if (!selectedSize) {
      alert('Please select size');
      return false;
    }

    dispatch(
      addItemToCart({
        product,
        quantity,
        size: selectedSize,
      })
    );
    return true;
  }

  function buyNow() {
    if (addToCart()) {
      navigate("/checkout");
    }
  }

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto px-4">
      <nav className="flex">
        <ol className="flex items-center space-x-2">
          <li className="text-[#757575] flex items-center">
            <NavLink to="/home">Home</NavLink>
            <span className="mx-2">
              <FaAngleRight/>
            </span>
          </li>
          <li className="text-[#757575] flex items-center">
            <h1>Product</h1>
            <span className="mx-2">
              <FaAngleRight/>
            </span>
          </li>
        </ol>
      </nav>
      <section className="flex flex-col lg:flex-row justify-center gap-10 items-center">
        <div className="slider w-full lg:w-1/2">
          <img src={`http://localhost:5555/${product.productPic}`} alt=""/>
        </div>
        <div className="text-area w-full lg:w-1/2">
          <h1 className="text-[16px] text-[#757575] mb-2">{product.title}</h1>
          <h2 className="text-[30px] text-[#222222] mb-2">
            {product.description}
          </h2>
          <span className="text-[20px] text-[#222222]">${product.price}</span>
          <p className="text-[18px] text-[#555555] mt-4 mb-4">
            {product.description}
          </p>

          <h4 className="text-[17px] text-[#222222] font-normal mb-2">
            Select Size
          </h4>
          <div className="flex gap-2 mb-4">
            {product.stock?.map((stock, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(stock.size)}
                className={`${
                  stock.size._id === selectedSize?._id
                    ? "bg-slate-700 text-white"
                    : "bg-white text-black"
                } px-4 py-2 border border-gray-500 rounded`}
              >
                {stock.size.name}
              </button>
            ))}
          </div>
          <div className="flex gap-5 border-b border-[#757575] mb-7">
            <div className="flex items-center gap-3 text-[#222222] text-lg">
              <BsBarChart/>
              Size Guide
            </div>
            <div className="flex items-center gap-3 text-[#222222] text-lg">
              <BsPatchQuestion/>
              Ask a Question
            </div>
            <div className="flex items-center gap-3 text-[#222222] text-lg">
              <BsShare/>
              Share
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-3"
              >
                <FaMinus/>
              </button>
              <span className="px-3 py-3">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-3"
              >
                <FaPlus/>
              </button>
            </div>
            <button
              onClick={addToCart}
              className="px-32 py-3 bg-black text-white"
            >
              ADD TO CART
            </button>
            <WishlistButton
              className="px-4 py-3 rounded"
              productId={product._id}
            />
          </div>

          <div className="flex items-center mt-5 mb-5">
            <input
              checked={tocChecked}
              onChange={ev => setTocChecked(ev.target.checked)}
              id="terms3"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="terms3" className="ml-2 text-gray-700">
              I agree with{" "}
              <a href="#" className="underline text-blue-600">
                Terms & Conditions
              </a>
            </label>
          </div>
          <button onClick={buyNow} disabled={!tocChecked}
                  className="px-10 py-3 bg-[#E5E5E5] text-[#555555] w-full lg:w-auto">
            BUY IT NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
