import { useState } from "react";
import { useWishlist } from "../features/wishlist";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function WishlistButton({ productId, ...rest }) {
  const wishlist = useWishlist();
  const wishlisted = wishlist.isWishlisted(productId);

  if (wishlist.loading) {
    return (
      <button {...rest} className="px-4 py-3">
        <GoHeartFill color="#666" />
      </button>
    );
  }

  return wishlisted ? (
    <button
      {...rest}
      className="px-4 py-3"
      onClick={() => wishlist.removeFromWishlist(productId)}
    >
      <GoHeartFill color="#a41616" />
    </button>
  ) : (
    <button
      {...rest}
      className="px-4 py-3"
      onClick={() => wishlist.addToWishlist(productId)}
    >
      <GoHeart />
    </button>
  );
}
