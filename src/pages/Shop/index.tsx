import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import "./Shop.css";
import ShopBreadcrumb from "./components/Breadcrumb";
import { RiArrowDropUpLine } from "react-icons/ri";
import Checkbox from "../../components/shared/Checkbox";
import { useAppDispatch, useAppSelector } from "../../services";
import { searchProducts } from "../../services/productsSlice/api";
import Product from "../../components/product";

const ShopPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.search);
  const categories = useAppSelector((state) => state.categories.categories);
  const [searchName, setSearchName] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [category, setCategory] = useState<number | null>(null);

  const [showNameFilter, setShowNameFilter] = useState(true);
  const [showCategoryFilter, setShowCategoryFilter] = useState(true);
  const [showPriceFilter, setShowPriceFilter] = useState(true);

  const toggleNameFilter = () => {
    setShowNameFilter(!showNameFilter);
  };

  const toggleCategoryFilter = () => {
    setShowCategoryFilter(!showCategoryFilter);
  };

  const togglePriceFilter = () => {
    setShowPriceFilter(!showPriceFilter);
  };

  const handleCategoryChange = (selectedCategory: number) => {
    setCategory((prevCategory) => (prevCategory === selectedCategory ? null : selectedCategory));
  };

  console.log(category)

  useEffect(() => {
    dispatch(
      searchProducts({
        title: searchName,
        price_min: minPrice,
        price_max: maxPrice,
        categoryId: category,
      })
    );
  }, [searchName, minPrice, maxPrice, category, dispatch]);

  return (
    <Layout>
      <div className="shop-container">
        <ShopBreadcrumb />

        <div className="content">
          <div className="filterWrapper">
            <div className="filterItem">
              <h1
                className="cursor-pointer flex items-center justify-between font-bold text-xl"
                onClick={toggleNameFilter}
              >
                Filter by Name
                <RiArrowDropUpLine
                  size={30}
                  style={{
                    transform: showNameFilter
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </h1>
              {showNameFilter && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search Product Name"
                    className="w-full px-3 border border-gray-300 rounded-lg py-4"
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="filterItem">
              <h1
                className="cursor-pointer flex items-center justify-between font-bold text-xl"
                onClick={toggleCategoryFilter}
              >
                Product Categories
                <RiArrowDropUpLine
                  size={30}
                  style={{
                    transform: showNameFilter
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </h1>
              {showCategoryFilter && (
                <div>
                  <ul className="flex flex-col gap-2">
                  {categories.map((cat: any) => (
                      <li key={cat.id}>
                        <Checkbox
                          label={cat.name}
                          checked={category === cat.id}
                          onChange={() => handleCategoryChange(Number(cat.id))}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="filterItem">
              <h1
                className="cursor-pointer flex items-center justify-between font-bold text-xl"
                onClick={togglePriceFilter}
              >
                Filter by Price
                <RiArrowDropUpLine
                  size={30}
                  style={{
                    transform: showNameFilter
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </h1>
              {showPriceFilter && (
                <div className="flex gap-4 mt-4">
                  <input
                    type="number"
                    placeholder="Min Price"
                    className="w-full px-3 border border-gray-300 rounded-lg py-4"
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    className="w-full px-3 border border-gray-300 rounded-lg py-4"
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="productsWrapper">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
