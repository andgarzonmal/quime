import './DinamicHomeHeader.css'
import OpacityIcon from '@mui/icons-material/Opacity';
import { Build } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';
import { Pool } from '@mui/icons-material';


const DinamicHomeHeader = ({ index }) => {
  const headers = [
    { 
      icon: <OpacityIcon className='home-title-icon' />, 
      title: "P.T.A.P - P.T.A.R", 
      color: "#7FA154",
      mainTitle: "Eficiencia y sostenibilidad en la fabricación de sistemas PTAP y PTAR.",
      subTitle: "Innovación y compromiso ambiental en cada etapa del proceso."
    },
    { 
      icon: <Build className='home-title-icon' />, 
      title: "SERVICIOS", 
      color: "#DF7A2E",
      mainTitle: "Mantenimiento, asesoría técnica y consultoria ambiental",
      subTitle: "Con experiencia probada, brindamos servicios completos para operar, mantener y optimizar sistemas de tratamiento de agua con estandares superiores."
    },
    { 
      icon: <Pool className='home-title-icon' />, 
      title: "PISCINAS", 
      color: "#0F61A9",
      mainTitle: "Ofrecemos soluciones integrales en diseño y construcción de piscinas.",
      subTitle: "Innovamos en nuestros sistemas de construcción con el uso de recubrimientos impermeabilizantes de alta durabilidad."
    },
    { 
      icon: <Settings className='home-title-icon' />, 
      title: "SUMINISTROS", 
      color: "#0679BB",
      mainTitle: "Suministros y equipos especializados para sistemas de tratamiento hídrico.",
      subTitle: "Nuestra gama de suministros y equipos garantiza la eficiencia y calidad en el tratamiento del agua."
    }
  ];

  const buttonStyles = [
    { borderColor: "#7FA154", color: "#7FA154", backgroundColorMore: "#EDF2E7", backgroundColorGet: "#7FA154" },
    { borderColor: "#DF7A2E", color: "#DF7A2E", backgroundColorMore: "#EDF2E7", backgroundColorGet: "#DF7A2E" },
    { borderColor: "#0F61A9", color: "#0F61A9", backgroundColorMore: "#EDF2E7", backgroundColorGet: "#0F61A9" },
    { borderColor: "#0679BB", color: "#0679BB", backgroundColorMore: "#EDF2E7", backgroundColorGet: "#0679BB" },
  ];
  

  const { icon, title, color, mainTitle, subTitle } = headers[index] || headers[0]; // Default al primer ítem si el índice está fuera de rango

  return (
    <>
      <header className="informacion-container" style={{ color }}>
        {icon}
        <span className="home-title">{title}</span>
      </header>
      <h2 className='home-main-info'>
        {mainTitle}
      </h2>
      <p className='home-legend'>
        {subTitle}
      </p>

      <div>
        <button
          className="home-button-more"
          style={{
            border:`2px ${buttonStyles[index].borderColor} solid`,
            color: buttonStyles[index].color,
          }}
        >
          CONOCE MÁS
        </button>
        <button
          className="home-button-get"
          style={{
            borderColor: buttonStyles[index].borderColor,
            backgroundColor: buttonStyles[index].backgroundColorGet,
            color: '#fff',
          }}
        >
          CONTÁCTANOS
        </button>
      </div>
    </>
  );
};

export default DinamicHomeHeader;
