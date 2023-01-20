import "./ProjectTile.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
function ProjectTile({title,description,skills,link}){

    const skillsLi = skills.map((skill,i)=>(<li  key={i} className={"skill-"+i}>{skill}</li>))


    return(
        <li className="projects-tile">
            <header>
                <h3>{title}</h3>
                <a href={link} aria-label="Lien vers un projets GitHub"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            </header>
            <p>{description}</p>
            <ul>
                {skillsLi}
            </ul>
        </li>
    )
}

export default ProjectTile;