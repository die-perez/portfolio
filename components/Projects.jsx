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
                    {/* <div className="container flex-wrap"> */}
                    <div className={styles.projectInfo}>
                    <div className="card text-center shadow-2xl ">
                        <figure className="px-10 pt-10">
                            <Image src={burnwitch}
                            alt="hangman style game" 
                            layout="responsive"
                            />
                        </figure> 
                        <div className="card-body">
                            <h2 className="card-title">burnwitch</h2>  
                            <p className={styles.aboutPar}>Front-end based game built with vanilla Javascript, CSS and HTML. It’s hangman with a dark twist, where the user can save a witch from burning by guessing the word correctly! Fully styled with music and sound effects to enhance user experience.</p>
                            <div className="justify-center card-actions">
                                <a href="https://github.com/die-perez/burnwitch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary">Github Repo
                                </a>
                                <a href="https://die-perez.github.io/burnwitch/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary">Play it!
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div className="card text-center shadow-2xl flex-1">
                        <figure className="px-10 pt-10">
                            <Image src={vamp}
                            alt="hangman style game" 
                            layout="responsive"
                            />
                        </figure> 
                        <div className="card-body">
                            <h2 className="card-title">vamp</h2>
                            <p className={styles.aboutPar}>Full-stack web application using The Makeup API that allows users to look up products based on type and/or brand. Developed to merge multiple makeup product review sources into one, while enabling users to review and rate products. Established backend with Sequelize to create user and product table relationships. Rendered API data from The Makeup API, integrating RESTful routing with Express.</p>  
                            <div className="justify-center card-actions">
                                <a href="https://github.com/die-perez/vamp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary">Github Repo
                                </a>
                                <a href="https://best-vamp.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary">Visit
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div className="card text-center shadow-2xl flex-1">
                        <figure className="px-10 pt-10">
                            <Image src={viberant}
                            alt="hangman style game" 
                            layout="responsive"
                            />
                        </figure> 
                        <div className="card-body">
                            <h2 className="card-title">viberant</h2>  
                            <p className={styles.aboutPar}>Full-stack web application mimicking Craiglsist’s personal section for a younger generation. Allows users to post something to do and specify how many people can attend. Users can then join eachother’s events. User authentication utilizing jwt tokens, mongoDB back-end with relational schemas connecting users and events. React front-end that breaks down several components and imports them where required. </p>
                            <div className="justify-center card-actions">
                                <a href="https://github.com/die-perez/mern-auth-client-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary">Github Repo
                                </a>
                                <a href="https://admiring-spence-c2dab0.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary">Visit
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>
                </div>
            {/* </div> */}
            <div className={styles.space}></div>
        </section>
    )
} 