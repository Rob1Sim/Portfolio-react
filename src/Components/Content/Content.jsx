import About from "./About/About";
import Description from "./Description/Description";
import "./Content.scss"
import Parcours from "./Parcours/Parcours";


function Content(){

    return(
        <main className="content">
            <About/>
            <Description/>
            <Parcours/>
        </main>
    )
}

export default Content;