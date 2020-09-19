import React from 'react'
import PropTypes from "prop-types"
import { SectionTitle, SectionContent, BackgroundStyle } from "../styles/background"

const Background = () => {
    return (
        <>  
            <BackgroundStyle>
                <SectionTitle>Intro</SectionTitle>
                <SectionContent>
                    <p>
                        I bridge the gap between engineering and design &mdash; 
                        With my keen eye for design to create beautiful interfaces. My goal is to build <span>full-stack applications</span> that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
                    </p>
                </SectionContent>
            </BackgroundStyle>
        </>
    )
}

export default Background