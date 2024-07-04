import ProductInfo from "./components/Info";
import ProductActions from "./components/Actions";

const ProductDetail = ({
  product,
  handleAddToCart,
  productCount,
  setProductCount,
}: any) => {
  const favoriteItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
  };

  return (
    <div>
      <ProductInfo
        title={product.title}
        price={product.price}
        description={product.description}
      />
      <ProductActions
        handleAddToCart={handleAddToCart}
        favoriteItem={favoriteItem}
        productCount={productCount}
        setProductCount={setProductCount}
      />
    </div>
  );
};

export default ProductDetail;
