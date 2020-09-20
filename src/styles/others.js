import styled, { css } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'

export const OtherStyle = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 100px 50px;
    ${media.xl`
        padding: 100px 50px;
    `};
    ${media.lg`
        padding: 50px 50px;
    `};
    ${media.md`
        display: block;
    `};
    ${media.sm`
        padding: 50px 35px;
    `}
`

export const OtherSection = styled.section`
    max-width: 600px;
    margin-bottom: 50px;
    p {
        font-size: 0.9rem;
        margin-bottom: 20px;
    }
`

export const OtherName = styled.div`
    margin-bottom: 10px;
`
export const OtherUsed = styled.div`
    .project__used__item {
        display: inline-block;
        margin: 3px 3px 3px 0;
        font-family: Inconsolata, monospace;
        font-size: 0.75rem;
        font-weight: 700;
        padding: 2px 7px;
        border-radius: 3px;
        color: #007bff;
        border: 1px solid #007bff;
        background: 0 0;
    }
    .project__used__item:first-of-type {
        margin-left: 0;
    }
`