import React from 'react';
import styles from './Profile.module.css';
import hero from "./Asset/hero.svg";

const Profile = () => {
  return (
    <>
    <div id='About' className={styles['profile-header']}>
       <h1>
            About me 
        </h1>
    </div>
    
    <section className={styles['profile-section']}>
     
      <div className={styles['col']}>
        <h2>Laxmikant Varkal</h2>
        <p> Experienced web developer with a strong background in web and android development.
Seeking an opportunity to utilize my skills in a challenging and dynamic work environment.</p>

      </div>
       
    </section>
    <section className={styles['profile-section']}>
     {/* <div className={styles['col-Experience']}>
      <h1 className={styles['sub-header']}>Experience</h1>
      <p>Company : <strong>  Cumulus System</strong>  </p>
      <p>Designation : <strong>Associate Software Engineer</strong>  </p>
      <p>Experience : <strong> 1+  Years</strong></p>
     
    </div> */}
    <div className={styles['col-skills']}>
      <p className={styles['sub-header']}>Experience</p>
      <table>
        <tr>
            <td>Company</td>
            <td > Cumulus System</td>
        </tr>
        <tr>
            <td>Designation</td>
            <td>Associate Software Engineer</td>
        </tr>
        <tr>
            <td>Experience</td>
            <td>1+  Years</td>
        </tr>
    </table>
      {/* <div style={{display:'flex',justifyContent:'space-between'}}>
      <span>
        <p>HTML, CSS, JS </p>
        <p>React js, React Native</p>
        <p>Angular </p>
      </span>
      <span>
      <p>intermediat </p>
      <p>intermediat</p>
      <p>intermediat </p>

      </span>
      </div> */}
    </div>
    <br></br>
    <div className={styles['col-skills']}>
      <p className={styles['sub-header']} style={{marginLeft:5}}>Skills</p>
      {/* <table>
        <tr>
            <td>HTML, CSS, JS</td>
            <td> intermediat</td>
        </tr>
        <tr>
            <td>React js, React Native</td>
            <td>  intermediat</td>
        </tr>
        <tr>
            <td>Angular</td>
            <td>  intermediat</td>
        </tr>
    </table> */}
    <div className='flexRow'>

    {
      ["HTML","CSS","Javascript","React","React Native","Angular"].map((name)=>(
        <span className='tags tagsAlignment'>{name}</span>
      ))
    }
    </div>
    </div>
    </section>
   
    {/* <section className={styles['profile-container']}>
    <h2>Projects</h2>
    <div className={styles['profile-cards']}>
        <div className={styles['cards']}>
            <h3>Attendance App</h3>
            <p>Create and manage attendance  for students</p>
            <a href='https://play.google.com/store/apps/details?id=com.attendanceanalysis&hl=en-IN'>visite </a>
        </div>
        <div className={styles['cards']}>
        <h3>Timetable App</h3>
            <p>Users can create, delete and update timetables and get live session information</p>
            <a href='https://play.google.com/store/apps/details?id=com.lucky.timetable&hl=en-IN'>visite </a>
        </div>
        <div className={styles['cards']}>
        <h3>Resume website</h3>
            <p>manage and create attendance data</p>
            <a href='https://play.google.com/store/apps/details?id=com.attendanceanalysis&hl=en-IN'>visite </a>
        </div>
    </div>
    </section> */}
    </>
   
  );
};

export default Profile;
