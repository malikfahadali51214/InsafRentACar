import React from 'react';
import { FaCar, FaDoorOpen } from 'react-icons/fa'; // Door and Car icons from react-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'; // Import specific Font Awesome icon
import "./CarCard.css";
import carimage from "../../Assets/image2.png";

const CarCard = () => {
  return (
    <div className="car-card">
      <img className="car-image" src={carimage} alt="Car" />
      
      <div className="car-type">
        <span>Hybrid Car</span> {/* Background only for this text */}
      </div>
      
      <div className="car-name">
        <h3>Car Name</h3>
      </div>
      
      <div className="car-details">
        <div className="detail-item">
          <div className="icon-text">
            <FaDoorOpen className="icon" />
            <span>Door</span>
          </div>
          <span className="detail-value">4</span>
        </div>
        
        <div className="detail-item">
          <div className="icon-text">
            <FaCar className="icon" />
            <span>Passenger</span>
          </div>
          <span className="detail-value">2</span>
        </div>
      </div>
      
      <hr className="separator" />
      
      <div className="price-container">
        <span className="price">
          $<strong>245</strong> <span className="per-day">/Per Day</span>
        </span>
        <div className="book-button">
          <span className="book-text">Book</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="arrow" />
        </div>
      </div>
    </div>
  );
};

// Parent component to display multiple car cards
const CarCardContainer = () => {
  return (
    <div className="car-card-container">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
};

export default CarCardContainer;
