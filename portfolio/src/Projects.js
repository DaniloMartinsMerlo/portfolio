import './style/Projects.css';
import github from './assets/Github.svg' ;
import inteli_img from './assets/inteli.png' ;
import ipt_img from './assets/ipt.png' ;
import hc_img from './assets/hc.png' ;
import dell_img from './assets/dell.png' ;

function Projects() {
  const projects = [
    { 
      name: 'Robô de serviço autônomo com IA generativa', 
      description: 'Plataforma desenvolvida em parceria com o Inteli para orquestrar tours autônomos pelo campus utilizando o cão-robô Unitree Go2. A solução integra back-end com serviços de LLM, APIs de controle do robô e gestão de sessões, front-ends para visitantes e administradores, além de um pipeline de robótica para simulação e operação física, oferecendo visitas guiadas interativas com comunicação em linguagem natural e monitoramento completo do percurso.', 
      image: inteli_img, 
      link: 'https://www.inteli.edu.br' 
    },
    { 
      name: 'Robótica móvel e visão computacional', 
      description: 'Projeto desenvolvido em parceria com o IPT para automatizar o processamento e a categorização de imagens na construção civil. A solução propõe um algoritmo para detecção automatizada de fissuras em edificações, apoiando a empresa na análise técnica e tomada de decisão.', 
      image: ipt_img, 
      link: 'https://github.com/InteliProjects/2025-1B-T12-EC06-G05' 
    },
    { 
      name: 'Automação de processos e sistemas', 
      description: 'Projeto desenvolvido em parceria com o Hospital de Clínicas da Unicamp para automatizar a separação de medicamentos em ambiente hospitalar. A solução utiliza um braço robótico integrado a uma aplicação web para garantir precisão, segurança e agilidade na montagem de kits de medicamentos, reduzindo erros humanos e otimizando o trabalho da equipe farmacêutica.', 
      image: hc_img, 
      link: 'https://github.com/Inteli-College/2025-1A-T12-EC05-G05' 
    },
    { 
      name: 'Aplicação Web', 
      description: 'Aplicação web desenvolvida em parceria com a Dell Technologies para otimizar o treinamento interno de funcionários. O projeto consistiu na criação de uma plataforma para cadastro e disponibilização de materiais técnicos, facilitando o acesso a manuais e conteúdos sobre o processo de montagem de diferentes produtos da empresa, tornando o treinamento mais intuitivo e eficiente.', 
      image: dell_img, 
      link: 'https://github.com/InteliProjects/2024-1B-T13-IN02-G03' 
    },
  ];

  return (
    <div className="projects-container">
      <div className="project-header">
        <h2 className="project-title">PROJETOS</h2>
        <div className="project-underline"></div>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="project-content">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="project-link">
                    <img src={github} className='img_github' alt='logo github'/>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                        Link do repositório
                    </a>
                </div>
            </div>

            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;