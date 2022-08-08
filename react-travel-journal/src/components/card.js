import React from "react";

const Card = (places) => {
  //console.log(places);

  return (
    <div className="card">
      <img src={places.imageUrl} alt="avatar" width="160" height="240" />
      <div className="details">
        <div className="loc">
          <ion-icon name="location-outline"></ion-icon>
          <small>{places.location}</small>
          <a href={places.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{places.location}</h2>
        <p>
          {places.startDate} - {places.endDate}
        </p>
        <p>{places.description}</p>
      </div>
    </div>
  );
};
export default Card;
