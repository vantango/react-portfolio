import React from "react";
import "./style.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" id="logo-name" href="index.html">
                Aleksandr Kimball-Moreno
            </a>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-dark"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="about">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/vantango" target="_blank">
                            GitHub
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/aleksandr-kimball-moreno-a7026850/"
                            target="_blank">
                            LinkedIn
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/vantango/my-portfolio-v1/raw/main/Assets/Images/Resume FINALIZED (2-5-21).pdf
                            " download>
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;