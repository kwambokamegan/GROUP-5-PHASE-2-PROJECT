import React, { useEffect, useState } from 'react';
import './Discover.css';
function Discover() {
  // Original Places State
  const [originalPlaces, setOriginalPlaces] = useState([]);
  // Filtered Places State
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  // Fetch Places
  useEffect(() => {
    fetch('https://safiri-backend.vercel.app/places')
      .then((response) => response.json())
      .then((placesData) => {
        setOriginalPlaces(placesData); // Set original places
        setFilteredPlaces(placesData); // Also set as filtered initially
      });
  }, []);

  // Display places by iterating through filteredPlaces
  const displayPlaces = filteredPlaces.map((place) => {
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
    const placeId = event.target.id;
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
      <div
        className="saved-place-card"
        key={savedPlace.id}
        onClick={handleSavedPlaceClick}
      >
        <h1>{savedPlace.title}</h1>
        <h4>{savedPlace.transport_options}</h4>
        {/* // <h5>{savedPlace.activities}</h5> */}
      </div>
    );
  });
  //Undo save a place Function
  function handleSavedPlaceClick(event) {
    const savedPlaceId = event.target.key;
    const remainingSavedPlaces = savedPlaces.filter((savedPlace) => {
      // eslint-disable-next-line eqeqeq
      return savedPlace.id != savedPlaceId;
    });
    setSavedPlaces(remainingSavedPlaces);
  }

  // Searching for a place functionality
  const [searchByPlaceTitle, setSearchByPlaceTitle] = useState('');

  function handleSearch(event) {
    const searchValue = event.target.value;
    setSearchByPlaceTitle(searchValue);

    // Update filteredPlaces based on search input
    const searchedPlaces = originalPlaces.filter((place) => {
      return place.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredPlaces(searchedPlaces);
  }

  return (
    <div id="discover-container">
      <div id="content-container">
        <img src="/SAFIRI LOGO.png" alt="safiri-logo" title="safiri-logo" />
        <h1>Discover</h1>
        <input
          type="text"
          id="search-bar"
          placeholder="Search Place"
          onChange={handleSearch}
          value={searchByPlaceTitle}
        />
        <div id="places-container">{displayPlaces}</div>
      </div>
      <div id="saved-content-container">{displaySavedPlaces}</div>
    </div>
  );
}

export default Discover;
