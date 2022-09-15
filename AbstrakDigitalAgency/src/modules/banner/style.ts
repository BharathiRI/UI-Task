import styled from "styled-components";
import { screenSizes } from "../../styles/theme";

interface IImage{
width: string
}

export const BannerWrapper = styled.div`
`;

export const BannerBody = styled.div`
display: grid;
grid-template-columns:12fr;
padding: 60px 20px 0;
margin: 0 auto;
@media (min-width: ${screenSizes.XS}px) {
    max-width: 540px;
  }
@media only screen and (min-width: ${screenSizes.S}px)
{
    max-width: 720px;
    padding: 80px 35px;
}
@media only screen and (min-width: ${screenSizes.M}px)
{
    max-width: 960px;
   grid-template-columns:6fr 6fr;
//    padding: 100px 65px;
}
@media only screen and (min-width: ${screenSizes.XL}px)
{
    max-width: 1140px;
// padding: 140px 95px;
}
@media only screen and (min-width: ${screenSizes.XXL}px)
 {
     max-width: 1320px;
 }
`;

export const BannerLeft = styled.div`
`;

export const AnimatedBox1 = styled.div`
animation-name: fadeInUp;
animation-duration: 1s;
`;

export const AnimatedBox2 = styled.div`
animation-name: zoomIn;
animation-duration: 2s;
   
`;

export const AnimatedBox3 = styled.div`
animation-name: slideInRight;
animation-duration: 2s;

`;

export const BannerHeading = styled.h1``

export const BannerContent = styled.p``

export const BannerRight = styled.div`
display: flex;
align-items: center;
margin:0 auto;
border-bottom: 1px solid #e3e6e9;
@media (min-width: ${screenSizes.S}px)
{
}
@media (min-width: ${screenSizes.XL}px)
{
    justify-self: right;
}
@media (min-width: ${screenSizes.XXL}px)
{
    justify-self: center;
}
`;

export const ImageBox1 = styled.div`
margin-top: 0px;
@media only screen and (min-width: ${screenSizes.S}px)
{
}
@media only screen and (min-width: ${screenSizes.M}px)
{
    margin-top: -200px;
}
@media only screen and (min-width: ${screenSizes.XL}px)
 {
    margin-top: -150px;
 }
 @media only screen and (min-width: ${screenSizes.XL}px)
 {
    margin-right: -50px;
    margin-top:-100px;
 }
`;

export const ImageBox2 = styled.div`

`;

export const Image = styled.img<IImage>`
width: ${props=>props.width};
`