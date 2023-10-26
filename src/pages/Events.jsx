import React, { useState, useEffect } from "react";
import "../style/Events.css";

function Events() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(3);

  function showMoreEvents() {
    setVisible((data) => (data += 3));
  }

  useEffect(() => {
    fetch("https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="events">
      <h1 className="card-header">EVENTS</h1>
      <div className="card-container">
        {data &&
          data.slice(0, visible).map((data) => (
            <div className="card">
              <div className="card-image">
                <img className="card-image" src={data.Resim}></img>
              </div>
              <p className="card-p">{data.Adi}</p>
            </div>
          ))}
      </div>
      <button onClick={showMoreEvents} className="card-buton">
        Learn More
      </button>
    </div>
  );
}

export default Events;
