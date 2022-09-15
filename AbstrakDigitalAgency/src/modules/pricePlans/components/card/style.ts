import styled from "styled-components";
import { gapSizes, screenSizes } from "../../../../styles/theme";


export const PricePlansCard = styled.div`
 color: #333;
 border: 1px solid #e3e6e9;
 background-color: #fff;
    padding: 40px;
    border-radius: 30px;
    margin-bottom: 30px;
    transition: all .3s ease-in-out;

    @media only screen and (min-width: ${screenSizes.M}px and max-width: ${screenSizes.XL}px)
    {
        padding: 40px 15px;
    }

   :hover {
        background-color: #5956e9;
    }
`
export const CardTop = styled.div`
 text-align: center;
 `

 export const CardHeading = styled.h3`
 color: #5956e9;
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 8px;
    letter-spacing: -.045em;
    transition: all .3s ease-in-out;

    ${PricePlansCard}:hover & {
        color: #fff;
    }
    `;
 
 export const CardSubHeading = styled.p`
    font-size: 14px;
    color: #292930;
    transition: all .3s ease-in-out;
    margin-bottom: 20px;

    ${PricePlansCard}:hover & {
        color: #fff;
    }
 `;

 export const PriceBox = styled.div`
    border-top: 1px solid #e3e6e9;
    padding-top: 50px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in-out;
 `;

 export const Amount = styled.h2`
 font-weight: 500;
 letter-spacing: -.045em;
 font-size: 40px;
 ${PricePlansCard}:hover & {
    color: #fff;
}
@media only screen and (min-width: ${screenSizes.S})
{
    font-size: 50px;
}
 `;

 export const AmountPlan = styled.span`
 marign-left: 8px;
 font-size: 14px;
 font-weight: 500;
 color: #999fae;
 margin-left: 8px;
 transition: all .3s ease-in-out;

 ${PricePlansCard}:hover & {
    color: #fff;
}
 `;

export const CardBottom = styled.div`
  margin-top:30px;
`;

export const CardBottomLines = styled.div`
  display:flex;
  align-items: flex-start;
  column-gap:${gapSizes.S};
 transition: all .3s ease-in-out;
`;


export const Right = styled.img`
opacity:0.4;
`;

export const CardBottomText = styled.p`
    font-size: 14px;
    color: #999fae;
    line-height: 1.2;

    ${PricePlansCard}:hover & {
        color: #fff;
    }
`;

