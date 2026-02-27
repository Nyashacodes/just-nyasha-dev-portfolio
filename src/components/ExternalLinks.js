import React from "react";
import EmailFillIcon from "@rsuite/icons/EmailFill";
import GithubIcon from "@rsuite/icons/legacy/Github";
import LinkedinIcon from "@rsuite/icons/legacy/Linkedin";
import EditIcon from "@rsuite/icons/Edit";
import "../styles/ExternalLinks.css";

const ExternalLinks = () => {
    // Basic verification that icons are loaded
    if (!EmailFillIcon || !GithubIcon || !LinkedinIcon || !EditIcon) {
        return null;
    }

    return (
        <div className="external-links-nav">
            <a href="mailto:nyashacodes@gmail.com">
                <EmailFillIcon style={{ fontSize: "20px" }} />
            </a>
            <a href="https://github.com/Nyashacodes" target="_blank" rel="noopener noreferrer">
                <GithubIcon style={{ fontSize: "20px" }} />
            </a>
            <a href="https://linkedin.com/in/nyasha-gupta" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon style={{ fontSize: "20px" }} />
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                <EditIcon style={{ fontSize: "20px" }} />
            </a>
        </div>
    );
};

export default ExternalLinks;
