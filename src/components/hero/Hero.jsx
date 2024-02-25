import React from 'react'
import styles from './Hero.module.css';
import { getImageUrl } from './../../utils';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Ranganath Vatti</h1>
                <p className={styles.description}>
                    I am a senior software engineer, with 3 years of experience in frontend technology
                </p>
                <a className={styles.contactBtn} href='mailto:work.ranganath@gmail.com'>Contact me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl('hero/ranganath-vatti.png')} alt='ranganath-vatti' />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero