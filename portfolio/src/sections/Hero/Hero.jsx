
import  styles from './HeroStyles.module.css'	

import heroImg from '../../assets/cartoon.png'

import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Valtteri_Laakso_CV_ENG.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {

    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
        <img className={styles.hero}
        src={heroImg}
        alt="Profile picture"
         />
         <img className={styles.colorMode}
        src={themeIcon} 
        alt="Color mode icon" 
        onClick={toggleTheme}
        />
         </div>
        <div className={styles.info}>
            <h1>Valtteri <br />
            Laakso
             </h1>
            <h2>Developer</h2>
            <span>
                <a href="https://twitter.com/vade" target='_blank'>
                <img src={twitterIcon} alt="Twitter icon" />
                </a>

                <a href="https://github.com/vaddee" target='_blank'>
                <img src={githubIcon} alt="Github icon" />
                </a>

                <a href="https://www.linkedin.com/in/valtteri-laakso-541595239/" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
            I am a final-year software developer eager to begin my professional career. I enjoy solving problems, learning new technologies, and have experience working on projects with tools like React, Node.js, and Supabase. I am motivated to enhance my skills, contribute to real-world projects, and grow as a developer in a team environment.
            </p>

            <a href={CV} download>
                <button className='hover'>
                     Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
