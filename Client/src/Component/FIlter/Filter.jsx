import React from "react";
import "./Filter.css";
import { FaMapMarkerAlt, FaRegClock, FaCalendarAlt, FaSearch } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-row">
        <div className="filter-item">
          <label>Pick Up Location</label>
          <div className="input-container">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="Pick-up-location" />
          </div>
        </div>
        <div className="vertical-divider" />
        <div className="filter-item">
          <label>Drop Up Location</label>
          <div className="input-container">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="Drop-up-location" />
          </div>
        </div>
      </div>
      <div className="filter-row">
        <div className="filter-item">
          <label>Pick Up Date</label>
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input type="date" />
          </div>
        </div>
        <div className="vertical-divider" />
        <div className="filter-item">
          <label>Time (Optional)</label>
          <div className="input-container">
            <FaRegClock className="icon" />
            <input type="time" />
          </div>
        </div>
        <div className="vertical-divider" />
        <div className="filter-item">
          <label>Drop Up Date</label>
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input type="date" />
          </div>
        </div>
        <div className="vertical-divider" />
        <div className="filter-item">
          <label>Time (Optional)</label>
          <div className="input-container">
            <FaRegClock className="icon" />
            <input type="time" />
          </div>
        </div>
      </div>
      <button className="search-button">
        Search Now <FaSearch className="icon" />
      </button>
    </div>
  );
};

export default Filter;