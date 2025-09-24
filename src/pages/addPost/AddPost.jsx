import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./addPost.module.css";
import Footer from "../../components/footer/Footer";
import Inpute from "../../components/inpute/Inpute";
import Textarea from "../../components/textarea/Textarea";
import axios from "axios";

function AddPost() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    price: "",
    athor: "",
    message: "",
    imgUrl: "",
  });

  const onChangeHandler = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeMessageHandler = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const handleCreateNewArticle = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      id: 11,
      imgeUrl: article.imgUrl,
      title: article.title,
      price: article.price,
      date: article.date,
      athor: article.athor,
      content: article.message,
    });
  };

  return (
    <>
      <Navbar title="کار شاپ" />
      <div className="container">
        <div className={styled.headAdd}>
          <h2>ساخت مقاله</h2>

          <Inpute
            label="عنوان"
            name="title"
            handleChange={onChangeHandler}
            type="text"
          />

          <Inpute
            label="تاریخ"
            name="date"
            handleChange={onChangeHandler}
            type="text"
          />

          <Inpute
            label="قیمت"
            name="price"
            handleChange={onChangeHandler}
            type="text"
          />

          <Inpute
            label="مشخصات فروشنده"
            name="athor"
            handleChange={onChangeHandler}
            type="text"
          />

          <Inpute
            label="لینک عکس"
            name="imgUrl"
            handleChange={onChangeHandler}
            type="url"
          />

          {/* 
          <div className={styled.inputeWarper}>
            <label>عنوان</label>
            <input name="title" type="text" onChange={onChangeHandler} />
          </div>

          <div className={styled.inputeWarper}>
            <label>تاریخ</label>
            <input name="date" type="text" onChange={onChangeHandler} />
          </div>

          <div className={styled.inputeWarper}>
            <label>قمیت</label>
            <input name="price" type="text" onChange={onChangeHandler} />
          </div>

          <div className={styled.inputeWarper}>
            <label>نویسنده</label>
            <input name="athor" type="text" onChange={onChangeHandler} />
          </div> */}

          <Textarea label="توضیحات" handleChange={onChangeMessageHandler} />

          <div className={styled.buttonWrapper}>
            <button onClick={handleCreateNewArticle}>ایجاده پست</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddPost;
