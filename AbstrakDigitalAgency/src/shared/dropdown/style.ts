import styled from "styled-components";
import { screenSizes } from "../../styles/theme";

interface IProps{
    view: string;
}

export const Dropdown = styled.ul<IProps>`
list-style:none;
display:flex;
flex-direction: ${props=>props.view === "Mobile" ? "column" : "row"};
align-items: flex-start;
padding:0;
`;

export const DropdownList = styled.li<IProps>`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
margin: 0 10px;
transition: all .3s ease-in-out;
width:${props=>props.view === "Mobile" ? "95%" : "80px"};
border-bottom: ${props=>props.view === "Mobile" ? "1px solid #dbdeff" : "none"};

@media only screen and (min-width: ${screenSizes.XL}px)
{
    margin: 0 23px;
}
:first-child{
   width:${props=>props.view === "Mobile" ? "95%" : "130px"};
}
`;


export const DropdownTextBox = styled.a<IProps>`
    width:100%;
    font-family: "HelveticaSansBold";
    font-weight: 500;
    font-size: 16px;
    color: #525260;
    display: flex;
    align-items: center;
    justify-content: ${props=>props.view === "Mobile" ? "space-between" : "flext-start"};
    line-height: ${props=>props.view === "Mobile" ? "50px" : ""};

    
    ${DropdownList}:hover &{
        color: #5956e9;
    }
    :hover{
        border-bottom-style:  ${props=>props.view === "Mobile" ? "none" : "solid"};
        border-bottom-width:${props=>props.view === "Mobile" ? "none" : "1px"};
        border-bottom-color: ${props=>props.view === "Mobile" ?"none" : "#5956e9"};
    }
`;

export const DropdownText = styled.p`
margin: 0;
margin-right: 5px;
`;

export const DropdownSubMenuList = styled.li<IProps>`
    margin: 0;
    opacity: 0;
    text-decoration:none;
    transform: translateX(20px);
    transition: all .9s ease-in-out;

    ${DropdownList}:hover & {
        opacity: 1;
        transform: translateX(0);
    }

    :nth-child(1n) {
    transition-delay: .1s
}
    :hover{
        text-decoration: ${props=>props.view === "Mobile" ?"none" : "line-through 2px #5956e9"};
    }
`;

export const DropdownSubMenu = styled.ul<IProps>`
    list-style:none;
    background: #fff;
    z-index: -1;
    display:none;
    opacity: 0;
    visibility: hidden;
    min-width: ${props=>props.view === "Mobile" ? "100%" : "250px"};
    border-radius: 4px;
    transition: ${props=>props.view === "Mobile" ? "none 0s ease 0s" : "all .3s ease-in-out"};
    cursor: pointer;
    width: 200px;
    padding:10px 15px;
    ${DropdownList}:hover & {
    opacity: 1;
    display: block;
    visibility: visible;
    z-index: 9;
    left: 0;
    margin: 20px 0;
    box-shadow: ${props=>props.view === "Mobile" ? "none" : "0 13px 48px 0 rgb(0 0 0 / 15%)" };
    /* ${DropdownSubMenuList} {
        opacity: 1;
        transform: translateX(0);
    } */
    }

    
`;

export const DropdownSubText = styled.p`
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 4px;
    transition: all .3s ease-in-out;
    margin:0;

    ${DropdownSubMenuList}:hover & {
        color: #5956e9;
    }
    :after{
    content: "";
    height: 1px;
    width: 0;
    background-color: #5956e9;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all .3s ease-in-out;
    }
`
