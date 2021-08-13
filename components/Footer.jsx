import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Github from '../public/images/github.png'
import Linked from '../public/images/linkedin.png'
import Email from '../public/images/email.png'
import Resume from '../public/images/resume.png'

export const Footer = () => {
    return (
    <footer id="contact" className={styles.footer}>
        <div><h2 className={styles.contactHeading}>Contact</h2></div>
        <div className={styles.contactLinks}> 
            <div data-tip="github.com/die-perez" className="tooltip tooltip-primary">
                <a className={styles.icon}
                    href="https://github.com/die-perez"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image 
                        src={Github} 
                        alt="Github Logo"
                        width={30}
                        height={30}
                    />
                </a>
                <small className={styles.small}>github.com/die-perez</small>
            </div>
            <div data-tip="linkedin.com/in/dieperez-se/" className="tooltip tooltip-primary" >
                <a className={styles.icon}
                    href="https://www.linkedin.com/in/dieperez-se/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image 
                        src={Linked} 
                        alt="Linkedin Logo"
                        width={30}
                        height={30}
                    />
                </a>
                <small className={styles.small}>linkedin.com/in/dieperez-se/</small>
            </div>
            <div data-tip="email: pzandie@gmail.com" className="tooltip tooltip-primary">
                <a className={styles.icon}
                    href="mailto:pzandie@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image 
                        src={Email} 
                        alt="Email Logo"
                        width={32}
                        height={32}
                    />
                </a>
                <small className={styles.small}>pzandie@gmail.com</small>
            </div>
            <div data-tip="download resume" className="tooltip tooltip-primary" >
                <a className={styles.icon}
                    href="https://andieperez.s3.us-west-1.amazonaws.com/Andie+Perez+-+Resume.pdf" download
                >
                    <Image 
                        src={Resume} 
                        alt="Resume Logo"
                        width={24}
                        height={30}
                    />
                </a>
                <small className={styles.small}>download resume</small>
            </div>
        </div>
    </footer>
    )
}