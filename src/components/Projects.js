import React from "react";
import FadeInSection from "./FadeInSection";
import "../styles/Projects.css";

const Projects = () => {
    const projects = {
        "TaskSphere": {
            desc: "An intelligent task organizer with multi-user support, priority management, scheduling, and automated cleanup. Deployed with CI/CD on Netlify.",
            techStack: "React.js, Node.js, Express, MongoDB",
            link: "https://github.com/Nyashacodes/my-todo.git",
            open: ""
        },
        "VisionChat AI": {
            desc: "A full-stack AI image generation chat application with authentication, chat history, and Gemini-powered image creation.",
            techStack: "React.js, Node.js, Gemini API, Firebase",
            link: "https://github.com/Nyashacodes/visionchat-ai-frontend",
            open: ""
        },
        "AreYouAliveDemo": {
            desc: "A safety confirmation app where users press a button to check-in. If they don't within 24 hours, the backend sends an SMS alert to a contact.",
            techStack: "React Native, Node.js, Twilio API",
            link: "https://github.com/Nyashacodes/AreYouAliveDemoMobileApp",
            open: ""
        },
        "YearProgressGridExtension": {
            desc: "A browser extension that visualizes the progress of the year through a grid, helping users stay mindful of time passing.",
            techStack: "JavaScript, HTML, CSS, Chrome Extension API",
            link: "https://github.com/Nyashacodes/YearProgressGridExtension",
            open: ""
        },
        "CalenderPost": {
            desc: "A social media post scheduler and calendar tool for managing content across multiple platforms.",
            techStack: "React.js, Node.js, PostgreSQL",
            link: "https://github.com/Nyashacodes/CalendarPost",
            open: ""
        }
    };

    return (
        <div id="projects">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/ projects</span>
                </div>
                <div className="project-grid">
                    {Object.keys(projects).map((key, i) => (
                        <FadeInSection key={i}>
                            <div className="project-card">
                                <div className="project-header">
                                    <div className="folder-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="external-links">
                                        <a href={projects[key].link} target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="project-title">{key}</div>
                                <div className="project-desc">{projects[key].desc}</div>
                                <div className="project-tech">{projects[key].techStack}</div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </FadeInSection>
        </div>
    );
};

export default Projects;
