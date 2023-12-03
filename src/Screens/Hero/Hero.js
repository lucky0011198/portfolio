
import React, { useEffect } from "react";
import "../../App.css"
import styles from "./Hero.module.css";
import Info from "../../DynamicData/Content";
import { useDispatch, useSelector } from "react-redux";

const Icons = {
    scrollDown: (<span
      dangerouslySetInnerHTML={{
        __html:`<lord-icon
        src="https://cdn.lordicon.com/wtfdpwey.json"
        trigger="loop"
        colors="primary:#121331,secondary:#08a88a"
        style="width:50px;height:50px">
     </lord-icon>`,
  }}></span>)
  } 
  

export default () => {
    const {data} = useSelector((state) => state).todo;
    return (  
      <div id="home" className={styles.hero}>
        <div className={styles.heroBackground} style={{ backgroundImage: "url('path/to/your/image.jpg')" }}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.header}>
            <span>{data?.header[0]||Info.header[0]}  </span>
       
            {data?.header[1]||Info.header[1]}
            
            </h1>
          <p className={styles.description}>{Info?.subHeader}</p>
          {/* <div className={styles.socialLinks}>
            <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/windows/64/github.png" alt="Github" className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="https://github.com/your-github-profile" width="64" target="_blank" rel="noopener noreferrer">
              <img  width="64" height="64"  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png" alt="GitHub" className={styles.socialIcon} />
            </a>
          </div> */}
        
          <span className={styles.scroll}>{Icons.scrollDown}</span>
        </div>
      </div>
     
    );
  };
   