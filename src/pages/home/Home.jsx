import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8484/article")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="ماشین هایه آقا ممد" />



      <div className="container">
        <h2>لیست ماشین هایه موجود</h2>

        {/* if ? true : flase */}

        {isLoading ? (
          <Loading />
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link key={article.id} to={`/articlePage/${article.id}`}>
                <Article article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div> 
  );
}

export default Home;
