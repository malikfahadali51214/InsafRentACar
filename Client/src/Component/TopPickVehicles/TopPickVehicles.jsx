import React from 'react';

const TopPickVehicles = () => {
  return (
    <div style={styles.container}>
      {/* Left side content */}
      <div style={styles.leftSide}>
        <h2 style={styles.heading}>Top Pick Vehicles This Month</h2>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Ut porttitor proin id sem lacus volutpat. Bibendum metus in imperdiet sed habitant.
        </p>
        
      </div>
      
      {/* Right side button */}
      <button style={styles.button}>See All Cars</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    paddingLeft: '25px',  // Added gap on the left
    paddingRight: '25px', // Added gap on the right
    borderRadius: '8px',
    backgroundColor: 'white',
  },
  leftSide: {
    maxWidth: '60%',
  },
  heading: {
    fontSize: '44px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.5',
    maxWidth:'450px',
    marginBottom: '20px',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    fontSize: '16px',
    color: '#2D74BA',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#1D5E99',
  },
  button: {
    backgroundColor: '#2D74BA',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default TopPickVehicles;
