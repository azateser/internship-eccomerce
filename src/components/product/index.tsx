import Button, { ButtonSize, ButtonVariant } from "../shared/Button";

import {
  RiEyeLine,
  RiHeart3Fill,
  RiHeart3Line,
} from "react-icons/ri";
import "./Product.css";
import { Product as ProductType } from "../../interfaces/product";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services";
import { addToCart } from "../../services/cartSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../services/favoriteSlice";

const Product = ({ product }: { product: ProductType }) => {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector((state) => state.favorite.items);
  const [loading, setLoading] = useState(true);

  const handleFavoriteClick = () => {
    if (isFavorite(product)) {
      dispatch(removeFromFavorite(product.id));
    } else {
      dispatch(addToFavorite(product));
    }
  };

  const isFavorite = (item: any) => {
    return favorite.some((favItem) => favItem.id === item.id);
  };

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const cartItem = {
    id: product.id,
    title: product.title,
    image: `https://picsum.photos/300/350?random=${product.id}`,
    price: product.price,
    quantity: 1,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="product group">
      <div className="image">
        {loading && <Skeleton width={300} height={346} />}

        <img
          style={{ display: loading ? "none" : "block" }}
          onLoad={handleImageLoad}
          src={`https://picsum.photos/300/350?random=${product.id}`}
          alt="Product"
          className="w-full h-full object-cover"
        />

        {!loading && (
          <>
            <Link
              to={`/product/${product.title
                .toLowerCase()
                .split(" ")
                .join("-")}/${product.id}`}
            >
              <div className="background group-hover:opacity-70"></div>
            </Link>
            <div className="category  group-hover:opacity-100 group-hover:bg-white group-hover:text-primary">
              {product.category.name}
            </div>
            <div className="actions group-hover:flex ">
              <div className="icons">
                <button onClick={handleFavoriteClick}>
                  {isFavorite(product) ? (
                    <RiHeart3Fill className="text-red-500" size={18} />
                  ) : (
                    <RiHeart3Line size={18} />
                  )}
                </button>
                <Link
                  to={`/product/${product.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}/${product.id}`}
                >
                  <button>
                    <RiEyeLine size={18} />
                  </button>
                </Link>
              </div>
              <div className="add-to-cart">
                <Button
                  size={ButtonSize.SMALL}
                  width="full"
                  variant={ButtonVariant.SECONDARY}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <Link
        to={`/product/${product.title.toLowerCase().split(" ").join("-")}/${
          product.id
        }`}
        state={{ product }}
      >
        <div className="detail">
          <h2>
            {product.title.length > 26
              ? product.title.slice(0, 26) + "..."
              : product.title}
          </h2>
          <p>{product.description.slice(0, 45)}...</p>
          <div className="prices">
            <span>${product.price}</span>
            <span className="old-price">${product.price + 40}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
