import React, { useState, useEffect } from "react";

import "./ListOfNewProducts.css";

function ListOfNewProducts() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("http://192.168.144.66:8081/api/movies")
      .then((response) => response.json())
      .then((json) => {
        setArray(json);
      });
  }, []);

  return (
    <div className="LONP">
      <div className="LONP_Heading">
        <h className="LONP_Heading_txt">Сейчас в кино</h>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="2"
          viewBox="0 0 500 2"
          fill="none"
        >
          <path
            d="M1 1H500"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="LONP_Heading_txt_menu_master">
          <h className="LONP_Heading_txt_menu">Все</h>
          <h className="LONP_Heading_txt_menu">Боевики</h>
          <h className="LONP_Heading_txt_menu">Приключения</h>
          <h className="LONP_Heading_txt_menu">Комедии</h>
          <h className="LONP_Heading_txt_menu">Фантастика</h>
          <h className="LONP_Heading_txt_menu">Триллеры</h>
          <h className="LONP_Heading_txt_menu">Драма</h>
        </div>
      </div>
      <div className="LONP_Cards">
        {array.map((elem, index) => (
          <div className="Lonp_Card" key={index}>
            <div
              className="Lonp_card_img"
              style={{ backgroundImage: `url(${elem.urlIcon})` }}
            >
              <div className="LONP_Rating">
                <h className="LONP_Rating_text">{elem.averageRating}</h>
              </div>
            </div>
            <div className="LONP_Description">
              <h className="LONP_Description_txt_1">{elem.localName}</h>
              <h className="LONP_Description_txt_2">{elem.genres.join(", ")}</h>
            </div>
          </div>
        ))}
      </div>
      <div className="LONP_All_New_Items_Button">
        <h className="LONP_All_New_Items_Button_txt">Все новинки</h>
      </div>
    </div>
  );
}

export default ListOfNewProducts;
