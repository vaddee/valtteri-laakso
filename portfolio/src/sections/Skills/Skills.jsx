import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
   <section id="skills" className={styles.container}> 
   <h1 className='sectionTitle'>Skills</h1>
   <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="HTML"/>
    <SkillList src={checkMarkIcon} skill="CSS"/>
    <SkillList src={checkMarkIcon} skill="JavaScript"/>
    <SkillList src={checkMarkIcon} skill="Java"/>
    <SkillList src={checkMarkIcon} skill="AWS"/>
    <SkillList src={checkMarkIcon} skill="Docker"/>
    <SkillList src={checkMarkIcon} skill="SQL"/>

    
   </div>
   <hr />

   <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Agile development"/>
    <SkillList src={checkMarkIcon} skill="Jest"/>
    <SkillList src={checkMarkIcon} skill="Robot Framework"/>
    <SkillList src={checkMarkIcon} skill="Software Requirements Specification"/>
    
    

    
   </div>
   <hr />

   



   </section>
  )
}

export default Skills
