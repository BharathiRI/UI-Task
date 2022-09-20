import * as Styled from './style'
import RightArrow from '../../../../assets/images/icons/RightArrow.svg'

interface Iprops {
  image: string
  title: string
  content: string
}

/**
 * @params By using this we can customize it
 * @returns Individual stories
 */

export const Card = ({ image, title, content }: Iprops) => {
  return (
    <Styled.StoriesCard>
      <Styled.CardLeft>
        <Styled.CardImage src={image} alt="img" />
      </Styled.CardLeft>
      <Styled.CardRight>
        <Styled.CardTitle>
          <Styled.CardTitleText>{title}</Styled.CardTitleText>
        </Styled.CardTitle>
        <Styled.CardContent>
          <Styled.CardContentText>{content}</Styled.CardContentText>
        </Styled.CardContent>
        <Styled.CardLink>
          <Styled.CardLinkText>Learn more</Styled.CardLinkText>
          <Styled.CardLinkIcon src={RightArrow} alt="img" />
        </Styled.CardLink>
      </Styled.CardRight>
    </Styled.StoriesCard>
  )
}
