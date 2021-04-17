import React, { useRef, useState } from "react";

export default function Index(props) {
  const navRef = useRef();
  const [navOpen, setNavOpen] = useState("");
  const [burger, setBugger] = useState("");
  const handleClick = () => {
    setNavOpen((prev) => (!prev ? "nav-open" : ""));
    setBugger((prev) => (!prev ? "toggle" : ""));
  };

  return (
    <>
      <header>
        {/* <nav ref={navRef} className="flex items-center w-11/12 m-auto">
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
        </nav> */}
        <div className="upper-logo">
          <h1>DIQ Seafoods</h1>
        </div>
        <nav className="main-head">
          <ul
            className={`nav-links ${navOpen}`}
          >
            <li>
              <a href="#about" onClick={handleClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#work" onClick={handleClick}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleClick}>
                Products
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleClick}>
                Request Price
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
