import styled from "styled-components";
import { screenSizes } from "../../../../styles/theme";

interface IProps{
    bgColor: string
}

interface IPosition{
    sticky : boolean
}

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

export const NavbarBody = styled.header<IPosition>`
 padding: 20px;
 height: 13vh;
 margin: 0 auto;
 position:${props=>props.sticky ? "sticky" : "relative"};
 top:0;
 left:0;
 right:0;
 background-color: ${props=>props.sticky ? "#fff" : "transparent"}; 
 width:100%;
 z-index: 10;
`;

export const NavbarContainer = styled.div`
display:flex;
align-items: flex-start;
justify-content: space-between;
margin:0 auto;
max-width: 95% 
`;

export const NavbarLeft = styled.div`
`;

export const Image = styled.img`
width:80%;
height:80%;
`;

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
    padding:0;
`;

export const NavbarActionsList = styled.li`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

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
            width: 20px;
            margin-right: 0;

        }
    }
    :first-child{
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
    height: 20px;
    width: 20px;
    margin-top:4px;
`

