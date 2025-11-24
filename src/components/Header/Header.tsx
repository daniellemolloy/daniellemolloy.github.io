import { Container } from './styles'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect, useRef } from 'react'
import Resume from '../../assets/Molloy_Danielle_ResumePDF.pdf'
import DaniLogo from '../../assets/Dani-Logo.png'
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => { 
    
    setIsOpen(!isOpen);
    
  };

  const leaveMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    window.scrollTo(0, 0);
  }, [isOpen]);
  
  
  return (
    <Container className="header">
      <HashLink smooth to="/#" className="logo">
        <img src={DaniLogo} alt="Dani Logo" className="logo-image" />
      </HashLink>
      <button
      className={`menu ${isOpen ? 'opened' : ''}`}
      onClick={handleClick}
      aria-label="Main Menu"
      aria-expanded={isOpen}
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
      <nav>
        {/* <a href="#/projects" onClick={leaveMenu}>Projects</a> */}
        <NavHashLink smooth to="#projects" onClick={leaveMenu}>
          Projects
        </NavHashLink>  
        <NavHashLink smooth to="#contact" onClick={leaveMenu}>
          Say Hello
        </NavHashLink>  
        <a href={Resume} className="button" target="_blank" rel="noreferrer" onClick={leaveMenu}>
          Resume
        </a>
      </nav>
  </Container>
)
}
