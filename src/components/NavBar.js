import React from "react";
import { Nav, Navbar } from "rsuite";
import { Link } from "react-scroll";
import ExternalLinks from "./ExternalLinks";
import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <Navbar className="navbar" appearance="subtle">
            <Nav pullRight className="nav-links">
                <Nav.Item>
                    <Link to="intro" smooth={true} duration={500}>
                        Home
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </Nav.Item>
                {/* Socials included inside the same pulled-right Nav to ensure they are together on the right */}

            </Nav>

            <Nav><Nav.Item>
                <ExternalLinks />
            </Nav.Item></Nav>

        </Navbar>
    );
};

export default NavBar;
