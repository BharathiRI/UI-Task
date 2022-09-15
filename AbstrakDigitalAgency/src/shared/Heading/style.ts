import styled from "styled-components";
import { fontSizes, screenSizes } from "../../styles/theme";

interface Iprops{
    align: string
    width: string
}

interface IColorProps{
    colors: string
}

export const HeadingBody = styled.div<Iprops>`
    margin-bottom: 50px;
    text-align: ${props=>props.align};
    @media (min-width: ${screenSizes.M}px) {
        width: ${props=>props.width ? props.width : ''};
        margin: ${props=>props.align === "center" ? "0 auto" : ''};
    }  
`;

export const Title = styled.span`
  color: #c75c6f;
  font-size: ${fontSizes.XXS};
  font-weight: 500;
  margin-bottom: 15px;

  @media (min-width: ${screenSizes.S}px) {
    font-size: ${fontSizes.S};
}
@media (min-width: ${screenSizes.M}px) {
    font-size: 20px;
}
`;

export const MainTitle = styled.h2<IColorProps>`
margin-top: 20px;
margin-bottom: 40px;
color: ${props=>props.colors};
@media (min-width: ${screenSizes.XS}px) {
    font-size: 34px;
}
@media (min-width: ${screenSizes.S}px) {
    font-size: 50px;
}
@media (min-width: ${screenSizes.M}px) {
    font-size: 60px;
}
`;

export const SubTitleBox = styled.div`
`;

export const SubTitle = styled.p`
font-size: ${fontSizes.XS};
color: #525260;
@media (min-width: ${screenSizes.M}px) {
    font-size: ${fontSizes.S};
    margin: 0 auto 40px;
}

`;