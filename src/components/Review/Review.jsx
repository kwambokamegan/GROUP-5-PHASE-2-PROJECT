import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './Review.css';
import logo from '../pictures/SAFIRI LOGO.png';
import Footer from '../Footer/Footer';

const Review = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(null);
  const [source, setSource] = useState('');
  const [image, setImage] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          'https://safiri-backend.vercel.app/reviews'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          console.error('Unexpected data structure:', data);
          setReviews([]);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviews([]);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReview = {
      id: Date.now(),
      name,
      place,
      review: reviewText,
      image,
      rating,
      source,
    };

    console.log(newReview);

    setReviews([...reviews, newReview]);

    setName('');
    setPlace('');
    setReviewText('');
    setRating(null);
    setSource('');
    setImage('');
  };

  return (
    <div id='review-page'>
      <NavBar />

      <img src={logo} alt="safiri-logo" id="safiri-logo" />
      <h1>Review</h1>

      <div className="review-container">
        <div className="form-container">
          <h2>Submit Your Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="place">Place Visited:</label>
              <input
                type="text"
                id="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reviewText">Review:</label>
              <textarea
                id="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image :</label>
              <input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Enter image URL (optional)"
              />
            </div>
            <div className="form-group">
              <label>How was your experience using our website?</label>
              <div className="rating">
                {Array.from({ length: 10 }, (_, i) => (
                  <span
                    key={i + 1}
                    className={`circle ${rating === i + 1 ? 'selected' : ''}`}
                    onClick={() => setRating(i + 1)}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="source">How did you hear about us?</label>
              <select
                id="source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="friends">From Friends</option>
                <option value="family">From Family</option>
                <option value="advertisement">From an Advertisement</option>
                <option value="social-media">From Social Media</option>
              </select>
            </div>
            <button type="submit" id='submit-review-button'>Submit Review</button>
          </form>
        </div>
        <div className="existing-reviews new-reviews">
          <h2>Reviews from Other Tourists</h2>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review.id} className="review-item">
                  {review.image && (
                    <img
                      src={review.image}
                      alt={`${review.name}'s review`}
                      className="review-picture"
                    />
                  )}
                  <h3>{review.name}</h3>
                  {review.place && (
                    <p>
                      <strong>Place Visited:</strong> {review.place}
                    </p>
                  )}
                  {review.review && (
                    <p>
                      <strong>Review:</strong> {review.review}
                    </p>
                  )}
                  {/* Removed rating and source */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </div>
      <div id='review-page-footer'>
      <Footer />
      </div>
    </div>
  );
};

export default Review;
