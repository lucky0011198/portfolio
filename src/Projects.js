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
                <div className={Styles['export']}><a href={link}>View more</a></div>
            </div>
        )
    }

    return (
  <section  className={Styles['projects-section']}>
    <div className={Styles['headers']}>
    <span>Projects</span> 
    <span>android app</span>
    </div>
    {
        Switch?
    <div className={Styles['scrollCards']}>
        {
            Info.projects.map((item,index)=>(
                <Cards  link={item.link} index={index} icon={item.icon}title={item.title} content={item.description}/>
            ))
        }
    </div>:
    <div className={Styles['scrollCards']}>
        {
            Info.projects.map((item,index)=>(
                <Cards link={item.link} index={index} icon={item.icon}title={item.title} content={item.description}/>
            ))
        }
    </div>
    }

  </section>

    )
}