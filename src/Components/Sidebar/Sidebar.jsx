import "./Sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Sidebar(){

    return(
        <div className="sidebar footer">
            <ul className="sidbar_Ul footer_Ul">
                <li>
                    <a href="https://www.linkedin.com/in/robin-simonneau-581563223/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#2B3467" /></a>
                </li>
                <li>
                    <a href="https://github.com/Rob1Sim" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" color="#2B3467"/></a>
                </li>
                <li>
                    <a href="mailto:robin.simonneau@robin-sim.fr"><FontAwesomeIcon icon={faEnvelope} size="2x" color="#2B3467" /></a>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar;