import { Heading } from '../../shared/Heading/Heading'
import { getImageUrl } from '../../shared/helpers/util'
import { Card } from './components/card/Card'
import { BackgroundLayer } from './components/backgroundLayer/BackgroundLayer'
import * as Styled from './style'

/**
 *
 * @returns Clients section
 */

export const Clients = () => {
  const cardArray = [
    {
      id: '1',
      image: `${getImageUrl}/brand/brand-1.png`,
    },
    {
      id: '2',
      image: `${getImageUrl}/brand/brand-2.png`,
    },
    {
      id: '3',
      image: `${getImageUrl}/brand/brand-3.png`,
    },
    {
      id: '4',
      image: `${getImageUrl}/brand/brand-4.png`,
    },
    {
      id: '5',
      image: `${getImageUrl}/brand/brand-5.png`,
    },
    {
      id: '6',
      image: `${getImageUrl}/brand/brand-6.png`,
    },
    {
      id: '7',
      image: `${getImageUrl}/brand/brand-7.png`,
    },
    {
      id: '8',
      image: `${getImageUrl}/brand/brand-8.png`,
    },
  ]

  return (
    <Styled.CardWrapper>
      <Styled.ClientsBody>
        <Heading
          width="60%"
          align="left"
          colors="#fff"
          subColor="#fff"
          title="Top Clients"
          mainTitle="We’ve built solutions for..."
          subTitle="Design anything from simple icons to fully featured websites and applications."
        />
        <Styled.CardContainer>
          {cardArray?.map((card) => {
            return <Card key={card.id} image={card.image} />
          })}
        </Styled.CardContainer>
      </Styled.ClientsBody>
      <BackgroundLayer />
    </Styled.CardWrapper>
  )
}
