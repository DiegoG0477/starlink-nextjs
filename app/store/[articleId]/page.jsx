'use client'
import React, { useEffect } from "react";

const ArticleId = (props) => {
  return (
    <>
    <h1 style={{color:"white"}}>COMPRE EL ARTÍCULO CON EL ID: {props.params.articleId}</h1></>
    );
};

export default ArticleId;