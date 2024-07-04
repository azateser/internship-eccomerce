import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/layout";
import { getProductsById } from "../../services/productsSlice";
import { useAppDispatch, useAppSelector } from "../../services";
import ProdcutBreadcrumb from "./components/Breadcrumb";
import "./Product.css";

import ProductImage from "./components/Image";
import { addToCart } from "../../services/cartSlice";
import ProductDetail from "./components/Content";

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { state } = location;

  const productId = state?.product?.id || location.pathname.split("/")[3];

  //eslint-disable-next-line
  const product = state?.product || useAppSelector((state) => state.products.product);
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    if (!state?.product) {
      dispatch(getProductsById(productId));
    }
  }, [dispatch, productId, state]);

  const cartItem = {
    id: product.id,
    title: product.title,
    image: `https://picsum.photos/300/350?random=${product.id}`,
    price: product.price,
    quantity: productCount,
  };

  return (
    <Layout>
      {product ? (
        <div className="product-container">
          <ProdcutBreadcrumb title={product.title} />

          <div className="products">
            <ProductImage productId={productId} title={product.title} />
            <ProductDetail
              product={product}
              handleAddToCart={() => dispatch(addToCart(cartItem))}
              productCount={productCount}
              setProductCount={setProductCount}
            />
          </div>
        </div>
      ) : (
        <h1>Ürün bulunamadı</h1>
      )}
    </Layout>
  );
};

export default ProductPage;
