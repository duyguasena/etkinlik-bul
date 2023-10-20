import React, { useEffect, useState } from "react";
import "../style/Events.css";

function Events() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler")
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);

  return (
    <div className="row-6">
      {data.map((data) => {
        return (
          <div className="card-container" col>
            <h2 className="card-name">{data.Adi}</h2>
            <h4 className="card-tür">{data.Tur}</h4>
            <p>
              <img className="card-img" src={data.Resim} />
            </p>
            <button className="detail-buton">see Detail</button>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
