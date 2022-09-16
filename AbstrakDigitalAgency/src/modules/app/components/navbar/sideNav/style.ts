import styled from "styled-components";
import { screenSizes } from "../../../../../styles/theme";

interface IProps{
    expand: boolean
}

export const SideNavBody = styled.div<IProps>`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1500;
    width: 60vw;
    height:100%;
    visibility: ${props=>props.expand ? "visible" : "hidden"};
    opacity:${props=>props.expand  ? "1" : "0"};
    outline: 0;
    border-left: 1px solid rgba(0,0,0,.2);
    background-color: #fff;
    overflow-y: auto;
    transition: transform .3s ease-in-out;

    @media only screen and (min-width: ${screenSizes.XL}px)
{
    width: 70vw;
}
    `;

export const SideNavInner = styled.div`
display: flex;
flex-direction: column;
width:90%;
margin:0 auto;
`;

export const SideNavHeader = styled.div``;

export const CloseButton = styled.button`
margin:20px 0;
font-size: 22px;
transition: all .3s ease-in-out;
padding: 0.5rem;
border:none;
background:transparent;
opacity:0.5;

:hover{
    opacity:1;
}
`;

export const CloseIcon = styled.img`
width:30px;
height: 30px;
`;

export const InputBox = styled.form`
margin-bottom: 16px;
`;

export const Input = styled.input`
    border: 1px solid #ecf2f6;
    border-radius: 16px;
    background-color: transparent;
    color: #292930;
    padding: 15px 20px;
    width: 100%;
    font-size: 40px;
    height: auto;
    border: none;
    border-bottom: 2px solid #999ab8;
    border-radius: 0;
    padding: 5px 0;
}
`;

export const MainBox = styled.div`
padding: 0 15px;
display: grid;
grid-template-columns: 6fr 6fr;
margin-top:40px;
`;

export const LeftBox = styled.div`
`;

export const LeftBoxText = styled.p`
    color: #27272e;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    @media only screen and (min-width: ${screenSizes.XL}px)
{
    font-size: 36px;

}
`;

export const RightBox = styled.div`
display:flex;
flex-direction: column;
`;

export const Box = styled.address`
font-style: normal;
line-height: inherit;
`;

export const BoxHeading = styled.h5`
margin-bottom: 10px;
`;

export const BoxText = styled.p`
margin-bottom: 10px;
`;

export const IconBox = styled.div``;

export const Image= styled.img`
`;

export const AddressLine = styled.div`
margin-bottom: 10px;
display: flex;
align-items: flex-start;
`;

export const AImage = styled.img`
margin-right:3px;
`;