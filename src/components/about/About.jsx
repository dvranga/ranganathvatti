import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl('hero/ranganathvatti11.png')} alt='ranganath-vatti' />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt='cursorIcon' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I am frontend developer with 3 years of experience</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt='cursorIcon' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimized backend and APIs </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/uiIcon.png')} alt='cursorIcon' />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have experience developing fast and optimized backend and APIs </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About