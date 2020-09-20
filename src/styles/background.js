import styled from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'

export const SectionTitle = styled.div`
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 200px;
    margin-right: 70px;
    color: ${colors.arrow007};
    text-transform: uppercase;
    text-align: right;
    font-weight: 700;
    letter-spacing: 2px;
    ${media.lg`
        margin-right: 50px;
    `};
    ${media.md`
        width: 150px;
    `};
    ${media.sm`
        text-align: left;
        width: auto;
    `}
`

export const SectionContent = styled.div`
    font-weight: 300;
    font-size: 1rem;
    width: 100%;
    max-width: 650px;
    ${media.sm`
        padding-top: 30px;
        padding-left: 30px;
    `};
    ${media.xs`
        padding-left: 10px;
    `};

    p {
        margin-top: 0;
        margin-bottom: 25px;
    }
    
    span {
        font-weight: 600;
    }
`

export const BackgroundStyle = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 100px 50px 0px;
    ${media.xl`
        padding: 100px 50px 0px;
    `};
    ${media.lg`
        padding: 50px 50px 0px;
    `};
    ${media.md`
        display: block;
    `};
    ${media.sm`
        padding: 50px 35px 0px;
    `}
`

export const BackgroundSection = styled.section`
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