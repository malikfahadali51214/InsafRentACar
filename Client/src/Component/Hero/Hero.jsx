import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the car and phone icons
import carImage1 from "../../Assets/hero-group.png";

// Styled components
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: white;
  width: 100%; /* Ensure the container takes full width */
  box-sizing: border-box; /* Ensure padding does not affect width */
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 20px;
  z-index: 2; /* Ensure text is above the background */
  max-width: 1200px; /* Restrict max-width to prevent the content from stretching too much */
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: black;
  line-height: 1.4;
  white-space: nowrap; /* Ensure the text stays in a single line */
  font-family: 'Arial', sans-serif; /* Change the font family */
  margin-bottom: 20px;

  /* Responsive typography */
  @media (max-width: 768px) {
    font-size: 2.5rem; /* Smaller font size on tablet */
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Even smaller font size on mobile */
    line-height: 1.2;
  }
`;

const Highlight = styled.span`
  background: #2D74BA; /* Gradient for highlighting text */
  color: transparent;
  -webkit-background-clip: text; /* Text color clipping with gradient */
`;

const CarRentalText = styled.span`
  color: #000; /* Car Rental text in black */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */

  @media (max-width: 768px) {
    gap: 15px; /* Reduce gap on tablet */
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Stack buttons vertically on mobile */
    gap: 10px;
    padding: 0 10px; /* Add some padding for better button spacing */
  }
`;

const Button = styled.button`
  background: #2D74BA; /* Button background color */
  color: #fff;
  padding: 15px 30px; /* Increase button padding for larger size */
  border: none; /* Button border */
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px; /* Increase button font size */
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */

  &:hover {
    background: #1e5b8b;
  }

  svg {
    margin-right: 15px; /* Adds more space between the icon and text */
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 25px; /* Slightly smaller padding on mobile */
  }
`;

const Car = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%; /* Allow the image to stretch to full width */
  height: 500px; /* Set a fixed height */
  overflow: hidden; /* Prevents overflow if image is larger */
  position: relative;

  @media (max-width: 768px) {
    height: 450px; /* Reduce height for tablets */
  }

  @media (max-width: 480px) {
    height: 350px; /* Reduce image size for mobile */
  }
`;

const CarImage = styled.img`
  width: 100%; /* Makes the image fill the container */
  height: 100%;
  object-fit: contain; /* Ensures the image is fully visible and contained */
  border-radius: 10px;
`;

// Hero Component
const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>
          Seamless Travel With Fast{" "}
          <br />
          <Highlight>RapidRide</Highlight>{" "}
          <CarRentalText>Car Rental</CarRentalText>
        </Title>
        <ButtonContainer>
          <Button>
            <FontAwesomeIcon icon={faCar} /> View All Cars
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPhone} /> Contact Us
          </Button>
        </ButtonContainer>
      </Content>
      <Car>
        <CarImage src={carImage1} alt="Car 1" />
      </Car>
    </HeroContainer>
  );
};

export default Hero;
