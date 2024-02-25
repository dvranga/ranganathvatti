import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='emailIcon'/>
                <a href='mailto:work.ranganath@gmail.com'>work.ranganath@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='emailIcon'/>
                <a href='https://www.linkedin.com/in/ranganathvatti/'>linkedin.com/ranganathvatti</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='emailIcon'/>
                <a href='https://github.com/dvranga'>https://github.com/dvranga</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact