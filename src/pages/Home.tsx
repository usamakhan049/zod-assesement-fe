import MainSection from "@components/MainSection";
import Sidebar from "@components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <MainSection />
    </div>
  );
};

export default Home;
