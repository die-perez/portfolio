import Me from '../public/images/me.gif'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div styles={{backgroundColor: "black"}} className={styles.sectionLook}>
                <h1 className={styles.aboutHeading}>About</h1>
                <Image src={Me} alt="Andie Perez" width= {250} height={250} className={styles.me} />
                <p className={styles.aboutPar}>I am a Full-Stack Engineer with an eye for design and an appetite for problem-solving. Beautiful websites pique my interest, which is why I strive to learn new skills that help with workflow and creativity every day.<br />Find me dying my hair or playing with my pups Viggo the Carpathian & Laszlo Cravensworth when I am away from my computer!
                </p> 
            </div>
        </section>
    )
} 