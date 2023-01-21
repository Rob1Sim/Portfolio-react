import "./Project.scss"

import  ProjectTile from "./Project-Tile/ProjectTile";

function Project(){

    return(
        <section id="projects" className="projects">
            <h2> Mes projets </h2>
            <ul>
            <ProjectTile title="Kanapp" 
                description="Kanapp est une application permettant de stocker et consulter des Kanji (Caractère japonais). "
                 skills={["Angular","TypeScript","Bootstrap"]} link="https://kanapp.robin-sim.fr" target="_blank" />
            <ProjectTile title="Memorize" 
                description="Une application mobile de flashcard permettant de mieux mémoriser, basée sur un algorithme de répétition espacée. "
                 skills={["Swift","SwiftUI"]} link="https://github.com/Rob1Sim/Memorize" />    
            <ProjectTile title="Age Of Champagne" 
                description="Extension web d'un jeu de société de gestion de parcelle de production de champagne."
                 skills={["PHP","MySQL","Symfony"]} link="https://github.com/Rob1Sim/AgeOfChampagne" />    
            </ul>
        </section>
    )
}

export default Project;