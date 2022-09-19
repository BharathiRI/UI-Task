import styled from "styled-components";
import {  fontSizes, screenSizes } from "../../../../styles/theme";


export const ProjectCard = styled.div`
 display: grid;
 border-radius: 30px;
 transition: all 0.3s ease-in-out;
 z-index: 1;
 color: #fff;
 box-shadow: 0 55px 86px -35px #ecf2f6;
`
export const CardTop = styled.div`
overflow: hidden;
border-radius: 30px 30px 0 0;
 `
export const CardBottom = styled.div`
background-color: #fff;
border-radius: 0 0 30px 30px;
padding: 40px 50px 20px;
@media only screen and (min-width: ${screenSizes.M})
{
    padding: 40px 50px 20px;
}
`;

export const CardTitle = styled.div``;

export const CardContent = styled.div``;

export const CardContentText = styled.p`
 color: #525260;
 font-weight: 400;
 line-height: 1.5;
 font-size: ${fontSizes.S};
`
export const CardTitleText = styled.h4`
color: #292930;
`
export const CardImage = styled.img`
border-radius: 30px 30px 0 0;
width: 100%;
transition: transform 2s cubic-bezier(.2,.96,.34,1),-webkit-transform 2s cubic-bezier(.2,.96,.34,1);

:hover{
transform: scale(1.2);
}
`