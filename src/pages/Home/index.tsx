import Layout from "../../components/layout";
import HomeCategoires from "./components/categories/Categories";
import HomeProducts from "./components/products/Products";

const HomePage = () => {
  return (
    <Layout>
      <HomeCategoires />
      <HomeProducts />
    </Layout>
  );
};

export default HomePage;
