import React from "react";
import PropTypes from "prop-types";
import { Tabs, Nav } from "rsuite";
import FadeInSection from "./FadeInSection";
import "../styles/JobList.css";

const JobList = () => {
    const experienceItems = {
        "British Telecommunications": {
            jobTitle: "Full-Stack Engineer @",
            duration: "Jan 2025 - PRESENT",
            desc: [
                "Architect and maintain modular React.js UI components and shared TypeScript libraries.",
                "Accelerated feature delivery by 25% by integrating Amazon Q Developer for automated unit test generation.",
                "Developed robust Node.js/Express APIs with custom middleware and high-performance endpoints.",
                "Optimized PostgreSQL performance through advanced indexing and query tuning."
            ]
        },
        "Pfizer Pharmaceutical": {
            jobTitle: "Team Lead, Frontend Modernization @",
            duration: "Aug 2023 - JAN 2025",
            desc: [
                "Led a 4-member team to rebuild 16 scientist-facing apps from jQuery to React + TypeScript.",
                "Delivered 35–45% performance improvements via code-splitting and memoization.",
                "Integrated SharePoint SPFx React components for secure access to SharePoint Lists.",
                "Leveraged Amazon Q Developer to automate unit testing, accelerating delivery by 20%."
            ]
        },
        "Hitachi, Ltd.": {
            jobTitle: "Cloud & Application Engineer @",
            duration: "SEP 2021 - JUL 2023",
            desc: [
                "Monitored cloud infra (AWS EC2, Lambda, RDS; Azure VMs) and implemented automation scripts in Python & Bash.",
                "Delivered frontend and backend fixes (React, Node, PostgreSQL) and coordinated incident response.",
                "Collaborated with DevOps to optimize cloud costs and improve system uptime."
            ]
        },
        "Regex Software": {
            jobTitle: "Web Developer Intern @",
            duration: "OCT 2020 - JAN 2021",
            desc: [
                "Built Gym Portal with authentication, subscription payments (Razorpay) and diet tracking.",
                "Implemented responsive UI with HTML/CSS/JavaScript and integrated REST APIs."
            ]
        }
    };

    const [activeKey, setActiveKey] = React.useState("British Telecommunications");

    return (
        <div className="job-list">
            <div className="tabs-container">
                <Nav
                    vertical
                    appearance="subtle"
                    activeKey={activeKey}
                    onSelect={setActiveKey}
                    className="job-tabs"
                >
                    {Object.keys(experienceItems).map((key) => (
                        <Nav.Item key={key} eventKey={key}>
                            {key}
                        </Nav.Item>
                    ))}
                </Nav>
                <div className="tab-content">
                    <FadeInSection>
                        <div className="job-header">
                            <span className="job-title">
                                {experienceItems[activeKey].jobTitle}
                            </span>
                            <span className="job-company"> {activeKey}</span>
                        </div>
                        <div className="job-duration">
                            {experienceItems[activeKey].duration}
                        </div>
                        <ul className="job-description">
                            {experienceItems[activeKey].desc.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </FadeInSection>
                </div>
            </div>
        </div>
    );
};

export default JobList;
