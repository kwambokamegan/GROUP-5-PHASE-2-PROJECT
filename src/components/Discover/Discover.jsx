import React, { useEffect, useState } from 'react';
import './Discover.css';
import NavBar from '../NavBar/NavBar';
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
  //   let [likedHeart, setLikedHeart] = useState(false);

  const displayPlaces = filteredPlaces.map((place) => {
    return (
      <div className="place-card" key={place.id}>
        <details>
          <summary>
            <video autoPlay muted loop className="place-video" id={place.id}>
              <source src={place.image} type="video/mp4"></source>
            </video>
            <h1>{place.title}</h1>
          </summary>
          <div className="details-content">
            <button
              id={place.id}
              className="save-button"
              onClick={handleAddPlace}
            >
              Save
              {/* {likedHeart ? '♥' : '♡'}
              {likedHeart ? 'Save/' : 'Unsave'} */}
            </button>
            <h4>{place.description}</h4>
            <h5>{place.activities}</h5>
          </div>
        </details>
      </div>
    );
  });

  //Save a place
  const [savedPlaces, setSavedPlaces] = useState([]);

  function handleAddPlace(event) {
    const placeId = event.target.id;
    fetch(`https://safiri-backend.vercel.app/places/${placeId}`)
      .then((response) => response.json())
      .then((place) => {
        if (!savedPlaces.some((savedPlace) => savedPlace.id === place.id)) {
          setSavedPlaces((prevState) => [...prevState, place]);
        }
        // setLikedHeart((likedHeart = true));
        // setSavedPlaceLikedHeart((savedPlaceLikedHeart = true));
      });
  }

  //Add a saved place to the Saved places section
  //   let [savedPlaceLikedHeart, setSavedPlaceLikedHeart] = useState(true);

  const displaySavedPlaces = savedPlaces.map((savedPlace) => {
    return (
      <div
        className="saved-place-card"
        key={savedPlace.id}
        onClick={handleSavedPlaceClick}
      >
        <h1>{savedPlace.title}</h1>
        <h4>{savedPlace.transport_options}</h4>
        <button
          id={savedPlace.id}
          className="unsave-button"
          onClick={handleSavedPlaceClick}
        >
          Unsave
          {/* {savedPlaceLikedHeart ? '♥' : '♡'}
          {savedPlaceLikedHeart ? 'Unsave/' : 'Save'} */}
        </button>
      </div>
    );
  });
  //Undo save a place Function
  function handleSavedPlaceClick(event) {
    const savedPlaceId = event.target.id;
    // setSavedPlaceLikedHeart((savedPlaceLikedHeart = false));
    // setLikedHeart((likedHeart = false));

    setTimeout(() => {
      const remainingSavedPlaces = savedPlaces.filter((savedPlace) => {
        // eslint-disable-next-line eqeqeq
        return savedPlace.id != savedPlaceId;
      });
      setSavedPlaces(remainingSavedPlaces);
    }, 1000);
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

  //For responsiveness, Open Saved places
  const [savedPlacesOpened, setSavedPlacesOpened] = useState(false);
  function handleSavedPlaces() {
    setSavedPlacesOpened(!savedPlacesOpened);
  }
  return (
    <div>
      <>
        <NavBar />
      </>
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
          <button id="handle-savedplaces-button" onClick={handleSavedPlaces}>
            ☰Open Saved Places
          </button>
          <div id="places-container">{displayPlaces}</div>
        </div>
        <div
          id="saved-content-container"
          style={savedPlacesOpened ? { width: '300px' } : {}}
        >
          <button id="handle-savedplaces-button" onClick={handleSavedPlaces}>
            ☰Close Saved Places
          </button>

          {displaySavedPlaces}
        </div>
      </div>
    </div>
  );
}

export default Discover;
