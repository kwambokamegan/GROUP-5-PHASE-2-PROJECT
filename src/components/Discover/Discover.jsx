import React, { useEffect, useState } from 'react';
import './Discover.css';
function Discover() {
  //Places State
  const [places, setPlaces] = useState([]);
  //Fetch Places
  useEffect(() => {
    fetch('https://safiri-backend.vercel.app/places')
      .then((response) => response.json())
      .then((placesData) => setPlaces(placesData));
  }, []);

  //   console.log(places);
  //Display places by iterating through places
  const displayPlaces = places.map((place) => {
    return (
      <div className="place-card" key={place.id}>
        <video
          autoPlay
          muted
          loop
          className="place-video"
          id={place.id}
          onClick={handlePlaceClick}
        >
          <source src={place.image} type="video/mp4"></source>
        </video>
        <h1>{place.title}</h1>
        <h4>{place.description}</h4>
        <h5>{place.activities}</h5>
      </div>
    );
  });

  //Save a place
  const [savedPlaces, setSavedPlaces] = useState([]);
  function handlePlaceClick(event) {
    console.log(savedPlaces);
    const placeId = event.target.id;
    console.log(placeId);
    fetch(`https://safiri-backend.vercel.app/places/${placeId}`)
      .then((response) => response.json())
      .then((place) => {
        if (!savedPlaces.some((savedPlace) => savedPlace.id === place.id)) {
          setSavedPlaces((prevState) => [...prevState, place]);
        }
      });
  }

  //Add a saved place to the Saved places section
  const displaySavedPlaces = savedPlaces.map((savedPlace) => {
    return (
      <div className="saved-place-card" key={savedPlace.id}>
        <h1>{savedPlace.title}</h1>
        <h4>{savedPlace.transport_options}</h4>
        {/* // <h5>{savedPlace.activities}</h5> */}
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

      <div id="saved-content-container">{displaySavedPlaces}</div>
    </div>
  );
}

export default Discover;
