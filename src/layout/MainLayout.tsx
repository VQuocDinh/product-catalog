import { Outlet } from "react-router-dom";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomLabel from "./components/BottomLabel";

const MainLayout = () => {
  return (
    <>
      <TopBanner />
      <div className="bg-white min-h-screen w-full flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-100">
          <Outlet />
        </main>
        <BottomLabel />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
