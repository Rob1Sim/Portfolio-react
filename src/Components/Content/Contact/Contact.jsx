import './Contact.scss';
import Sidebar from '../../Sidebar/Sidebar';

function Contact(){
    return(
        <section id="contact">
                <div className="contact-up">
                <h1>Contactez-moi !</h1>
                <p>Un projet ? une offre ? Je suis toujours ouvert à de nouvelles opportunités, n'hésitez pas ma boîte mail est toujours ouverte !</p>
                <a href='mailto:robin.simonneau@robin-sim.fr'>Envoyez-moi un email</a>
            </div>
            <div className="footer">
                <p className='credits'>
                    Design par <a href='https://github.com/bchiang7'>Brittany Chiang</a> et Développé par <a href='https://github.com/Rob1Sim'>Robin Simonneau</a>
                </p>
                <div className="logo-footer">
                    <Sidebar isFooter={true}/>
                </div>
            </div> 
        </section> 
    )
}

export default Contact;