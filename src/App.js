import hero from "./Asset/hero.svg";
import "./App.css";
import styles from './Hero.module.css';
import Profile from "./Profile";
import Projects from "./Projects";
import Contact from "./Contact";
import Layout from "./Layout";
import { useState } from "react";


let iconstyle = {
  width: "23",
  height: "23",
  color: "#3d3d3d",
};

const nav = {
  home: (
    <span
      dangerouslySetInnerHTML={{
        __html: `<lord-icon
    src="https://cdn.lordicon.com/osuxyevn.json"
    trigger="hover"
    colors="primary:#121331"
    style="width:25px;height:30px">
</lord-icon>`,
      }}
    ></span>
  ),
  About: (
    <span
      dangerouslySetInnerHTML={{
        __html: `<lord-icon
    src="https://cdn.lordicon.com/bhfjfgqz.json"
    trigger="hover"
    colors="primary:#121331"
    style="width:25px;height:30px">
</lord-icon>`,
      }}
    ></span>
  ),
  Projects: (
    <span
      dangerouslySetInnerHTML={{
        __html: `<lord-icon
    src="https://cdn.lordicon.com/gigfpovs.json"
    trigger="hover"
    style="width:25px;height:30px">
</lord-icon>`,
      }}
    ></span>
  ),
  Contact: (
    <span
    dangerouslySetInnerHTML={{
      __html: `<lord-icon
      src="https://cdn.lordicon.com/diihvcfp.json"
      trigger="hover"
      colors="primary:#121331"
      style="width:25px;height:25px">
  </lord-icon>`,
    }}
  ></span>
  ),
};

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

let Hero = () => {
  return (  
    <div id="home" className={styles.hero}>
      <div className={styles.heroBackground} style={{ backgroundImage: "url('path/to/your/image.jpg')" }}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.header}>
          <span>Hello I'm </span>
     
         Laxmikant varkal</h1>
        <p className={styles.description}>Passionate Web Developer</p>
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
 
let About = ()=>{
  return (
    <div class="container backgroundC">
<div class="row"></div>
<div class="row">
<span>
Experienced web developer with a strong background in web and android development. 
Proficient in developing responsive web applications using technologies such as <b>HTML, CSS, JavaScript</b> , and <b>React</b>. 
Seeking an opportunity to utilize my skills in a challenging and dynamic work environment
</span>
</div>

    </div>
  )
} 

let Divider = ()=>{
  return(
    <div className="divider">
       <span>About me
        </span>   
    </div>
    
  )
}

// Footer.js
// Footer.js


const Footer = () => {
  return (
    <footer id="Contact" className="footer">
      <div className="container">
      <div>
        <a href="">
          varkallaxmikant62@gmail.com
        </a>
        {/* <span
      dangerouslySetInnerHTML={{
        __html: `<lord-icon
        src="https://cdn.lordicon.com/diihvcfp.json"
        trigger="hover"
        colors="primary:#121331"
        style="width:30px;height:30px">
    </lord-icon>`,
      }}
    ></span> */}
        <br></br>
  </div>  
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/laxmikant-varkal-489a8a1a5/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/lucky0011198" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/LVarkal14693" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        {/* <div className="footer-nav">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div> */}
       <hr></hr>
        <p>&copy; {new Date().getFullYear()} Laxmikant varkal. All rights reserved.</p>
        
      </div>
    </footer>
  );
};


function App() {
  const [ current ,setcurrent]= useState(0);
  return (
    <div className="App">
      <header className="nav"></header>
      <header className="App-Nav">
        {[nav.home, nav.About, nav.Projects, nav.Contact].map((icon, i) => (
          <a onClick={()=>{
            setcurrent(i)
          }} href={`#${Object.keys(nav)[i]}`} className="avatar" style={{background:current===i?'rgb(174 255 229)':"white"}}>
            {icon}
            <a class="tooltip">{Object.keys(nav)[i]}</a>
          </a>
        ))}
      </header>
      <Hero />
      <br></br>
      <br></br>
      <Profile/>
      <br></br>
      <br></br>
      <Projects/>

      {/* <div id="div-id">
 <iframe src="https://youthful-shaw-f545e7.netlify.app/" onload="this.contentWindow.document.documentElement.scrollTop=100" id="iframe-id"></iframe>
</div> */}
      <br></br>
      <br></br>
      {/* <Contact/> */}
      <br></br>
      <br></br>
      <Footer/>

    </div>
  );
}

export default App;
