import "./Project.scss"

import  ProjectTile from "./Project-Tile/ProjectTile";
import {useTranslation} from "react-i18next";

function Project(){
    const { t } = useTranslation();

    return(
        <section id="projects" className="projects">
            <h2> {t("projects")} </h2>
            <ul>
            <ProjectTile title="Kanapp" 
                description={t("kanapp")}
                skills={["Angular","TypeScript","Bootstrap"]} link="https://kanapp.robin-sim.fr" target="_blank" />
            <ProjectTile title="Memorize" 
                description={t("memorize")}
                skills={["Swift","SwiftUI"]} link="https://github.com/Rob1Sim/Memorize" />
            <ProjectTile title="Age Of Champagne" 
                description={t("aoc")}
                skills={["PHP","MySQL","Symfony","React","Docker"]} link="https://github.com/Rob1Sim/AgeOfChampagne" />
            <ProjectTile title="Wordpress Web Scrapper"
                description={t("wws")}
                skills={["Python","Flask","Docker"]} link="https://github.com/Rob1Sim/WordrpessPageScrapper" />
            <ProjectTile title="Not The Legend of Zelda"
                 description={t("zelda")}
                  skills={["Java","JavaFx","Maven"]} link="https://github.com/Rob1Sim/NotTheLegendOfZelda2.0" />
            </ul>
        </section>
    )
}

export default Project;