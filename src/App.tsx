import { BrowserRouter as Router } from "react-router-dom";
import TopBanner from "./layout/TopBanner";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import BottomLabel from "./layout/BottomLabel";

function App() {
  return (
    <Router>
      <TopBanner />
      <div className="bg-white min-h-screen w-full flex flex-col ">
        <Home />
        <BottomLabel />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
