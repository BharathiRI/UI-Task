import styled from "styled-components";
import { screenSizes } from "../../styles/theme";

interface IProps{
 size: string,
 color: string,
 largeSize?: string
 maxWidth?: string
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
    color: ${props=>props.color === "Yes" ? "#fff" : "#27272e"};
    background-color:  ${props=>props.color === "Yes" ? "#5956e9" : "transparent"};
    border: ${props=>props.color === "Yes" ? "1px solid #5956e9" : "1px solid #99a1aa"};
    cursor: pointer;
    width: ${props=>props.maxWidth ? props.maxWidth : "none"};

   
    @media only screen and (min-width: ${screenSizes.M})
{
    padding:  ${props=>props.largeSize ? props.largeSize : props.size}
}

:hover{
    
}
`