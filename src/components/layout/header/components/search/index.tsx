import React from "react";
import { RiHeart3Line } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../../../services";
import { searchProducts } from "../../../../../services/productsSlice/api";
import { addToCart } from "../../../../../services/cartSlice";

const SearchModal = ({ show, onClose }: any) => {
  const products = useAppSelector((state) => state.products.search);
  const dispatch = useAppDispatch();

  const handleSearch = (e: any) => {
    const title = e.target.value;
    dispatch(searchProducts({ title }));
  };

  const handleAddToCart = (product: any) => {
    const cartItem = {
      id: product.id,
      title: product.title,
      image: `https://picsum.photos/300/350?random=${product.id}`,
      price: product.price,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      {show && (
        <div>
          <div
            className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-50 flex justify-center items-center"
            onClick={onClose}
          ></div>
          <div className="bg-white p-4 max-w-3xl w-full m-auto rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 p-2 rounded-lg"
            />

            <ul className="mt-4 flex flex-col gap-4 overflow-y-auto max-h-96">
              {products.map((product: any) => (
                <li className="flex justify-between">
                  <div className="flex gap-4">
                    <div>
                      <img
                        className="w-18 rounded-lg"
                        src={`https://picsum.photos/80/80?random=${product.id}`}
                        alt="product"
                      />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">{product.title}</h1>
                      <p className="text-gray-500">
                        {product.description.slice(0, 50)}...
                      </p>
                      <p className="text-primary font-bold">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-all"
                    >
                      Add to cart
                    </button>
                    <button className="border border-solid border-primary text-primary p-2 rounded-lg hover:bg-red-500 transition-all hover:text-white hover:border-red-500">
                      <RiHeart3Line size={24} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
