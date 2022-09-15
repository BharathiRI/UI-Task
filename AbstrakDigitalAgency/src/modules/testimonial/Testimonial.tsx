
import { Heading } from '../../shared/Heading/Heading'
import { getImageUrl } from '../../shared/helpers/util'
import { Card } from './components/card/Card'
import * as Styled from './style'


export const Testimonial = () => {
  const cardArray = [
    {
      id: '1',
      image: `${getImageUrl}/icon/yelp-2.png`,
      authorImage: `${getImageUrl}/testimonial/testimonial-1.png`,
      content: "“ Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”",
      Designation: "Executive Chairman",
      authorName: "Savannah Nguyen"
    },
    {
      id: '2',
      image: `${getImageUrl}/icon/google-2.png`,
      authorImage: `${getImageUrl}/testimonial/testimonial-2.png`,
      content:"“ Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”",
      Designation: "Executive Chairman",
      authorName: "Darrell Steward"
    },
    {
      id: '3',
      image: `${getImageUrl}/icon/fb-2.png`,
      authorImage: `${getImageUrl}/testimonial/testimonial-3.png`,
      content:"“ Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”",
      Designation: "Executive Chairman",
      authorName: "Floyd Miles"
    }
   ]

   
  return (
    <Styled.CardWrapper>
    <Styled.TestimonialBody>
        <Heading
          width= "60%"
          align="left"
          colors="#292930"
          title="Testimonial"
          mainTitle="From getting started"
          subTitle="Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed ligula commodo blandit in et mauris."
        />
      <Styled.CardContainer>
        {cardArray?.map((card) => {
          return <Card key={card.id} image={card.image} content={card.content} authorImage={card.authorImage} designation={card.Designation} authorName={card.authorName}/>
        })}
      </Styled.CardContainer>
    </Styled.TestimonialBody>
    </Styled.CardWrapper>
  )
}
