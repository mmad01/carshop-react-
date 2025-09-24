import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/app.css";
import CartPage from "./pages/CartPage/CartPage";
import UserPage from "./pages/userPage/UserPage";

function App() {
  return (
    <div className="App">
      <div className={`container px-0 border`}>
        <Navbar />
        <div className="p-3">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/userPage" element={<UserPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
