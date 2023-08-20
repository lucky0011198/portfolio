import React from 'react';
import Styles from "./Contact.module.css"

export default function(){
    return(
     <section className={Styles['contact-section']}>
        <h1>Love to  hear from you,<br></br>
        Get in touch 👋🏻
        </h1>
        <form className={Styles["contact-form"]}>
      <div className={Styles["row"]}>
        <div className={Styles["input-field"]}>
          <span> Your name</span>
          <input type="text" id="name" name="name" />
        </div>
        <div className={Styles["input-field"]}>
          <span>Email</span>
          <input type="email" id="email" name="email" />
        </div>
      </div>
      <div className={Styles["input-field"]}>
        <span>Message</span>
        <textarea id="message" name="message" rows="4" />
      </div>
      <div style={{width:'100%',display:'flex'}}>
      <button type="submit">Just send</button>
      {/* <span className={Styles['gmail']}>| Send manually to <a href=''>varkallaxmikant62@gmail.com</a> </span> */}
      </div>
    </form>
     </section>
    )
}