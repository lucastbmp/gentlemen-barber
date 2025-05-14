import './navbar.css'
import logo from '../assets/images/dh-barber-logo.png'

export default function Navbar() {
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
                <li><a href="#home" className="custom-link">Home</a></li>
                <li><a href="#services" className="custom-link">Serviços</a></li>
                <li><a href="#products" className="custom-link">Produtos</a></li>
            </ul>
        </nav>
    );
}


