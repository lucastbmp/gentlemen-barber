import './navbar.css'
import logo from '../../assets/images/dh-barber-logo.png'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
      }, []);

    return (
        <nav className="nav">
            <logo-container>
                <a href="#home">
                    <img src={logo} className="dh-logo" alt="Logo" />
                </a>
                <h1 className="name">
                    <a href="#home" className="custom-link">DH Gentlemen Club</a>
                </h1>
            </logo-container>
            <ul className="nav-list">
                <li><a href="#home" className={`custom-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
                <li><a href="#about" className={`custom-link ${activeSection === 'about' ? 'active' : ''}`}>Sobre</a></li>
                <li><a href="#services" className={`custom-link ${activeSection === 'services' ? 'active' : ''}`}>Serviços</a></li>
                <li><a href="#products" className={`custom-link ${activeSection === 'products' ? 'active' : ''}`}>Produtos</a></li>
            </ul>
        </nav>
    );
}


