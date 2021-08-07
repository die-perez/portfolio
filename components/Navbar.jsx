/* eslint-disable react/no-unknown-property */
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export const Navbar = () => {
    return (
        <div className="navbar sticky top-0 shadow-lg bg-neutral text-neutral-content rounded-box min-w-full z-10" style={{backgroundColor: "black"}}>
            <div className="px-2 mx-auto navbar-start ">
                <div className={styles.iconHolder}></div>
            </div> 
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    <Link href="#header">
                        <a className="btn btn-ghost btn-sm rounded-btn text-white">Home</a>
                    </Link> 
                    <Link href="#about">
                        <a className="btn btn-ghost btn-sm rounded-btn text-white">About</a>
                    </Link> 
                    <Link href="#projects">
                        <a className="btn btn-ghost btn-sm rounded-btn text-white">Projects</a>
                    </Link> 
                    <Link href="#contact">
                        <a className="btn btn-ghost btn-sm rounded-btn text-white">Contact</a>
                    </Link>
                </div>
            </div> 
            <div className="navbar-end" id="hide"></div>
        </div>
    )
}