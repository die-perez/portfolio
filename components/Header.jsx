import Image from 'next/image'
import styles from '../styles/Home.module.css'
import flowers from '../public/images/flowers.jpg'

export const Header = () => {
    return (
        <section id="header" className={styles.header}>
        {/* <div className={styles.bgWrap}> */}
          {/* <Image 
            alt="background"
            src={flowers}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          /> */}
        {/* </div> */}
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