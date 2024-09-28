import "./About.scss";
import { useTranslation } from 'react-i18next';

function About(){
    const { t } = useTranslation();


    return(
        <article className="about">
            <h1>Robin Simonneau</h1>
            <h2>{t('title')}</h2>
            <p>{t('description')}</p>
            <a href="#projects">{t('desc-btn')}</a>
        </article>
    )
}

export default About;