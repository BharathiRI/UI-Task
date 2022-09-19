import { useState } from 'react'
import { Heading } from '../../shared/Heading/Heading'
import { getImageUrl } from '../../shared/helpers/util'
import { BackgroundLayer } from './components/backgroundLayer/BackgroundLayer'
import { Card } from './components/card/Card'
import * as Styled from './style'


export const Projects = () => {

  const [active1,setActive1] = useState<boolean>(true);
  const [active2,setActive2] = useState<boolean>(false);
  const [active3,setActive3] = useState<boolean>(false);

  const cardArray = [
    {
      id: '1',
      image: `${getImageUrl}\project/project-1.png`,
      title: 'Creative Agency',
      content: 'Branding, Website, App'
    },
    {
      id: '2',
      image: `${getImageUrl}\project/project-2.png`,
      title: 'Digital Marketing',
      content: 'Logo, Website, Mobile'
    },
    {
      id: '3',
      image: `${getImageUrl}\project/project-3.png`,
      title: 'Digital Agency',
      content: 'Website, UI/UX'
    },
    {
      id: '4',
      image: `${getImageUrl}\project/project-4.png`,
      title: 'Plan Management',
      content: 'Branding, Website, Mobile'
    },
    {
      id: '5',
      image: `${getImageUrl}\project/project-5.png`,
      title: 'Social Engagement',
      content: 'Design, Development'
    },
    {
      id: '6',
      image: `${getImageUrl}\project/project-6.png`,
      title: 'Web Application',
      content: 'Logo, Webapp, Mobile'
    },
  ]

  return (
    <Styled.CardWrapper>
    <Styled.ProjectBody>
      <Heading
        align="left"
        colors="#292930"
        title="Our Project"
        mainTitle ={`Some of our\nfinest work`}
      />
      <Styled.ProjectTypeBox>
          <Styled.ProjectText onClick={()=>{
              setActive1(true)
              setActive2(false)
              setActive3(false)
              }} active={active1}>All Works</Styled.ProjectText>
          <Styled.ProjectText onClick={()=>{
              setActive1(false)
              setActive2(true)
              setActive3(false)
              }} active={active2}>Branding</Styled.ProjectText>
          <Styled.ProjectText onClick={()=>{
              setActive1(false)
              setActive2(false)
              setActive3(true)
              }} active={active3}>Mobile</Styled.ProjectText>
        </Styled.ProjectTypeBox>
     <Styled.CardContainer>
        {cardArray?.map((card) => {
          return <Card key={card.id} image={card.image} title={card.title} content={card.content} />
        })}
      </Styled.CardContainer>
    </Styled.ProjectBody>
    <BackgroundLayer/>
    </Styled.CardWrapper>
  )
}
