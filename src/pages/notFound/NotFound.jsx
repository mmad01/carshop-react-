import React from "react";
import styled from "./notFound.module.css";
import Navbar from "../../components/navbar/Navbar"

function NotFound() {
  return (
    <>
    <Navbar className={styled.nav} title="ممد شاپ" />
      <div className={styled.notFoundwarpper}>
        <h1>404Error</h1>
      </div>
    </>
  );
}

export default NotFound;
