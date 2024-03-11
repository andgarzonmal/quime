import React from 'react';
import backgroundImage1 from "../../assets/background1.png";
import backgroundImage2 from "../../assets/background2.png";
import backgroundImage3 from "../../assets/background3.png";
import backgroundImage4 from "../../assets/background4.png";

import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"

const RightHomeColumn = ({ index }) => {
  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4
  ];

  const imageContainerBackgrounds = [
    image1,
    image2,
    image3,
    image4
  ];

  // Estilos para .columna-derecha y .image_container basados en el índice
  const rightColumnStyle = {
    backgroundImage:  `url(${backgroundImages[index]})`,
    transition: 'background-image 1s ease-in-out',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  const imageContainerStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${imageContainerBackgrounds[index]})`,
    transition: 'background-image 1s ease-in-out'
  };

  return (
    <div className="columna columna-derecha" style={rightColumnStyle}>
      <div className="centrado-vertical">
        <div className="image_container" style={imageContainerStyle}>
        </div>
      </div>
    </div>
  );
};

export default RightHomeColumn;
