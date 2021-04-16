import React, { useRef, useState } from 'react';
import styles from '../Styles.module.scss';

export default function Index(props) {
    const navRef = useRef();
    const [navOpen, setNavOpen] = useState('');
    const [burger, setBugger] = useState('');
    const handleClick = () => {
        setNavOpen((prev) => !prev ? 'nav-open': '');
        setBugger((prev) => !prev ? 'toggle': '');
    }

    return (
        <>
        <header className={`main-head shadow relative z-10 ${styles.mainHead}`}>
        <nav ref={navRef} className="flex items-center w-11/12 m-auto">
            <h1 id="logo" className="flex-1">DIQ Seafoods</h1>
            <ul className={`nav-links flex items-center justify-around flex-1 ${navOpen}`}>
            <li><a href="#about" onClick={handleClick}>About</a></li>
            <li><a href="#work" onClick={handleClick}>Work</a></li>
            <li><a href="#contact" onClick={handleClick}>Contact</a></li>
            </ul>
            <div className={`burger ${burger}`} onClick={handleClick}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </nav>
        </header>
        </>
    )
}
