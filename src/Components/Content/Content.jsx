import About from "./About/About";
import Description from "./Description/Description";
import "./Content.scss"
import Parcours from "./Parcours/Parcours";
import Project from "./Projects/Project";


function Content(){

    return(
        <main className="content">
            <About/>
            <Description/>
            <Parcours/>
            <Project/>
        </main>
    )
}

export default Content;