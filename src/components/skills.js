import React from 'react'
import { SectionTitle, SectionContent } from "../styles/background"
import { SkillStyle, SkillSection, SkillCategory, SkillList } from "../styles/skills"
import ProfileListItem from "./profileListItem"

const Skills = ({ data }) => {
    const { tools, frameworks, langs, methodologies } = data
    
    return (
        <SkillStyle>
            <SectionTitle>Skills</SectionTitle>
            <SectionContent>
                <SkillSection>
                    <SkillCategory>
                        {langs.edges.length > 0 && <SkillList 
                                title="Languages"
                                list={() => langs.edges.map((lang, i) => (
                                    <ProfileListItem 
                                        key={i}
                                        {...lang}
                                    />
                                ))}
                            />}
                    </SkillCategory>
                    <SkillCategory>
                        {frameworks.edges.length > 0 && <SkillList 
                            title="Frameworks"
                            list={() => frameworks.edges.map((framework, i) => (
                                <ProfileListItem 
                                    key={i}
                                    {...framework}
                                />
                            ))}
                        />}
                    </SkillCategory>
                    <SkillCategory>
                        {tools.edges.length > 0 && <SkillList 
                            title="Tools"
                            list={() => tools.edges.map((tool, i) => (
                                <ProfileListItem 
                                    key={i}
                                    {...tool}
                                />
                            ))}
                        />}
                    </SkillCategory>
                    <SkillCategory>
                        {methodologies.edges.length > 0 && <SkillList 
                            title="Methodologies"
                            list={() => methodologies.edges.map((meth, i) => (
                                <ProfileListItem 
                                    key={i}
                                    {...meth}
                                />
                            ))}
                        />}
                    </SkillCategory>
                </SkillSection>
            </SectionContent>
        </SkillStyle>
    )
}

export default Skills