import About from "./About/About";
import Description from "./Description/Description";
import "./Content.scss"


function Content(){

    return(
        <main className="content">
            <About/>
            <Description/>
        </main>
    )
}

export default Content;