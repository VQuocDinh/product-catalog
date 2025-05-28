import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import ProductList from "./pages/Home/ProductList";
import TopBanner from "./layout/TopBanner";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <TopBanner />
      <div className="bg-white min-h-screen w-full flex flex-col ">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
