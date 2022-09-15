import * as Styled from './style'

interface Iprops {
  image: string
  data: string
  content: string
}
export const Card = ({ image, data, content }: Iprops) => {
  return (
    <Styled.CaseStudyCard>
        <Styled.CardImage src={image} alt="img" />
        <Styled.CardTitleText>{data}</Styled.CardTitleText>
        <Styled.CardContentText>{content}</Styled.CardContentText>
    </Styled.CaseStudyCard>
  )
}
