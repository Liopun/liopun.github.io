import React from 'react'
import PropTypes from "prop-types"
import { SectionTitle, SectionContent } from "../styles/background"
import { ExperienceStyle, ExperienceSection, ExperienceJob, ExperienceItem } from "../styles/experience"

const Experience = ({ data }) => {
    const experiences = data
    return (
        <ExperienceStyle>
            <SectionTitle>Experience</SectionTitle>
            <SectionContent>
                <ExperienceSection>
                    <ExperienceJob>
                        {experiences.edges.length > 0 &&
                            experiences.edges.map((exp, i) => (
                                <ExperienceItem 
                                    key={i}
                                    {...exp}
                                />
                            ))}
                    </ExperienceJob>
                </ExperienceSection>
                <a href="https://www.dropbox.com/s/1jiybx0ttp24wri/Captone%20H%20-%20Fullstack%20-%20Resume.PDF?dl=0" target="_blank" className="arrow-link" rel="noopener noreferrer" >View My Resume</a>
            </SectionContent>
        </ExperienceStyle>
    )
}

export default Experience