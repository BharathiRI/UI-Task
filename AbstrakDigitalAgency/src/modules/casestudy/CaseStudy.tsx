import { Heading } from '../../shared/Heading/Heading'
import { getImageUrl } from '../../shared/helpers/util'
import { Card } from './components/card/Card'
import * as Styled from './style'


export const CaseStudy = () => {
  const cardArray = [
    {
      id: '1',
      image: `${getImageUrl}\icon/icon-7.png`,
      data: '15+',
      content: 'Years of operation'
    },
    {
      id: '2',
      image: `${getImageUrl}\icon/icon-8.png`,
      data: '360+',
      content: 'Projects deliverd'
    },
    {
      id: '3',
      image: `${getImageUrl}\icon/icon-9.png`,
      data: '600+',
      content: 'Specialist'
    },
    {
      id: '4',
      image: `${getImageUrl}\icon/apple.png`,
      data: '64+',
      content: 'Years of operation'
    }
  ]

  return (
    <Styled.CardWrapper>   
       <Styled.CaseStudyBody>
       <Heading
          width= "60%"
          align="center"
          colors="#fff"
          subColor='#fff'
          title="Pricing Plan"
          mainTitle="We’ve built solutions for..."
          subTitle="Flexible pricing options for freelancers and design teams."
         />
      <Styled.CardContainer>
        {cardArray?.map((card) => {
          return <Card key={card.id} image={card.image} data={card.data} content={card.content} />
        })}
      </Styled.CardContainer>
    </Styled.CaseStudyBody>
    </Styled.CardWrapper>
  )
}
