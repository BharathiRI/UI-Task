import styled from "styled-components";
import { screenSizes } from "../../styles/theme";

export const Dropdown = styled.ul`
list-style:none;
display:flex;
align-items: flex-start;
`;

export const DropdownList = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
margin: 0 11px;
transition: all .3s ease-in-out;
width:120px;
@media only screen and (min-width: ${screenSizes.XL}px)
{
    width:130px;
    margin: 0 23px;
}

`;

export const DropdownTextBox = styled.a`
    font-weight: 500;
    font-size: 16px;
    color: #525260;
    display: flex;
    align-items: center;
    :before{
    content: "";
    height: 2px;
    width: 0;
    background-color: #5956e9;
    position: absolute;
    bottom: 12px;
    left: 0;
    opacity: 0;
    transition: .5s;
    }

    ${DropdownList}:hover &{
        color: #5956e9;
    }
    :hover{
        text-decoration: underline #5956e9;
    }
`;

export const DropdownText = styled.p`
margin: 0;
`;

export const Image = styled.img`
    margin-left: 2px;
    font-size: 14px;
`;

export const DropdownSubMenu = styled.ul`
    list-style:none;
    background: #fff;
    z-index: -1;
    display:none;
    opacity: 0;
    visibility: hidden;
    min-width: 250px;
    padding: 15px 10px;
    border-radius: 4px;
    margin:0;
    transition: all .3s ease-in-out;
    box-shadow: 0 13px 48px 0 rgb(0 0 0 / 15%);
    cursor: pointer;
    ${DropdownList}:hover & {
    opacity: 1;
    display: block;
    visibility: visible;
    z-index: 9;
    left: 0;
    margin: 20px 0;
    }
`;

export const DropdownSubMenuList = styled.li`
    margin: 0;
    transition: all .3s ease-in-out;
    opacity: 0;
    transform: translateX(20px);
    text-decoration:none;
    ${DropdownList}:hover & {
        opacity: 1;
        transform: translateX(0);
    }
    
    :hover{
        text-decoration: line-through 2px #5956e9;
        color:#5956e9;
    }
`;

export const DropdownSubText = styled.p`
    font-size: 14px;
    text-transform: capitalize;
    color: #525260;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 4px;
    transition: all .3s ease-in-out;
    margin:0;
`
