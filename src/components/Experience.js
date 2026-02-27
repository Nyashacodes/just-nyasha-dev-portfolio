import React from "react";
import FadeInSection from "./FadeInSection";
import JobList from "./JobList";
import "../styles/Experience.css";

const Experience = () => {
    return (
        <div id="experience">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/ experience</span>
                </div>
                <JobList />
            </FadeInSection>
        </div>
    );
};

export default Experience;
