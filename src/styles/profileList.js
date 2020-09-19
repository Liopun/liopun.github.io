import styled from 'styled-components'
import { colors, fonts, media } from './constants'

export const ListTitle = styled.div`
    font-weight: 600;
    text-transform: uppercase;
    &::after {
        content: '';
        width: 1rem;
        height: 1px;
        background: ${colors.yellow500};
        display: inline-block;
        vertical-align: middle;
        margin-left: 1rem;
    }
`