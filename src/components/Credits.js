import React from "react";
import "../styles/Credits.css";

const Credits = () => {
    return (
        <div id="credits">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Nyasha Gupta. Built with React and RSuite.</p>
                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default Credits;
