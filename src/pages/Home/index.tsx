import { Route, Routes } from "react-router-dom";
import Header from "../../layout/Header";
import ProductList from "./ProductList";
import './index.scoped.scss'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-100">
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </main>
    </>
  );
};

export default Home;
