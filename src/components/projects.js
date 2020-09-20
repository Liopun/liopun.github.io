import React from 'react'
import { SectionTitle, SectionContent } from "../styles/background"
import { ProjectStyle, ProjectSection, ProjectFigure, FigCaption } from "../styles/projects"

const Projects = ({ data }) => {
    const projects = data
    
    return (
        <ProjectStyle>
            <SectionTitle>Featured Projects</SectionTitle>
            <SectionContent>
                {projects.edges.length > 0 && projects.edges.map((project, i) => (
                    <ProjectSection key={i}>
                        <ProjectFigure>
                            <a href={project.node.url} target="_blank" rel="noopener noreferrer">
                                <img src={project.node.img} alt={project.node.project} />
                            </a>
                        </ProjectFigure>
                        <FigCaption>
                            <div className="project__name">
                                <a href={project.node.url} target="_blank" rel="noopener noreferrer">
                                    {project.node.project}
                                </a>
                            </div>
                            <p>{project.node.desc}</p>
                        </FigCaption>
                    </ProjectSection>
                ))}
            </SectionContent>
        </ProjectStyle>
    )
}

export default Projects