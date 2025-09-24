import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <div className={`container px-0 border`}>
        <Navbar />
        <div className="p-3">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/articlePage/:id" element={<ArticlePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
