import logo from "/assets/images/Logologo.png"
import cv from "/files/Robin-simonneau-CV.pdf"
import "./Navbar.scss"
import { useState } from "react";
import {useTranslation} from "react-i18next";
import CountryFlag from "./Language/CountryFlag.jsx";
import Language from "./Language/Language.jsx";

//TODO: Ajouter un menu qui s'ouvre lorsque l'écran est trop petit
function Navbar(){


    const [showLinks, setShowLinks] = useState(false)
    const { t, i18n } = useTranslation(); // Ajout de i18n pour changer de langue

    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return(
        <nav className="Navbar">
            <a href="#" aria-label="Liens vers l'accueil"><img src={logo} alt="Logo"/></a>
            <ul className={`nav-ul ${showLinks ? "show-nav" : "dont-show"} `}>
                <li><a href="#about" className="nav-link" onClick={handleShowLinks}>{t('title-about')}</a></li>
                <li><a href="#parcours" className="nav-link" onClick={handleShowLinks}>{t('title-background')}</a></li>
                <li><a href="#projects" className="nav-link" onClick={handleShowLinks}>{t('projects')}</a></li>
                <li><a href="#contact" className="nav-link" onClick={handleShowLinks}>{t('contact')}</a></li>
                <li>
                    <Language/>
                </li>
            </ul>
            <button className="nav_burger" onClick={handleShowLinks} aria-label="Bouton ouvre la barre de navigation">
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}

export default Navbar;