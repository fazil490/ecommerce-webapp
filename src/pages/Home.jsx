import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Sidebar from "../components/Sidebar";
import BestSelling from "../components/BestSelling";

const Home = () => {
  return (
    <div>
      <div className="lg:hidden sticky z-20">
        <Sidebar />
      </div>
      <Hero />
      <Categories />
      <BestSelling />
    </div>
  );
};

export default Home;
