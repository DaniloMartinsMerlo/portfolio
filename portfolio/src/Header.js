import { useState } from 'react';
import logo from './assets/logo.svg';
import './style/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="Header">
      <header className="App-header">
        <div className='Logo-container'>
          <img src={logo} className="Logo" alt="logo" />
        </div>

        {/* Menu Desktop */}
        <div className='Button-container'>
          <button>Sobre</button>
          <button>Habilidades</button>
          <button>Projetos</button>
          <button>Contato</button>
        </div>

        {/* Botão Hamburguer (Mobile) */}
        <button 
          className={`Hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Menu Lateral (Mobile) */}
      <div className={`Mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="Mobile-menu-content">
          <button onClick={closeMenu}>Sobre</button>
          <button onClick={closeMenu}>Habilidades</button>
          <button onClick={closeMenu}>Projetos</button>
          <button onClick={closeMenu}>Contato</button>
          <img src={logo} className="Mobile-logo" alt="logo" />
        </div>
      </div>

      {/* Overlay (fundo escuro quando menu aberto) */}
      {menuOpen && (
        <div className="Menu-overlay" onClick={closeMenu}></div>
      )}
    </div>
  );
}

export default Header;