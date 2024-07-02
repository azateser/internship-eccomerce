import Carousel from "react-multi-carousel";
import responsive from "../../../../constants/responsiveSettings";
import { useAppSelector } from "../../../../services";
import { Category } from "../../../../interfaces/category";
import HomeCategoriesSkeleton from "../../../../components/skeletons/categories";
import "./Categories.css";

const HomeCategoires = () => {
  const categories = useAppSelector((state) => state.categories.categories);
  const loading = useAppSelector((state) => state.categories.loading);
  return (
    <section className="categoires">
      <h1>Shop By Categories</h1>

      <div>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          itemClass="item-class"
        >
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
        </Carousel>
      </div>
    </section>
  );
};

export default HomeCategoires;
