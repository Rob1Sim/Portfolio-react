import './Description.scss';
import img from '/assets/images/moi.jpeg';
import {useTranslation} from "react-i18next";

function Description(){
    const { t } = useTranslation();

    return(
        <div className="description-row">
            <section className="description" id='about'>
                <h2>{t('title-about')}</h2>
                <p>
                    {t('about')}
                </p>
                <p>
                    {t('about-p2')}
                </p>
                <p>
                    {t('about-p3')}
                </p>
                <p>{t('about-p4')}</p>
                <div className="skills">
                    <ul>
                        <li> PHP</li>
                        <li> Symfony</li>
                        <li> Java</li>
                        <li> Javascript</li>
                        <li> Python</li>
                    </ul>
                    <ul>
                        <li> MySQL</li>
                        <li> C#/.Net</li>
                        <li> Docker</li>
                        <li> ...</li>
                    </ul>
                </div>
        </section>
        <img className='image-of-me' src={img} alt="Picture of me" />

        </div>
    )
}

export default Description;