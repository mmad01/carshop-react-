import { useEffect, useState } from "react";
import Article from "../components/article/Article";
import Loading from "../components/loading/Loading";
import { list } from "../Api/Products";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await list();
      setLoading(false);
      setProducts(result);

      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <h6 className="mb-3 px-3">لیست ماشین هایه موجود</h6>

      {loading ? <Loading /> : <div className="row mx-0">{products && products.length > 0 ? products.map((article) => <Article article={article} key={article.id} />) : "موردی یافت نشد"}</div>}
    </>
  );
}

export default Home;
