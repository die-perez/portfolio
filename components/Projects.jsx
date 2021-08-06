import styles from '../styles/Home.module.css'
import Image from 'next/image'
import burnwitch from '../public/images/burnwitch.png'
import vamp from '../public/images/vamp.png'
import viberant from '../public/images/viberant.png'

export const Projects = () => {
    return (
        <section id="projects" className={styles.about}>
            <div styles={{backgroundColor: "black"}} className={styles.sectionLook}>
                <h1 className={styles.aboutHeading}>Projects</h1>
                    <div className="container flex-wrap">


                    <div className="card text-center shadow-2xl flex-1">
                        <figure className="px-10 pt-10">
                            <Image src={burnwitch}
                            alt="hangman style game" />
                        </figure> 
                        <div className="card-body">
                            <h2 className="card-title">burnwitch</h2>  
                            <div className="justify-center card-actions">
                            <button className="btn btn-outline btn-primary">more</button>
                            </div>
                        </div>
                    </div> 
                    <div className="card text-center shadow-2xl flex-1">
                        <figure className="px-10 pt-10">
                            <Image src={vamp}
                            alt="hangman style game" />
                        </figure> 
                        <div className="card-body">
                            <h2 className="card-title">vamp</h2>  
                            <div className="justify-center card-actions">
                            <button className="btn btn-outline btn-primary">more</button>
                            </div>
                        </div>
                    </div> 
                    <div className="card text-center shadow-2xl flex-1">
                        <figure className="px-10 pt-10">
                            <Image src={viberant}
                            alt="hangman style game" />
                        </figure> 
                        <div className="card-body">
                            <h2 className="card-title">viberant</h2>  
                            <div className="justify-center card-actions">
                            <button className="btn btn-outline btn-primary">more</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
} 