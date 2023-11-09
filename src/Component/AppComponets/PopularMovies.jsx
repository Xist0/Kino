import React, { useState, useEffect } from "react";

import "./PopularMovies.css";
function PopularMovies() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("http://192.168.144.66:8081/api/movies")
      .then((response) => response.json())
      .then((json) => {
        setArray(json);
      });
  }, []);

  return (
    <>
      <div className="PMC">
        <div className="PM_Heading">
          <h className="PM_Heading_txt">Популярные фильмы</h>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="2"
            viewBox="0 0 54 2"
            fill="none"
          >
            <path
              d="M1 1H52.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <div className="PM_Heading_menu">
            <h className="PM_Heading_menu_txt">Всё время</h>
            <h className="PM_Heading_menu_txt">2023</h>
            <h className="PM_Heading_menu_txt">2022</h>
            <h className="PM_Heading_menu_txt">2021</h>
            <h className="PM_Heading_menu_txt">2020</h>
            <h className="PM_Heading_menu_txt">2019</h>
            <h className="PM_Heading_menu_txt">2018</h>
          </div>
        </div>
      </div>
      <div className="PMC">
        <div className="LONP_Cards">
          {array.slice(0, 4).map((elem, index) => (
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
                <h className="LONP_Description_txt_2">
                  {elem.genres.join(", ")}
                </h>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="PMC">
        <div className="PM_Arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
          >
            <path
              d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM27 10.5L2 10.5V13.5L27 13.5V10.5Z"
              fill="white"
            />
          </svg>
          <h className="PM_Arrow_txt">4/15</h>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
          >
            <path
              d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807611 14.9792 0.807611 14.3934 1.3934C13.8076 1.97919 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM0 13.5L25 13.5V10.5L0 10.5L0 13.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
export default PopularMovies;
