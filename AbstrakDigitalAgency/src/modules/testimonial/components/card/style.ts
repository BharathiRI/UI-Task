import styled from "styled-components";
import { screenSizes } from "../../../../styles/theme";


export const TestimonialCard = styled.div`
 color: #333;
 padding: 30px 0;
 border-top: 2px solid transparent;
 transition: all .3s ease-in-out;

 @media only screen and (min-width: ${screenSizes.S}) {
    padding: 50px 0 30px;
}

:hover{
    border-top-color: #5956e9;
}
`
export const CardTop = styled.div`
overflow: hidden;
 `
export const CardTopImage = styled.img`
width: 50px;
height: 50px;
font-size: 20px;
font-weight: 700;
color: #c75c6f;
margin-bottom: 30px;
`;

export const CardCenter = styled.div`
`
export const CardCenterText = styled.p`
    font-size: 18px;
    line-height: 1.2;
    color: #292930;
    font-size: 18px;
    @media only screen and (min-width: ${screenSizes.S})
{
    font-size: 24px;
}
`
export const CardBottom = styled.div`
display: grid;
grid-template-columns:10% 90%;
column-gap:3%;
background-color: #fff;
border-radius: 0 0 30px 30px;
// padding: 40px 50px 20px;
// @media only screen and (min-width: ${screenSizes.M})
// {
//     padding: 40px 50px 20px;
// }
`;

export const CardBottomImage = styled.div`
`;

export const Image = styled.img`
border-radius: 50%;
`;

export const CardBottomTextBox = styled.div``;

export const CardBottomHeading = styled.div`
font-weight: 500;
color: #292930;
margin-bottom: 3px;
`;

export const CardBottomText = styled.p`
    font-size: 14px;
    color: #999fae;
    line-height: 1.2;
`;

