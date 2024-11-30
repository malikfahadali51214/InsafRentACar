import React from "react";
import "./DetailCard.css";

const DetailCard = ({ title, description, highlighted }) => {
  return (
    <div className={`card ${highlighted ? "highlighted" : ""}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const DetailCards = () => {
  const cardData = [
    {
      title: "3+ Years",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit amet quam tristique aliquet urna proin nam pellentesque risus.",
      highlighted: false,
    },
    {
      title: "100+ cars",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit amet quam tristique aliquet urna proin nam pellentesque risus.",
      highlighted: true,
    },
    {
      title: "1500+ customers",
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit amet quam tristique aliquet urna proin nam pellentesque risus.",
      highlighted: false,
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <DetailCard
          key={index}
          title={card.title}
          description={card.description}
          highlighted={card.highlighted}
        />
      ))}
    </div>
  );
};

export default DetailCards;
