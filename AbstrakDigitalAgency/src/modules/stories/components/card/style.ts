import styled from "styled-components";
import { gapSizes, screenSizes } from "../../../../styles/theme";


export const StoriesCard = styled.div`
 display: grid;
 border-top: 1px solid #e3e6e9;
 border-bottom: 1px solid #e3e6e9;
 transition: all 0.3s ease-in-out;
 padding: 40px 0;

@media (min-width: ${screenSizes.S}px)
{
    grid-template-columns: 4fr 8fr;
    padding: 40px 20px 40px 0;
}
 @media (min-width: ${screenSizes.XL}px)
{
    grid-template-columns: 6fr 6fr;
    :nth-child(even){
        border-left: 1px solid #e3e6e9;
        padding-left: 25px;
        padding-right: 0;
     }

:hover {
        border-top-color: #5956e9;
 }
}
`
export const CardLeft = styled.div`
 overflow: hidden;
 border-radius: 30px;
 margin-bottom: ${gapSizes.M};
 @media (min-width: ${screenSizes.S}px)
{
    margin-right: ${gapSizes.M};
    margin-bottom: 0;
}
 `
export const CardRight = styled.div`
 display:grid;
 grid-template-rows: repeat(3,auto);
 align-items: start
`;

export const CardTitle = styled.div`
margin-bottom: 20px;
`;

export const CardContent = styled.div``;

export const CardLink = styled.div`
    font-weight: 500;
    color: #292930;
    display:flex;
    align-item:flex-start;
`;

export const CardLinkIcon = styled.img`
margin-left:8px;
`

export const CardLinkText = styled.p`
    font-weight: 500;
    margin-bottom:0;
    :hover {
        color: #0a58ca;
    }
`
export const CardContentText = styled.p`
 color: #999fae;
    letter-spacing: -.025em;
    margin-bottom: 30px;
    :hover {
        color: #0a58ca;
    }
`
export const CardTitleText = styled.h5`
 color: #333;
`
export const CardImage = styled.img`
border-radius: 30px;
transition: all .3s ease-in-out;
width:100%;

${StoriesCard}:hover & {
    transform: scale(1.1);
}
`