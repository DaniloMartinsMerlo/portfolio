import user_icon from './assets/User_Circle.svg' ;
import profile_pic from './assets/Me.png' ;
import './style/About.css';

function About() {
  return (
    <div className="About">
      <div className="About-title">
        <h3> 
          <img src={user_icon} className="user-icon" alt="user-icon" />
          SOBRE MIM
          </h3>
      </div>
      <div className="About-content">
        <div className="About-text">
          <p>Sou estudante de Engenharia da Computação no Inteli, com forte foco na integração entre hardware e software.</p>
          <p>Atuo no desenvolvimento de sistemas embarcados e aplicações web.</p> 
          <p>Faço parte da ThundeRatz, equipe de robótica competitiva da USP, onde trabalho com robôs de alto desempenho da categoria de robô de sumô.</p>
          <p>Minha trajetória inclui 7 anos em competições de robótica da FIRST, unindo base técnica sólida, trabalho em equipe e busca constante por soluções inovadoras com impacto real.</p>
        </div>
        
        <div className="Me-img">
          <img src={profile_pic} className="img" alt="img" />
        </div>
      
      </div>
    </div>
  );
}

export default About;