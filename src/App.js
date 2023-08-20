import hero from "./Asset/hero.svg";
import "./App.css";
import styles from './Hero.module.css';
import Profile from "./Profile";
import Projects from "./Projects";
import Contact from "./Contact";
import Layout from "./Layout";


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
    colors="primary:#ffffff"
    state="hover-3"
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill={iconstyle.color}
    >
      <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
    </svg>
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
    // <div className="hero center">
    //   <div className="hero-content center">
    //     {" "}
    //     <div>
    //       <p>
    //         {" "}
    //         <b>Hello !</b> my name is
    //       </p>
    //       <h1>Laxmikant varkal</h1>
    //       <span className="tags primary">
    //         {" "}
    //         <b>Front-end developer</b>
    //       </span>{" "}
    //       <span className="tags secondary">
    //         <b>UI / UX</b>
    //       </span>
    //     </div>
    //   </div>
    //   <div className="img">
    //     <img src={hero} alt="React Logo" width="100%" />
    //   </div>
    // </div>
    <Layout>
    <div className={styles.hero}>
      <div className={styles.heroBackground} style={{ backgroundImage: "url('path/to/your/image.jpg')" }}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.header}>
          <span>Hello I'm </span>
     
         Laxmikant varkal</h1>
        <p className={styles.description}>Passionate Web Developer</p>
        <div className={styles.socialLinks}>
          <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/windows/64/github.png" alt="Github" className={styles.socialIcon} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" className={styles.socialIcon} />
          </a>
          <a href="https://github.com/your-github-profile" width="64" target="_blank" rel="noopener noreferrer">
            <img  width="64" height="64"  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png" alt="GitHub" className={styles.socialIcon} />
          </a>
        </div>
      
        <span className={styles.scroll}>{Icons.scrollDown}</span>
      </div>
    </div>
    </Layout>
   
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
    <footer className="footer">
      <div className="container">
        
        <p>Email: varkallaxmikant62@gmail.com</p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
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
  return (
    <div className="App">
      <header className="nav"></header>
      <header className="App-Nav">
        {[nav.home, nav.About, nav.Projects, nav.Contact].map((icon, i) => (
          <a href={`#${Object.keys(nav)[i]}`} className="avatar">
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
      <br></br>
      <br></br>
      <Contact/>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
