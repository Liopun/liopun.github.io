import styled, { css } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'

export const ProjectStyle = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 100px 50px 0px;
    a:after {
        display: none;
    }
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
export const ProjectSection = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 100px;
    margin-left: -5%;
    width: 125%;
    .screentime {
        margin-bottom: 70px;
    };
    :last-of-type {
        margin-bottom: 0;
    };
    ${media.xl`
        width: 115%;
    `};
    ${media.lg`
        width: 105%;
    `};
    ${media.md`
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%;
        display: block;
        margin-bottom: 70px;
        
    `};
`
export const ProjectFigure = styled.figure`
    max-width: 700px;
    overflow: visible;
    margin: 0;
    a {
        display: block;
    }
    .phones a {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .phones .phone {
        margin: 0 -7%;
    }
    .phones .phone:first-of-type {
        margin-left: -5%;
    }
    img {
        width: 100%;
        max-width: 100%;
        vertical-align: bottom;
    }
`
export const ProFigLink = styled.a`
    display: block;
`
export const FigCaption = styled.figcaption`
    width: 125px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 30px;
    .project__name {
        margin-bottom: 10px;
    }
    .project__name a {
        font-weight: 700;
    }
    p {
        font-size: 0.85rem;
        line-height: 1.3;
    }
    ${media.md`
        width: 100%;
        margin-top: 25px;
        margin-left: 0;
    `};
`