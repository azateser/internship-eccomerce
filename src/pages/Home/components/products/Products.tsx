import { useEffect, useState } from "react";
import Product from "../../../../components/product";
import { useAppDispatch, useAppSelector } from "../../../../services";
import "./Products.css";
import { getProducts } from "../../../../services/productsSlice";

const HomeProducts = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const products = useAppSelector((state) => state.products.products);

  const totalProducts = 60;
  const productsPerPage = 8;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    dispatch(getProducts({ offset: (page - 1) * productsPerPage, limit: productsPerPage }));
  }, [dispatch, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };


  return (
    <section className="products">
      <h1>Our Products</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </section>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between gap-4 max-w-2xl m-auto mt-12">
      <button className={`bg-primary text-white cursor-pointer p-2 rounded-md ${currentPage === 1 ? "opacity-50 disabled cursor-not-allowed" : ""}`} onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? "bg-primary text-white cursor-pointer px-4 py-2 rounded-md" : "text-primary cursor-pointer px-4 py-2 rounded-md"}
        >
          {index + 1}
        </button>
      ))}
      <button className={`bg-primary text-white cursor-pointer p-2 rounded-md ${currentPage === totalPages ? "opacity-50 disabled cursor-not-allowed" : ""}`} onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default HomeProducts;
