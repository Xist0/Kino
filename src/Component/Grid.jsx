import '../App.css'
import '../media.css'
import React, { useState, useEffect } from "react";

function Grid() {
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
      <div className="container_grid">
      {array.map((elem, index) => (
        <div className="grid_option">
          <div className="grid_img">
            <img src={elem.urlIcon} alt="" />
          </div>
          <div className="grid_rating">
            <h1>{elem.averageRating}</h1>
          </div>
          <div className="grid_title">
            <h1>{elem.localName}</h1>
          </div>
          <div className="grid_hanr">
            <p>{elem.genres.join(", ")}</p>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}
export default Grid;
