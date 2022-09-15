import { Heading } from '../../shared/Heading/Heading'
import { Card } from './components/card/Card'
import * as Styled from './style'

export const PricePlans = () => {
  const cardArray = [
    {
      id: '1',
      title: 'Professional',
      subTitle: 'A beautiful, simple website',
      monthlyAmount: '$200',
      yearlyAmount: '',
      plan : 'yearly',
      features: [
        'Pages Responsive Website',
        'PPC Campaigns',
        'SEO Keywords',
        'Facebook Camplaigns',
        'Video Camplaigns',
      ],
    },
    {
      id: '2',
      title: 'Standard',
      subTitle: 'Small Team',
      monthlyAmount: '$500',
      yearlyAmount: '',
      plan : 'yearly',
      features: [
        'Pages Responsive Website',
        'PPC Campaigns',
        'SEO Keywords',
        'Facebook Camplaigns',
        'Video Camplaigns',
      ],
    },
    {
      id: '3',
      title: 'Ulitimate',
      subTitle: 'Large Team',
      monthlyAmount: '$799.90',
      yearlyAmount: '',
      plan : 'yearly',
      features: [
        'Pages Responsive Website',
        'PPC Campaigns',
        'SEO Keywords',
        'Facebook Camplaigns',
        'Video Camplaigns',
      ],
    },
  ]

  return (
    <Styled.CardWrapper>
    <Styled.PricePlansBody>
        <Heading
          width= "60%"
          align="center"
          colors="#292930"
          title="Pricing Plan"
          mainTitle="We’ve built solutions for..."
          subTitle="Flexible pricing options for freelancers and design teams."
        />
      <Styled.CardContainer>
        {cardArray?.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              subTitle={card.subTitle}
              monthlyAmount={card.monthlyAmount}
              yearlyAmount={card.yearlyAmount}
              amountPlan= {card.plan}
              features={card.features}
            />
          )
        })}
      </Styled.CardContainer>
    </Styled.PricePlansBody>
    </Styled.CardWrapper>
  )
}
