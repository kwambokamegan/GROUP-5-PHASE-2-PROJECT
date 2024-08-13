import React, { useEffect, useState } from 'react';
import './Discover.css';
function Discover() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('https://safiri-backend.vercel.app/places')
      .then((response) => response.json())
      .then((placesData) => setPlaces(placesData));
  }, []);

  console.log(places);

  const displayPlaces = places.map((place) => {
    return (
      <div className="place-card" key={place.id}>
        <video autoPlay muted width="500px" height="500px">
          <source src={place.image} type="video/mp4"></source>
        </video>
        <h1>{place.title}</h1>
        <p>{place.description}</p>
        <p>{place.activities}</p>
      </div>
    );
  });
  return (
    <div id="discover-container">
      <div id="content-container">
        <img src="/SAFIRI LOGO.png" alt="safiri-logo" title="safiri-logo" />
        <h1>Discover</h1>
        <div id="places-container">{displayPlaces}</div>
      </div>

      <div id="saved-content-container"></div>
    </div>
  );
}

export default Discover;
