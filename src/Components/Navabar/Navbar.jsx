import logo from "/public/assets/images/Logologo.png"
import "./Navbar.scss"

//TODO: Ajouter un menu qui s'ouvre lorsque l'écran est trop petit
function Navbar(){

    return(
        <nav className="Navbar">
            <a href="#"><img src={logo} /></a>
            <ul className="display-big-screen nav-ul">
                <li><a href="#" className="nav-link">À propos</a></li>
                <li><a href="#" className="nav-link">Mon parcours</a></li>
                <li><a href="#" className="nav-link">Mes projets</a></li>
                <li><a href="#" className="nav-link">Contact</a></li>
                <li><a href="#" className="nav-cv">CV</a></li>

            </ul>
        </nav>
    )
}

export default Navbar;