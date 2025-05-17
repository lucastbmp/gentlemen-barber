import './navbar.css';
import logo from '../../assets/images/dh-barber-logo.png';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.6;
      const sections = document.querySelectorAll("section[id]");
      let current = '';

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="logo-container">
        <a href="#home">
          <img src={logo} className="dh-logo" alt="Logo" />
        </a>
        <h1 className="name">
          <a href="#home" className="custom-link">DH Gentlemen Club</a>
        </h1>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" className={`custom-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
        <li><a href="#about" className={`custom-link ${activeSection === 'about' ? 'active' : ''}`}>Sobre</a></li>
        <li><a href="#services" className={`custom-link ${activeSection === 'services' ? 'active' : ''}`}>Serviços</a></li>
        <li><a href="#products" className={`custom-link ${activeSection === 'products' ? 'active' : ''}`}>Produtos</a></li>
      </ul>
    </nav>
  );
}
