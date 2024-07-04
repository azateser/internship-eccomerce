import React from "react";
import { useAppSelector } from "../../services";
import HomeCategoriesSkeleton from "../../components/skeletons/categories";
import { Category } from "../../interfaces/category";
import Layout from "../../components/layout";
import "./Category.css";

const CategoryPage = () => {
  const categories = useAppSelector((state) => state.categories.categories);
  const loading = useAppSelector((state) => state.categories.loading);
  return (
    <Layout>
      <h1 className="max-w-7xl m-auto md:px-0 px-4 mb-20 mt-4 text-4xl font-semibold">
        Categories
      </h1>

      <div className="categoires-page">
        {!loading ? (
          categories?.map((category: Category) => (
            <div key={category.id} className="item group">
              <img
                src={category.image}
                className="group-hover:opacity-85"
                alt={category.name}
              />
              <div className="group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-xl">
                {category.name}
              </div>
            </div>
          ))
        ) : (
          <HomeCategoriesSkeleton />
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
