import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";

function ArticlePage() {
  const params = useParams();

console.log("params:",params);


  const [dat, setDat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8484/article/${params.id}`)
      .then((res) => {
        setDat(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  console.log("dat:",dat);
  

  return (
    <div className={styled.head}>
      <Navbar title="ماشین های آقا ممد" />
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styled.article}>
          <h1>{dat.title}</h1>
          <div className={styled.details}>
            <span>فروشنده: {dat.athor}</span>
            <span>تاریخ : {dat.date}</span>
            <span>آی دی: {dat.id}</span>
          </div>
          <h2>قیمت:{dat.price}</h2>
          <img src={dat.imgeUrl} />
          <h4>{dat.content}</h4>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ArticlePage;
