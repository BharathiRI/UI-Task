import styled from "styled-components";
import { fontSizes  } from "../../../../styles/theme";


export const CaseStudyCard = styled.div`
    text-align: center;
    border-radius: 30px;
    transition: all .3s ease-in-out;
    margin-bottom: 30px;
    padding: 25% 15%;
    :hover{
        background: linear-gradient(180deg,#27272e,#303035);
    }
`

export const CardContentText = styled.h6`
 color: #fff;
 font-weight: 400;
 font-size: ${fontSizes.S};
`
export const CardTitleText = styled.h2`
margin-bottom: 10px;
color: #5956e9;
`
export const CardImage = styled.img`
margin-bottom: 20px;
`