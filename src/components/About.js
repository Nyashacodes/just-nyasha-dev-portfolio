import React from "react";
import FadeInSection from "./FadeInSection";
import "../styles/About.css";

const About = () => {
    const stack = [
        "React.js",
        "TypeScript",
        "Node.js",
        "Redux",
        "Next.js",
        "SPFx",
        "AWS",
        "PostgreSQL",
    ];

    return (
        <div id="about">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/ about me</span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        <p>
                            I am currently a <b>Software Engineer</b> at <b>Infosys Limited</b>,
                            working on full-stack development for <b>British Telecommunications</b>.
                            With over 4 years of experience, I've had the opportunity to lead
                            frontend modernization projects and build robust enterprise solutions.
                        </p>
                        <p>
                            I'm passionate about leveraging AI-powered tools like Amazon Q and Claude
                            to optimize workflows and improve code quality.
                        </p>
                        <p>Here are some technologies I have been working with recently:</p>
                        <ul className="tech-stack">
                            {stack.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-image">
                        <img src="/assets/me.jpg" alt="Gazi Jarin" />
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
};

export default About;
