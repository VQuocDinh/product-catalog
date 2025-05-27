import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import TopBanner from "./components/TopBanner";
import Footer from "./components/Footer";

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
