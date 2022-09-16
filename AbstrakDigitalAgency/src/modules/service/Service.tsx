import { ThemeProps, withTheme } from "styled-components"
import { Heading } from "../../shared/Heading/Heading"
import { getImageUrl } from "../../shared/helpers/util"
import { Card } from "./components/card/Card"
import * as Styled from './style'

export const Service: React.FC = withTheme((props: ThemeProps<any>) => {

  const cardArray = [
    {
        id:'1',
        image: `${getImageUrl}\icon/icon-1.png`,
        title: 'Design',
        content: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
    },
    {
        id:'2',
        image: `${getImageUrl}\icon/icon-2.png`,
        title: 'Development',
        content: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
    },
    {
        id:'3',
        image: `${getImageUrl}\icon/icon-3.png`,
        title: 'Online Marketing',
        content: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
    },
    {
        id:'4',
        image: `${getImageUrl}\icon/icon-4.png`,
        title: 'Business',
        content: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
    },
    {
        id:'5',
        image: `${getImageUrl}\icon/icon-5.png`,
        title: 'Technology',
        content: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
    },
    {
        id:'6',
        image: `${getImageUrl}\icon/icon-6.png`,
        title: 'Content Strategy',
        content: 'Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.'
    }
  ]

  return (
    <Styled.CardWrapper>
    <Styled.ServiceBody>
         <Heading
          width= "60%"
          align="left"
          colors="#fff"
          subColor="#fff"
          title="What We Can Do For You"
          mainTitle="Services we can help you with"
          subTitle="Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed ligula commodo blandit in et mauris."
        />
        <Styled.CardContainer>
            {
                cardArray?.map((card)=>{
                    return <Card key={card.id} image={card.image} title={card.title} content={card.content} />
                })
            }
        </Styled.CardContainer>
    </Styled.ServiceBody>
    </Styled.CardWrapper>
  )
})
