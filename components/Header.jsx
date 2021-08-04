import Image from 'next/image'
import background from '../public/images/art2.jpeg'
import styles from '../styles/Home.module.css'

export const Header = () => {
    return (
        <section className={styles.header}>
        <div className={styles.bgWrap}>
          <Image 
            alt="background"
            src={background}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </div>
          <div className={styles.headerInfo}>
            <h1 className={styles.name}>
              Andie Perez
            </h1>
            <h3 className={styles.title}>Software Engineer</h3>
          </div>  
          <div className={styles.wrap}>
            <h1 className={styles.gradientText}>▼</h1>
          </div>
        </section>
    )
}