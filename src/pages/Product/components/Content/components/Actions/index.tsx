import React, { useState } from "react";
import Button from "../../../../../../components/shared/Button";
import {
  RiHeart3Fill,
  RiHeart3Line,
  RiArrowLeftRightFill,
} from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../../../../services";
import Counts from "../../../../../../components/shared/Counts";
import { colors } from "../../../../../../constants/colors";
import { sizes } from "../../../../../../constants/sizes";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../../../../../services/favoriteSlice";

const ProductActions = ({
  handleAddToCart,
  favoriteItem,
  productCount,
  setProductCount,
}: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const favorite = useAppSelector((state) => state.favorite.items);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  const handleFavoriteClick = () => {
    if (isFavorite(favoriteItem)) {
      dispatch(removeFromFavorite(favoriteItem.id));
    } else {
      dispatch(addToFavorite(favoriteItem));
    }
  };

  const isFavorite = (item: any) => {
    return favorite.some((favItem) => favItem.id === item.id);
  };

  return (
    <>
      <div className="colors">
        <h2>Color</h2>
        <div className="items">
          {colors.map((color: any) => (
            <div
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`item ${color.className} ${
                selectedColor === color.id ? "!opacity-100" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="sizes">
        <h2>Size</h2>
        <div className="items">
          {sizes.map((size: any) => (
            <div
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={`item ${
                selectedSize === size.id ? "!bg-primary !text-white" : ""
              }`}
            >
              {size.label}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`actions ${
          Object.keys(user).length !== 0
            ? ""
            : "opacity-50 cursor-not-allowed pointer-events-none select-none"
        }`}
      >
        <Counts
          decrement={() => setProductCount((prev: any) => prev - 1)}
          increment={() => setProductCount((prev: any) => prev + 1)}
          count={productCount}
        />
        <div className="add-to-card">
          <Button onClick={handleAddToCart} width="full">
            Add to Cart
          </Button>
        </div>
        <div
          onClick={handleFavoriteClick}
          className={`group reactions ${
            isFavorite(favoriteItem)
              ? "!bg-red-700 !border-red-700 !text-white"
              : ""
          }`}
        >
          {isFavorite(favoriteItem) ? (
            <RiHeart3Fill className="block" size={26} />
          ) : (
            <RiHeart3Line className="block" size={26} />
          )}
        </div>
        <div className="prepare">
          <RiArrowLeftRightFill size={26} />
        </div>
      </div>
    </>
  );
};

export default ProductActions;
