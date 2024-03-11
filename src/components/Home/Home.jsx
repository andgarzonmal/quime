import React, { useState, useEffect } from 'react';
import DinamicHomeHeader from '../DinamicHomeHeader/DinamicHomeHeader';
import RightHomeColumn from '../RightHomeColumn/RightHomeColumn';
import './Home.css';

export default function Home() {
  const maxBannerCount = 4;
  const [homeCount, setHomeCount] = useState(0);
  const [autoChange, setAutoChange] = useState(true);

  // Colores para cada índice
  const colors = ["#7FA154", "#DF7A2E", "#0F61A9", "#0679BB"];
  const backgroundColors = ["#EDF2E7", "#FAEDE2", "#D5E9FB", "#E7E7E7"];
  const backgroundColor = backgroundColors[homeCount];

  // Estilo para aplicar al div de la columna izquierda
  const leftColumnStyle = {
    backgroundColor: backgroundColor,
    // Aquí puedes añadir más estilos si es necesario
  };

  const getCircleStyle = (index) => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    margin: '0 5px',
    cursor: 'pointer',
    display: 'inline-block',
    backgroundColor: index === homeCount ? colors[homeCount] : 'transparent',
    border: `2px solid ${colors[homeCount]}`,
    transition: 'background-color 2s ease, border-color 2s ease', // Agrega esta línea
  });
  
  useEffect(() => {
    if (autoChange) {
      const interval = setInterval(() => {
        setHomeCount((prevCount) => (prevCount + 1) % maxBannerCount);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [autoChange]);

  const handleCircleClick = (index) => {
    setHomeCount(index);
    setAutoChange(false); // Detiene el cambio automático al hacer clic en un círculo
  };

  return (
    <section className='contenedor'>
      <div className="columna columna-izquierda" style={leftColumnStyle}>
        <div id='main-info'>
          <DinamicHomeHeader index={homeCount} />
        </div>
        <div className="circles-container">
          {Array.from({ length: maxBannerCount }, (_, index) => (
            <div 
              key={index} 
              className="circle" 
              style={getCircleStyle(index)} 
              onClick={() => handleCircleClick(index)}
            />
          ))}
        </div>
      </div>
      <RightHomeColumn index={homeCount}/>
    </section>
  );
}

