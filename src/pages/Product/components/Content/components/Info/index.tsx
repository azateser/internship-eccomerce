import { FaStar } from "react-icons/fa";

const ProductInfo = ({ title, price, description }: any) => {
  return (
    <>
      <div className="information">
        <h1>{title}</h1>
        <p>IN STOCK</p>
      </div>

      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} size={24} />
        ))}{" "}
        <span>5.0 (10 Reviews)</span>
      </div>

      <div className="price">
        <p className="current-price">${price}</p>
        <p className="old-price">${price + 40}</p>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProductInfo;
