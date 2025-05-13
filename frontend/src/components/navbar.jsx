import './navbar.css'
import logo from '../assets/images/dh-barber-logo.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav">
            <header>
               <Link to="/"><img src={logo} className="dh-logo" /></Link> 
                <h1 className="name"><Link to="/" className="custom-link">DH Gentlemen Barber</Link></h1>
            </header>
            <ul className="nav-list">
                <li><Link to="/" className="custom-link">Home</Link></li>
                <li>Agendamento</li>
                <li><Link to="/products" className="custom-link">Produtos</Link></li>
            </ul>
        </nav>
    )
}

