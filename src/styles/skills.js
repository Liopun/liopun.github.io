import styled, { css } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'
import ProfileList from '../components/profileList'

export const SkillStyle = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 100px 100px;
    ${media.xl`
        padding: 70px;
    `};
    ${media.lg`
        padding: 50px;
    `};
    ${media.md`
        display: block;
    `};
    ${media.sm`
        padding: 50px 35px;
    `}
`

export const SkillSection = styled.section`
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

export const SkillCategory = styled.div`
    ${media.sm`
        width: 47%;
        margin-right: 5px;
        margin-bottom: 25px;
    `}
`

export const SkillList = styled(ProfileList)`
    
`