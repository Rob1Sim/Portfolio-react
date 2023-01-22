import About from "./About/About";
import Description from "./Description/Description";
import "./Content.scss"
import Parcours from "./Parcours/Parcours";
import Project from "./Projects/Project";
import Contact from "./Contact/Contact";


function Content(){
   
    return(
        <main className="content">
            <About/>
            <Description/>
            <Parcours/>
            <Project/>
            <Contact/>
        </main>
    )
}

export default Content;