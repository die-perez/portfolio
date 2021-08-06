import styles from '../styles/Home.module.css'

export const Stack = () => {
    return (
        <section className={styles.about}>
            <div styles={{backgroundColor: "black"}} className={styles.sectionLook}>
                <h1 className={styles.aboutHeading}>Stack</h1>
                <div className={styles.stackHolder}>
                    <div className="card-body">
                        <h2 className="card-title">Front End</h2> 
                        <ul>
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>
                            <li>react.js</li>
                            <li>next.js</li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Back End</h2> 
                        <ul>
                            <li>python</li>
                            <li>node.js</li>
                            <li>express.js</li>
                            <li>postgreSQL</li>
                            <li>mongoDB</li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Version Control</h2> 
                        <ul>
                            <li>git</li>
                            <li>github</li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Design Tools</h2> 
                        <ul>
                            <li>adobe illustrator</li>
                            <li>figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
} 