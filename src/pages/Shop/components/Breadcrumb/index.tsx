import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const ShopBreadcrumb = () => {
  return (
    <div className="breadcrumb">
      <Link to="/" className="">Home</Link>
      <RiArrowDropRightLine />
      <span>All Products</span>
    </div>
  );
};

export default ShopBreadcrumb;
