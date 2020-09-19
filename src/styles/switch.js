import styled, { css } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './constants'

export const SwitchWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 30px;
    ${media.xs`
        top: 10px;
        right: 20px;
    `}
`
export const Sun = styled.svg`
    width: 17px;
    height: 17px;
    transition: all 0.7s linear;
`
export const ToggleWrapper = styled.div`
    margin: 10px;
    label {
        cursor: pointer;
        text-indent: -9999px;
        width: 45px;
        height: 25px;
        background: grey;
        display: block;
        border-radius: 100px;
        position: relative;
    }
    label:after {
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 19px;
        height: 19px;
        background: #fff;
        border-radius: 100%;
    }
    #switch {
        height: 0;
        width: 0;
        visibility: hidden;
        position: absolute;
        background: ${colors.gray700};
    };
    #switch:checked + label {
        background: ${colors.yellow900};
    };
    #switch:checked + label:after {
        left: calc(100% - 3px);
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    };
`
export const Moon = styled.svg`
    width: 17px;
    height: 17px;
    transition: all 0.7s linear;
`