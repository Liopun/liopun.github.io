import styled from 'styled-components'
import { colors, fonts, media } from './constants'

export const ListJob = styled.div`
    margin-bottom: 25px;
`
export const ListTimePlace = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    ${media.xs`
        display: block;
    `}
`

export const ListCompany = styled.div`
    font-weight: 600;
`
export const ListTime = styled.div`
    font-size: 0.9rem;
    font-family: Inconsolata, monospace;
    ${media.xs`
        font-size: 0.8rem;
    `}
`

export const ListPosition = styled.div`

`