import styled from "styled-components";
import { screenSizes } from '../../styles/theme'

interface IProps{
   active:boolean
}

export const CardWrapper = styled.div`
background-color: #fff;
`;

export const ProjectBody = styled.div`
 display: grid;
 grid-template-rows: repeat(2,auto);
 padding: 60px 15px 90px;
 max-width: 540px;
 margin: 0 auto;

 @media only screen and (min-width: ${screenSizes.S}px)
  {
    max-width: 720px;
     padding: 80px 15px 60px;
 }
 @media only screen and (min-width: ${screenSizes.M}px)
 {
    max-width: 960px;
    padding: 100px 15px 80px
 }
 @media only screen and (min-width: ${screenSizes.XL}px)
 {
    max-width: 1140px;
    padding: 140px 15px 100px
 }
 @media only screen and (min-width: ${screenSizes.XXL}px)
{
    max-width: 1320px;
}
`;

export const ProjectTypeBox = styled.div`
margin-bottom: 55px;
display:flex;
align-items: center;
max-width: 100%;
@media only screen and (min-width: ${screenSizes.S}px)
  {
   max-width:80%;
 }
 @media only screen and (min-width: ${screenSizes.L}px)
  {
   max-width:50%;
 }
`;

export const ProjectText = styled.div<IProps>`
margin-right:15%;
font-size: 18px;
font-weight:500;
cursor: pointer;
padding-bottom: 4px;
border-bottom-style:  ${props=>props.active ? "solid" : "none"};
border-bottom-width:  ${props=>props.active ? "2px" : "none"};
border-bottom-color:  ${props=>props.active ? "#0d6efd" : "none"};
@media only screen and (min-width: ${screenSizes.XL}px)
 {
   font-size: 20px;
 }
`;

export const CardContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(1,1fr);
 column-gap: 5%;
 row-gap:40px;
 @media (min-width: ${screenSizes.S}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
