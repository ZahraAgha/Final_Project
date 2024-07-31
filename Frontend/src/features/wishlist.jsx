// import React, { useCallback, useEffect, useState, useContext } from "react";

// const WishlistContext = React.createContext({
//   items: [],
//   loading: true,
//   addToWishlist(productId) {
//     return Promise.resolve();
//   },
//   removeFromWishlist(productId) {
//     return Promise.resolve();
//   },
//   isWishlisted(productId) {
//     return false;
//   },
// });

// export const useWishlist = () => useContext(WishlistContext);

// export function WishlistProvider({ children }) {
//   const [iteration, setIteration] = useState(0);
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/wishlist")
//       .then((res) => res.json())
//       .then((body) => {
//         setItems(body.items);
//       })
//       .finally(() => setLoading(false));
//   }, [iteration]);

//   const refresh = useCallback(() => setIteration((x) => x + 1), [setIteration]);

//   const isWishlisted = useCallback(
//     (productId) => {
//       return items.some((item) => {
//         return item.product._id === productId;
//       });
//     },
//     [items]
//   );

//   const addToWishlist = (productId) => {
//     setLoading(true);
//     return fetch("/api/wishlist", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ productId }),
//     }).finally(refresh);
//   };

//   const removeFromWishlist = (productId) => {
//     setLoading(true);
//     return fetch("/api/wishlist", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ productId }),
//     }).finally(refresh);
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         addToWishlist,
//         removeFromWishlist,
//         isWishlisted,
//         items,
//         loading,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// }




import React, {useCallback, useEffect, useState, useContext} from "react";

const WishlistContext = React.createContext({
  items: [],
  loading: true,
  addToWishlist(productId) {
    return Promise.resolve();
  },
  removeFromWishlist(productId) {
    return Promise.resolve();
  },
  isWishlisted(productId) {
    return false;
  },
});

export const useWishlist = () => useContext(WishlistContext);

export function WishlistProvider({children}) {
  const [iteration, setIteration] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateWishlist = useCallback(async () => {
    const res = await fetch("/api/wishlist");
    if (!res.ok)
      return;

    const data = await res.json();
    if (Array.isArray(data.items)) {
      setItems(data.items);
    }
  }, []);

  useEffect(() => {
    updateWishlist()
      .finally(() => setLoading(false));
  }, [iteration]);

  const refresh = useCallback(() => setIteration((x) => x + 1), [setIteration]);

  const isWishlisted = useCallback(
    (productId) => {
      return items.some((item) => {
        return item.product._id === productId;
      });
    },
    [items]
  );

  const addToWishlist = (productId) => {
    setLoading(true);
    return fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({productId}),
    }).finally(refresh);
  };

  const removeFromWishlist = (productId) => {
    setLoading(true);
    return fetch("/api/wishlist", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({productId}),
    }).finally(refresh);
  };

  return (
    <WishlistContext.Provider
      value={{
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
        items,
        loading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
