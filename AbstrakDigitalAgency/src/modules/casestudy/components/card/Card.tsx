import * as Styled from './style'
import AnimatedNumber from 'react-animated-number'

interface Iprops {
  image: string
  data: number
  content: string
}
export const Card = ({ image, data, content }: Iprops) => {
  return (
    <Styled.CaseStudyCard>
      <Styled.CardImage src={image} alt="img" />
      <Styled.CardTitleText>
        <AnimatedNumber
          component="text"
          initialValue={0}
          value={data}
          stepPrecision={0}
          duration={7000}
          style={{
            transition: "0.8s ease-out",
            fontSize: 48,
            transitionProperty: "background-color, color, opacity"
          }}
          formatValue={(n:any)=> Intl.NumberFormat("en-US").format(n)}
        />
        <Styled.CardSpan>+</Styled.CardSpan>
      </Styled.CardTitleText>
      <Styled.CardContentText>{content}</Styled.CardContentText>
    </Styled.CaseStudyCard>
  )
}
