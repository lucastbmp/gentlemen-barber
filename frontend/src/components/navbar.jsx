import './navbar.css'
import logo from '../assets/images/dh-barber-logo.jpg'

function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="dh-logo" width='50px' /> 
            <ul className="nav-list">
                <li className="list-item">Home</li>
                <li className="list-item">Agendamento</li>
                <li className="list-item">Preços</li>
            </ul>
        </nav>
    )
}

export default Navbar;
