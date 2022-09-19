import { ThemeProps, withTheme } from "styled-components"
import { Heading } from "../../shared/Heading/Heading"
import { getImageUrl } from "../../shared/helpers/util"
import { Card } from "./components/card/Card"
import { BackgroundLayer } from './components/backgroundLayer/BackgroundLayer'
import * as Styled from './style'

export const Stories: React.FC = withTheme((props: ThemeProps<any>) => {

  const cardArray = [
    {
        id:'1',
        image: `${getImageUrl}/blog/thumb_5.png`,
        title: 'Follow your own design process, whatever gets you...',
        content: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
    },
    {
        id:'2',
        image: `${getImageUrl}/blog/thumb_1.png`,
        title: 'How To Use a Remarketing Strategy To Get More',
        content: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
    },
    
  ]

  return (
    <Styled.CardWrapper>
    <Styled.StoriesBody>
        <Heading
          width= "40%"
          align="center"
          colors="#292930"
          title="What's Going On"
          mainTitle="Latest stories"
          subTitle="News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital Marketing"
         />
        <Styled.CardWrapper>
        <Styled.CardContainer>
            {
                cardArray?.map((card)=>{
                    return <Card key={card.id} image={card.image} title={card.title} content={card.content} />
                })
            }
        </Styled.CardContainer>
        </Styled.CardWrapper>
    </Styled.StoriesBody>
    <BackgroundLayer/>
    </Styled.CardWrapper>
  )
})
