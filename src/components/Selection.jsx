import React, { useState } from "react";
import { Products } from "../Data";
import { useDispatch } from "react-redux";

import { addProductToWishlist } from "../redux/addProducts";
import { productlikedLike, addLikedProductToWishlist } from "../redux/addLikedProducts";
// imgs
import like1 from "../assets/like1.svg";
import like2 from "../assets/like2.svg";
const Selection = () => {
  const dispatch = useDispatch();
  const mahsulotniWishlistgaQoshish = (product) => {
    dispatch(addProductToWishlist(product));
  };
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (product) => {
    setLikedProducts((prevLikes) => ({
      ...prevLikes,
      [product.id]: !prevLikes[product.id],
    }));
  };

  const likemahsulotniWishlistgaQoshish = (product) => {
    dispatch(addLikedProductToWishlist(product));
  };

  return (
    <section>
      <div className="containerb">
        <h2 className="text-3xl font-bold text-nav mb-8">Подборка для вас</h2>
        <ul className="grid grid-cols-4  gap-x-10 gap-y-20">
          {Products.map((e) => {
            return (
              <li
                key={e.id}
                className="relative flex flex-col justify-between h-full pt-2 w-[214px]  bg-white rounded-md"
              >
                <button
                  onClick={() => likemahsulotniWishlistgaQoshish(e)}
                  className="absolute right-3 top-2"
                >
                  <img
                    src={likedProducts[e.id] ? like2 : like1}
                    alt="Like"
                  />
                </button>

                <div className="flex flex-col items-center">
                  <img className="" src={e.img} alt={e.title} />
                </div>
                <div className="pl-4">
                  <h3 className="text-base mb-1  text-nav">{e.title}</h3>
                  <p className="text-base font-bold text-yashil">{e.price}</p>
                  <span>{e.location}</span>
                </div>
                <button
                  onClick={() => mahsulotniWishlistgaQoshish(e)}
                  className="w-full py-3 bg-yashil text-white font-medium "
                >
                  Add Product
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Selection;
