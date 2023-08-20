import React from 'react';
import Styles from "./Projects.module.css"
export default  function Projects(){
const cardsData = [
    {name:"Attendance",content:"",link:""},
    {name:"Timetable",content:"",link:""},
    {name:"Resume",content:"",link:""},
    {name:"",content:"",link:""},
]
    const Cards = ({title,content,index}) =>{
        return ( 
            <div key={index} className={Styles['cards']}>
                <div  className={Styles['avatar']}></div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }

    return (
  <section  className={Styles['projects-section']}>
    <h1>Projects</h1>
    <div className={Styles['scrollCards']}>
        {
            cardsData.map((item,index)=>(
                <Cards index={index} icon={""}title={"card title"} content={" will likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy '"}/>
            ))
        }
    </div>
  </section>

    )
}