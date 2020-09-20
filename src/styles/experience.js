import styled, { css } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'
import ExperienceList from '../components/experienceList'

export const ExperienceStyle = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0px 50px 50px;
    ${media.xl`
        padding: 0px 50px 50px;
    `};
    ${media.lg`
        padding: 0px 50px 50px;
    `};
    ${media.md`
        display: block;
    `};
    ${media.sm`
        padding: 50px 35px 50px;
    `}
`

export const ExperienceSection = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    ${media.sm`
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    `}
`

export const ExperienceJob = styled.section`
    width: 100%;
    margin-bottom: 100px;
`

export const ExperienceItem = styled(ExperienceList)`
    
`