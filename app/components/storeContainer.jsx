'use client'
import { useEffect, useState } from "react";
import Card from "./card";

export default function StoreContainer() {
    const [articles, setArticles] = useState([]);

  function getArticles() {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => {
        setArticles(json);
        console.log(articles);
        })
        .catch((error) => {
            console.error("Error al cargar los artículos:", error);
      });
  }

  useEffect(() => {
    getArticles();
  }
    , []);

  return (
  <div class="store-cards-container" id="cardsContainer">
    {articles.map((article) => {
      return (
        <Card
          image={article.image}
          title={article.title}
          price={article.price}
        />
      );
    })}
  </div>);
}
