import styled from "styled-components";
import { gapSizes, screenSizes } from "../../../../styles/theme";

export const CardWrapper = styled.div`
background-color: #fff;
`

export const FooterBody = styled.div`
padding: 60px 15px 0;
max-width: 540px;
margin: 100px auto 0;
 @media only screen and (min-width: ${screenSizes.S}px)
 {
    margin: 200px auto 0;
    padding: 80px 15px 0;  
    max-width: 720px;
}
@media only screen and (min-width: ${screenSizes.M}px)
{
    max-width: 960px;
}
@media only screen and (min-width: ${screenSizes.XL}px)
{
    max-width: 1140px;
}
@media only screen and (min-width: ${screenSizes.XXL}px)
{
    max-width: 1320px;
}
`;

export const FooterTop = styled.div`
    padding-bottom: 30px;

 @media (${screenSizes.M}){
    padding-bottom: 50px;
 }]\

] OLoL ≥
`;

export const IconBox = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 -5px;
    list-style: none;
    cursor: pointer;
    padding:0;

`
export const Icon = styled.li`
 padding: 5px;
 opacity: 0.5;
 :hover{
    .svg {
        filter: invert(.5);
      }
 }
`
export const IconImage = styled.img`
height:28px;
width:28px;
`;

export const FooterCenter = styled.div`
display: grid;
grid-template-columns: 12fr;
grid-gap: ${gapSizes.XL};
padding: 50px 0;


@media (min-width: ${screenSizes.M}px) {
    grid-gap: ${gapSizes.M};
    grid-template-columns: 6fr 6fr;
    padding-top: 70px 0;
  }
`;

export const FooterCenterLeft = styled.div`
display: grid;
grid-template-rows: repeat(3,auto);

@media only screen and (min-width: ${screenSizes.XL}px)
{
    border-right: 1px solid #c7c7d5;
    padding-right: 80px;
    margin-right: 40px;
}
`;

export const Heading = styled.h2``;

export const Content = styled.p``;

export const InputBox = styled.form`
    background-color: #fff;
    border-radius: 20px;
    display: block;
    box-shadow: none;
    height: auto;
    padding: 0;

    @media only screen and (min-width: ${screenSizes.S}px)
   {
    padding: 10px 10px 10px 25px;
    display: flex;
    align-items: center;
    height: 72px;
    box-shadow: 0 24px 48px -15px rgb(153 161 170 / 25%);
    }
`;

export const InputMain = styled.div`
    display: flex;
    align-items: center;
    flex:1 auto;
    border-radius: 20px;
    border: 1px solid #ecf2f6;
    margin-bottom: 10px;
    padding: 0 15px 0 15px;

    @media only screen and (min-width: ${screenSizes.S}px)
    {
        padding: 5px 15px;
        height: auto;
        border: none;
        background-color: transparent;
        margin-bottom: 0;
    }
`;

export const InputIcon = styled.img`
width: 15px;
height: 15px;
margin-right: ${gapSizes.S};
@media only screen and (min-width: ${screenSizes.S}px)
{
    width: 25px;
    height: 25px;
    margin-right: ${gapSizes.M};
}
`;

export const Input = styled.input`
border: none;
outline: none;
width: 100%;

:focus{
    border:none;
    outline:none;
}
`;

export const FooterCenterRight = styled.div`
display: grid;
grid-template-columns: 12fr;
grid-gap: 10px;

@media only screen and (min-width: ${screenSizes.S}px)
{
    grid-template-columns: 6fr 3fr 3fr;
}
`;

export const ListBox = styled.div``;

export const ListHeading = styled.h6`
font-weight: 700;
`

export const List = styled.p`
color: #525260;
font-size: 16px;
line-height: 1.5;
`;


export const FooterBottom = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-top: 1px solid #c7c7d5;
padding: 25px 0;

@media only screen and (min-width: ${screenSizes.S}px)
{
    flex-direction: row;
}
`;
