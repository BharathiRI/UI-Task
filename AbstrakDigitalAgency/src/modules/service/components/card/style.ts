import styled from "styled-components";
import { gapSizes, screenSizes } from '../../../../styles/theme'

export const CardContentText = styled.p`
 opacity: 0.5;
`
export const CardLinkText = styled.p`
    font-weight: 500;
`
export const ServiceCard = styled.div`
 padding: 40px 25px;
 display: grid;
 grid-template-columns: 3fr 9fr;
 column-gap:${gapSizes.L}
 border:1px solid white;
 border-radius: 30px;
 transition: all 0.3s ease-in-out;
 z-index: 1;
 color: #fff;
 
 :hover{
    background: linear-gradient(180deg,#27272e,#303035);
    border-image-source: linear-gradient(0deg,#27272e 64.45%,rgba(74,75,86,.72));

    ${CardContentText}{
        opacity:1;
    }
    ${CardLinkText}{
        color:#fab8c4;
    }
 }

@media (max-width: ${screenSizes.M}){
    padding: 50px 50px 40px
}
`
export const CardLeft = styled.div`
    margin-right: ${gapSizes.S};
 `
export const CardRight = styled.div`
 display:grid;
 grid-template-rows: repeat(3,auto);
 align-items: start;
`;

export const CardTitle = styled.div``;

export const CardContent = styled.div`
margin-bottom:30px;
`;

export const CardLink = styled.div`
cursor: pointer;
span {
    margin-right: ${gapSizes.S};
}
`;

export const CardTitleText = styled.h5`
 color: #fff;
`
export const CardImage = styled.img`
`