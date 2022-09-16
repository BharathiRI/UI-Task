import styled from "styled-components";
import { screenSizes } from "../../styles/theme";
import {PricePlansCard} from '../../modules/pricePlans/components/card/style'

interface IProps{
 size: string,
 color: string,
 bgColor: string,
 border: string,
 largeSize?: string
 maxWidth?: string
 hoverBgColor: string
 hoverColor: string
}

export const Button = styled.button<IProps>`
    border-radius: 20px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -.04em;
    padding: ${props=>props.size};
    height: auto;
    text-align: center;
    transition: all .3s ease-in-out;
    color: ${props=>props.color};
    background-color:  ${props=>props.bgColor};
    border-width: 1px;
    border-type: solid;
    border-color: ${props=>props.bgColor === "transparent" ? "#99a1aa" : props.bgColor};
    cursor: pointer;
    width: ${props=>props.maxWidth ? props.maxWidth : "none"};

    @media only screen and (min-width: ${screenSizes.M})
{
    padding:  ${props=>props.largeSize ? props.largeSize : props.size}
}

${PricePlansCard}: hover &{
    background-color: #ffdc60;
    border-color: #ffdc60;
    color: #fff;
}
:hover{
    background-color: ${props=>props.hoverBgColor};
    border-color: ${props=>props.hoverBgColor};
    color: ${props=>props.hoverColor};
}
`