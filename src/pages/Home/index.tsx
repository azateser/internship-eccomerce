import Layout from "../../components/layout";
import HomeCategoires from "./components/categories/Categories";
import HomeProducts from "./components/products/Products";
const HomePage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center text-white text-xl select-none w-full md:h-[600px] h-96 bg-gray-500 mb-24">
        Banner Image
        </div>
      <HomeCategoires />
      <HomeProducts />
    </Layout>
  );
};

export default HomePage;
