import arrow_icon from './assets/Chevron_Right_Duo.svg' ;
import download_icon from './assets/Download.svg' ;
import './style/Intro.css';

function Intro() {
  return (
    <div className="Intro">
      <div className="Intro-content">
        
        <h3>
          DANILO MARTINS // PORTFÓLIO PESSOAL
        </h3>
        
        <h1>SOFTWARE AND FIRMWARE PROGRAMMER</h1>
        <p>Programando software e firmware para conectar sistemas ao mundo real.</p>
      </div>
      <div className="Intro-buttons">
        <button>
          PROJETOS
          <img src={arrow_icon} className="arrow-icon" alt="arrow-icon" />
        </button>

        <button>CONTATO</button>
        
        <button>
          BAIXAR CV 
          <img src={download_icon} className="download-icon" alt="download-icon" />
        </button>
      
      </div>
    </div>
  );
}

export default Intro;