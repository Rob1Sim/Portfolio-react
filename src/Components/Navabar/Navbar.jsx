import logo from "/public/assets/images/Logologo.png"
import "./Navbar.scss"
import { useState } from "react";

//TODO: Ajouter un menu qui s'ouvre lorsque l'écran est trop petit
function Navbar(){


    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }

    return(
        <nav className="Navbar">
            <a href="#"><img src={logo} /></a>
            <ul className={`nav-ul ${showLinks ? "show-nav" : "dont-show"} `}>
                <li><a href="#about" className="nav-link" onClick={handleShowLinks}>À propos</a></li>
                <li><a href="#parcours" className="nav-link" onClick={handleShowLinks}>Mon parcours</a></li>
                <li><a href="#projects" className="nav-link" onClick={handleShowLinks}>Mes projets</a></li>
                <li><a href="#" className="nav-link" onClick={handleShowLinks}>Contact</a></li>
                <li><a href="#" className="nav-cv" onClick={handleShowLinks}>CV</a></li>

            </ul>
            <button className="nav_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}

export default Navbar;