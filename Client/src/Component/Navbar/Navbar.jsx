  // Navigation.js
  import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'; // Import specific Font Awesome icon
  import logo from  "../../Assets/logo.png"
  const Navigation = () => {
    const navbarStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'white',
       // Optional: adds a subtle shadow
    };

    const logoStyle = {
      flex: 1,
    };

    const logoImgStyle = {
      height: '50px',
      width: 'auto',
    };

    const navLinksStyle = {
      flex: 2,
      display: 'flex',
      justifyContent: 'center',
    };

    const navLinkStyle = {
      color: 'black',
      textDecoration: 'none',
      margin: '0 15px',
      fontSize: '18px',
      paddingBottom: '5px', // Adds space between text and the underline
      position: 'relative', // Needed to position the pseudo-element
      transition: 'color 0.3s', // Smooth transition for color
    };

    const navLinkHoverStyle = {
      color: '#0d6efd',
    };

    const navLinkBeforeStyle = {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px', // Height of the underline
      backgroundColor: '#0d6efd',
      transition: 'width 0.3s ease', // Transition effect for the width
    };

    const bookNowStyle = {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    };

    const buttonStyle = {
      backgroundColor: '#2d74ba',
      border: '2px solid transparent', // Add a border to maintain the button's size during transition
      color: 'white',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s, border-color 0.3s', // Smooth transition for background, text, and border
      borderRadius: '5px', // Optional: adds rounded corners to the button
      display: 'flex',
      alignItems: 'center',
    };
    
    const buttonHoverStyle = {
      backgroundColor: 'white', // Background changes to white
      color: '#2d74ba', // Text changes to blue
      borderColor: '#2d74ba', // Add a blue border for contrast
    };
    
    const iconStyle = {
      marginLeft: '10px', // Adds space between text and icon
    };

    return (
      <nav style={navbarStyle}>
        <div style={logoStyle}>
          <img src={logo} alt="Logo" style={logoImgStyle} />
        </div>
        <div style={navLinksStyle}>
          <a 
            href="#home" 
            style={navLinkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = navLinkHoverStyle.color;
              const underline = e.target.querySelector('span');
              underline.style.width = '100%'; // Expand the underline to full width
            }} 
            onMouseLeave={(e) => {
              e.target.style.color = 'black';
              const underline = e.target.querySelector('span');
              underline.style.width = '0%'; // Reset the underline width to 0
            }}
          >
            Home
            <span style={navLinkBeforeStyle}></span>
          </a>
          <a 
            href="#booking" 
            style={navLinkStyle} 
            onMouseEnter={(e) => {
              e.target.style.color = navLinkHoverStyle.color;
              const underline = e.target.querySelector('span');
              underline.style.width = '100%'; // Expand the underline to full width
            }} 
            onMouseLeave={(e) => {
              e.target.style.color = 'black';
              const underline = e.target.querySelector('span');
              underline.style.width = '0%'; // Reset the underline width to 0
            }}
          >
            Booking
            <span style={navLinkBeforeStyle}></span>
          </a>
          <a 
            href="#about" 
            style={navLinkStyle} 
            onMouseEnter={(e) => {
              e.target.style.color = navLinkHoverStyle.color;
              const underline = e.target.querySelector('span');
              underline.style.width = '100%'; // Expand the underline to full width
            }} 
            onMouseLeave={(e) => {
              e.target.style.color = 'black';
              const underline = e.target.querySelector('span');
              underline.style.width = '0%'; // Reset the underline width to 0
            }}
          >
            About
            <span style={navLinkBeforeStyle}></span>
          </a>
          <a 
            href="#contact" 
            style={navLinkStyle} 
            onMouseEnter={(e) => {
              e.target.style.color = navLinkHoverStyle.color;
              const underline = e.target.querySelector('span');
              underline.style.width = '100%'; // Expand the underline to full width
            }} 
            onMouseLeave={(e) => {
              e.target.style.color = 'black';
              const underline = e.target.querySelector('span');
              underline.style.width = '0%'; // Reset the underline width to 0
            }}
          >
            Contact
            <span style={navLinkBeforeStyle}></span>
          </a>
        </div>
        <div style={bookNowStyle}>
          <button 
            style={buttonStyle} 
            onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Book Now
            <FontAwesomeIcon icon={faArrowAltCircleRight} style={iconStyle} />
          </button>
        </div>
      </nav>
    );
  };

  export default Navigation;
