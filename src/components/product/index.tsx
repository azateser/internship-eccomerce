import React from "react";
import Button, { ButtonSize, ButtonVariant } from "../shared/Button";

import { RiStarLine, RiArrowLeftRightLine, RiEyeLine } from "react-icons/ri";

import "./Product.css";
const Product = () => {
  return (
    <div className="product group">
      <div className="image">
        <img src="https://picsum.photos/300/350" alt="Product" />
        <div className="background group-hover:opacity-70"></div>
        <div className="category  group-hover:opacity-100 group-hover:bg-white group-hover:text-primary">
          Category
        </div>
        <div className="actions group-hover:flex ">
          <div className="icons">
            <button><RiStarLine size={18} /></button>
            <button><RiArrowLeftRightLine size={18} /></button>
            <button><RiEyeLine size={18} /></button>
          </div>
          <div className="add-to-cart">
            <Button size={ButtonSize.SMALL} width="full" variant={ButtonVariant.SECONDARY}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="detail">
        <h2>Handmade Fresh Table</h2>
        <p>Andy shoes are designed to keeping in...</p>
        <div className="prices">
          <span>$687</span>
          <span className="old-price">$700</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
