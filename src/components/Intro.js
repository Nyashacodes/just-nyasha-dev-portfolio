import React from "react";
import ParticlePortrait from "./ParticlePortrait";
import FadeInSection from "./FadeInSection";
import "../styles/Intro.css";

const Intro = () => {
    return (
        <section id="intro">
            <ParticlePortrait />
            <FadeInSection>
                <div className="intro-content">
                    <h1 className="intro-title">
                        hi, <span className="highlight">nyasha</span> here.
                    </h1>
                    <p className="intro-subtitle">i build things for the web.</p>
                    <div className="intro-description">
                        <p>
                            I am a Software Developer with 4+ years of experience building
                            scalable enterprise applications. I specialize in React.js,
                            TypeScript, Node.js, and modernizing legacy applications.
                        </p>
                    </div>
                    <a href="mailto:nyashacodes@gmail.com" className="intro-contact">
                        Say hi!
                    </a>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Intro;
