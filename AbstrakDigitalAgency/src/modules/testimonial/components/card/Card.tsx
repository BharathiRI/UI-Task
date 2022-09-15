import * as Styled from './style';

interface Iprops{
    image: string,
    content: string,
    authorImage: string,
    designation: string,
    authorName: string
}
export const Card = ({image, content, authorImage, designation,authorName}:Iprops) => {
  return (
    <Styled.TestimonialCard>
        <Styled.CardTop>
          <Styled.CardTopImage src={image} alt="img" />
        </Styled.CardTop>
        <Styled.CardCenter>
        <Styled.CardCenterText>{content}</Styled.CardCenterText> 
        </Styled.CardCenter>
        <Styled.CardBottom>
           <Styled.CardBottomImage>
            <Styled.Image src={authorImage} alt="img" />
           </Styled.CardBottomImage>
           <Styled.CardBottomTextBox>
             <Styled.CardBottomHeading>
               {authorName}
             </Styled.CardBottomHeading>
             <Styled.CardBottomText>
              {designation}
             </Styled.CardBottomText>
           </Styled.CardBottomTextBox>
        </Styled.CardBottom>
    </Styled.TestimonialCard>
  )
}
