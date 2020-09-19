import React from 'react'
import PropTypes from "prop-types"
import { SectionTitle, SectionContent } from "../styles/background"
import { OtherStyle, OtherSection, OtherName, OtherUsed } from "../styles/others"

const Others = ({ data }) => {
    const others = data

    return (
        <OtherStyle>
            <SectionTitle>Other Projects</SectionTitle>
            <SectionContent>
                {others.edges.length > 0 && others.edges.map((other, i) => (
                    <OtherSection>
                        <OtherName>
                            <a href={other.node.url} target="_blank" className="arrow-link">{other.node.name}</a>
                        </OtherName>
                        <p>{other.node.desc}</p>
                        <OtherUsed>
                            {other.node.used.length > 0 && other.node.used.map((item, i) => (
                                <span className="project__used__item">{item.name}</span>
                            ))}
                        </OtherUsed>
                    </OtherSection>
                ))}
            </SectionContent>
        </OtherStyle>
    )
}

export default Others