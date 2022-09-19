import styled from "styled-components";
import { screenSizes } from "../../styles/theme";

interface IProps{
    width: string;
}

export const CardWrapper = styled.div`
padding-top:20px;
position: relative;
z-index: 1;
:before{
    content: "";
    height: 400px;
    width: 100%;
    background-color: #5956e9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
@media only screen and (min-width: ${screenSizes.XS}px)
 {
   :before{
        height: 480px;
    }
}
@media only screen and (min-width: ${screenSizes.M}px)
 {
   :before{
        height: 500px;
    }
}
@media only screen and (min-width: ${screenSizes.L}px)
 {
   :before{
        height: 730px;
    }
}
`;

export const CollabrationBody = styled.div`
 padding: 60px 15px 20px;
 max-width: 540px;
 margin: 0 auto;
 position:relative;

 @media only screen and (min-width: ${screenSizes.S}px)
 {
    max-width: 720px;
    padding: 80px 15px 40px;
}
@media only screen and (min-width: ${screenSizes.M}px)
{
    max-width: 960px;
    padding: 100px 15px 60px
}
@media only screen and (min-width: ${screenSizes.XL}px)
{
    max-width: 1140px;
    padding: 140px 15px 100px

}
@media only screen and (min-width: ${screenSizes.XXL}px)
{
    max-width: 1320px;
}

`;

export const CollabrationTop = styled.div`
text-align: center;
margin-bottom: 50px;
@media only screen and (min-width: ${screenSizes.S}px)
 {
    margin-right: 65px;
}
`;

export const CollabrationBottom = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid #e3e6e9;
position: absolute;
bottom:-40%;
@media only screen and (min-width: ${screenSizes.XS}px)
 {
    bottom:-56%;
}
@media only screen and (min-width: ${screenSizes.M}px)
 {
    bottom:-90%;
}
@media only screen and (min-width: ${screenSizes.L}px)
 {
    bottom:-80%;
}
@media only screen and (min-width: ${screenSizes.XL}px)
 {
    bottom:-50%;
}
@media only screen and (min-width: ${screenSizes.XXL}px)
{
    left: 200px;
     width: 70%;
}
`

export const CollabrationLargeImage = styled.div`
`

export const Image = styled.img<IProps>`
width: 90%;
`;

export const CollabrationImageList1 = styled.div`
margin-right:-40px;
z-index: 1;
`;

export const CollabrationImageList2 = styled.div`
margin-left:-40px;
z-index: 1;
`;