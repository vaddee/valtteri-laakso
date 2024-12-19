
import styles from './ProjectsStyles.module.css';

import ProjectCard from '../../common/ProjectCard';



import reminder from '../../assets/Reminder_App_Icon_500x500.png';
import vava from '../../assets/vava.png';
import movielogo from '../../assets/movielogo.webp';

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={vava} // src is the image source
                    link="https://github.com/VAVA-OP2/budget_frontend"
                    h3="VAVA"
                    p="Budget App"
                />

                <ProjectCard src={reminder} // src is the image source
                    link="https://github.com/vaddee/RemindMe"
                    h3="RemindMe"
                    p="Mobile app for reminders"
                />

                <ProjectCard src={movielogo} // src is the image source
                    link="https://github.com/vaddee/MovieList"
                    h3="MovieList"
                    p=" Save and rate movies"
                />

               
            </div>
        </section>
    )
}
export default Projects;