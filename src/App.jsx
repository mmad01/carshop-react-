import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AbouteUs from "./pages/aboutUs/AbouteUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import AddPost from "./pages/addPost/AddPost";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboute" element={<AbouteUs />} />
        <Route path="/articlePage/:id" element={<ArticlePage />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
