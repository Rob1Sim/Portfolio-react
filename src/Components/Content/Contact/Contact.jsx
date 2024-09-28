import './Contact.scss';
import Sidebar from '../../Sidebar/Sidebar';
import {useTranslation} from "react-i18next";

function Contact(){
    const { t } = useTranslation();

    return(
        <section id="contact">
                <div className="contact-up">
                <h1>{t('contact')}</h1>
                <p>{t('contact-desc')}</p>
                <a href='https://www.linkedin.com/in/robin-simonneau-581563223/'>{t('contact-btn')}</a>
            </div>
            <div className="footer">
                <p className='credits'>
                    Design by <a href='https://github.com/bchiang7'>Brittany Chiang</a> et Developed by <a href='https://github.com/Rob1Sim'>Robin Simonneau</a>
                </p>
                <div className="logo-footer">
                    <Sidebar isFooter={true}/>
                </div>
            </div> 
        </section> 
    )
}

export default Contact;