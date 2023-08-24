import React from 'react';
import Styles from "./Projects.module.css"
import Info from "./Content"

export default  function Projects(){

    const [ Switch,setswitch] = React.useState(false)

    const Cards = ({title,content,index,link,icon}) =>{
        return ( 
            <div key={index} className={Styles['cards']}>
                <img src={icon} className={Styles['avatar']} alt="Logo" />
                <h3>{title}</h3>
                <p>{content}</p>
                <div className={Styles['export']}><a href={link}>View more</a>
                </div>
            </div>
        )
    }

    return (
  <section id='Projects'  className={Styles['projects-section']}>
    <h1>Projects</h1> 

    <span>Android Apps</span>
    <div className={Styles['scrollCards']}>
        {
            Info.projects_apps.map((item,index)=>(
                <Cards  link={item.link} index={index} icon={item.icon}title={item.title} content={item.description}/>
            ))
        }
    </div>
    <span>Websites</span>
    <div className={Styles['scrollCards']}>
        {
            Info.projects_website.map((item,index)=>(
                <Cards link={item.link} index={index} icon={item.icon}title={item.title} content={item.description}/>
            ))
        }
    </div>
    

  </section>

    )
}