import './navbar.css'
import logo from '../assets/images/dh-barber-logo.jpg'

export default function Navbar() {
    return (
        <nav className="nav">
            <header>
                <img src={logo} className="dh-logo" /> 
                <h1 className="name">DH Gentlemen Barber</h1>
            </header>
            <ul className="nav-list">
                <li>Home</li>
                <li>Agendamento</li>
                <li>Preços</li>
            </ul>
        </nav>
    )
}

