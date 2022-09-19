import * as Styled from './style'
import Tick from '../../../../assets/images/icons/Tick.svg'
import {Button } from '../../../../shared/button/Button'

interface Iprops {
  title: string
  subTitle: string
  monthlyAmount: string
  yearlyAmount: string
  amountPlan: string
  features: string[]
}
export const Card = ({ title, subTitle, monthlyAmount, yearlyAmount,amountPlan, features }: Iprops) => {
  return (
    <Styled.PricePlansCard>
      <Styled.CardTop>
        <Styled.CardHeading>{title}</Styled.CardHeading>
        <Styled.CardSubHeading>{subTitle}</Styled.CardSubHeading>
        <Styled.PriceBox>
          <Styled.Amount>
             {monthlyAmount}
          </Styled.Amount>
          <Styled.AmountPlan>
             / {amountPlan}
          </Styled.AmountPlan>
        </Styled.PriceBox>
        <Button
                size="23px 55px"
                color="#27272e"
                bgColor="transparent"
                hoverBgColor='#ffdc60'
                hoverColor='#fff'
                border="none"
                buttonText="Get Started Today"
              />
      </Styled.CardTop>
      <Styled.CardBottom>
        {features?.map((feature: string, index: number) => {
          return (
            <Styled.CardBottomLines  key={index}>
                  <svg stroke="currentColor" fill="#999fae"  viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
          <Styled.CardBottomText>{feature}</Styled.CardBottomText>
          </Styled.CardBottomLines>
          )
        })}
        </Styled.CardBottom>
    </Styled.PricePlansCard>
  )
}
