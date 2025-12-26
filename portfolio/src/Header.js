import logo from './assets/logo.svg';
import './style/Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <div className='Logo-container'>
          <img src={logo} className="Logo" alt="logo" />
        </div>
        <div className='Button-container'>
          <button>Sobre</button>
          <button>Habilidades</button>
          <button>Projetos</button>
          <button>Contato</button>
        </div>
        
      </header>
    </div>
  );
}

export default Header;
