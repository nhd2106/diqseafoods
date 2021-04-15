import React from 'react';
import styles from '../Styles.module.scss';

export default function Index(props) {
    

    return (
        <>
        <header className={`main-head shadow relative z-10 ${styles.mainHead}`}>
        <nav className="flex items-center w-11/12 m-auto">
            <h1 id="logo" className="flex-1">DIQ Seafoods</h1>
            <ul className="nav-links flex items-center justify-around flex-1">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="burger">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </nav>
        </header>
        </>
    )
}
