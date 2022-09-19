import styled from "styled-components";
import { slideInLeft } from "../../../../../styles/styled";

interface IProps{
    expand: boolean
}

export const MobileNavBody = styled.div<IProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    visibility: ${props=>props.expand ? "visible" : "hidden"};
    opacity:${props=>props.expand  ? "1" : "0"};
    z-index: 1500;
    animation: ${slideInLeft} .7s;
    transition: all .8s cubic-bezier(.77,.2,.05,1);
`;

export const MobileNavInner = styled.div`
    width: 300px;
    background-color: #fff;
    padding: 0 10px 50px;
    overflow-y: auto;
    height: 100%;
`;

export const MobileNavHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
    padding: 20px 0;
    border-bottom: 1px solid #dbdeff;
`;

export const MobileNavLogo = styled.div`
    width: 150px;
    line-height: 1;
    text-decoration: none;
    transition: all .3s ease-in-out;
    display: inline-block;
`;

export const Image = styled.img`
height:70%;
`;

export const CloseButton = styled.button`
    background-color: transparent;
    height: 30px;
    width: 30px;
    border: 2px solid #99a1aa;
    border-radius: 10px;
    color: #27272e;
    font-size: 14px;
    transition: all .3s ease-in-out;
    line-height: 1;
    margin: 0;
    padding: 0;
`;

export const CloseIcon = styled.img``;

export const MobileMenuBody = styled.div`
padding:0;

`;

export const MobileMenuInner = styled.nav`
display: block;
`;
