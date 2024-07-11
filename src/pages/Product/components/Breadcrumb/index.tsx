import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const ProdcutBreadcrumb = ({ title }: { title: string }) => {
  return (
    <div className="breadcrumb">
      <Link to="/" className="">Home</Link>
      <RiArrowDropRightLine />
      <Link to="/shop">Products</Link>
      <RiArrowDropRightLine /> <span>{title}</span>
    </div>
  );
};

export default ProdcutBreadcrumb;
