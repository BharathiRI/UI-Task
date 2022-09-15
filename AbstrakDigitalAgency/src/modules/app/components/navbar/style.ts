import styled from "styled-components";
import { screenSizes } from "../../../../styles/theme";

interface IProps{
    bgColor: string
}

export const NavbarBody = styled.div`
 padding: 40px 20px;
 max-width: 540px;
 height: 20vh;
 margin: 0 auto;
 position:relative;

 @media only screen and (min-width: ${screenSizes.S}px)
 {
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

export const NavbarContainer = styled.div`
display:flex;
align-items: flex-start;
justify-content: space-between;
`;

export const NavbarLeft = styled.div``;

export const Image = styled.img``;

export const NavbarCenter = styled.div`

display:none;

@media only screen and (min-width: ${screenSizes.L}px)
    {
        display:flex;
        align-items:center;
         flex:1;
         justify-content: flex-end;
    }
`;


export const NavbarRight = styled.div`
`;

export const NavbarActions = styled.ul`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin:0;

`;

export const NavbarActionsList = styled.li`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const ActionButton = styled.button<IProps>`
height: 50px;
width: 50px;
    background-color: ${props=>props.bgColor} ;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all .3s ease-in-out;
    margin-left:10px;
    :last-child {
        display: block;
    }

    @media only screen and (min-width: ${screenSizes.S}px)
    {
        height: 60px;
        width: 60px;
    }
    
    @media only screen and (min-width: ${screenSizes.L}px)
    {
        :last-child{
        display:none;
        }
    }
`
export const Span = styled.span`
display: inline-block;
height: 2px;
    width: 20px;
    background-color: #27272e;
    margin-bottom: 4px;
    border-radius: 10px;
    transition: all .3s ease-in-out;

    :last-child{
    margin-bottom: 0;
    width: 10px;
    margin-right: -10px;

    ${ActionButton}:hover & {
        width: 10px;
        margin-right: -10px;
}
    }

   
`;

export const Span2 = styled.span`

    padding: 0;
    text-align: center;
    color: #fff;
    font-size: 16px;
    height: 30px;
    width: 30px;
    line-height: 24px;
    border: 1px solid transparent;
    border-radius: 50%;
    width: 100%;

    @media only screen and (min-width: ${screenSizes.S}px)
    {
        line-height: 34px;
        font-size: 16px;
        height: 30px;
        width: 30px;
    }
}
`
export const ThemeImage = styled.img`
    height: 30px;
    width: 30px;
`

