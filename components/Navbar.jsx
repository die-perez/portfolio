/* eslint-disable react/no-unknown-property */
import styles from '../styles/Home.module.css'


export const Navbar = () => {
    return (
        <div className="navbar sticky top-0 mb-5 shadow-lg bg-neutral text-neutral-content rounded-box min-w-full z-10" style={{backgroundColor: "black"}}>
            <div className="px-2 mx-2 navbar-start">
                <div className={styles.iconHolder}>
                </div>
                {/* <span className="text-lg font-bold">
                        Andie
                </span> */}
            </div> 
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    {/* <a className="btn btn-ghost btn-sm rounded-btn text-white">
                            Home
                            </a>  */}
                    <a className="btn btn-ghost btn-sm rounded-btn text-white">
                            About
                            </a> 
                    <a className="btn btn-ghost btn-sm rounded-btn text-white">
                            Projects
                            </a> 
                    <a className="btn btn-ghost btn-sm rounded-btn text-white">
                            Contact
                    </a>
                </div>
            </div> 
            <div className="navbar-end">
            </div>
        </div>
    )
}