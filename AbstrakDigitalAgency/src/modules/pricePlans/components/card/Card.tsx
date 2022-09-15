import * as Styled from './style'
import Right from '../../../../assets/images/icons/Right.svg'
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
        <Button maxWidth="100%" type="button" size="23px 55px"  color="No" buttonText='Get Started Today'></Button>
      </Styled.CardTop>
      <Styled.CardBottom>
        {features?.map((feature: string, index: number) => {
          return (
            <Styled.CardBottomLines  key={index}>
            <Styled.Right src={Right} alt="img" />
          <Styled.CardBottomText>{feature}</Styled.CardBottomText>
          </Styled.CardBottomLines>
          )
        })}
        </Styled.CardBottom>
    </Styled.PricePlansCard>
  )
}
