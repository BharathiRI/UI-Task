import * as Styled from './style'

interface Iprops {
  image: string
  title: string
  content: string
}

/**
 * @params By using this we can customize it
 * @returns Individual Project
 */

export const Card = ({ image, title, content }: Iprops) => {
  return (
    <Styled.ProjectCard>
      <Styled.CardTop>
        <Styled.CardImage src={image} alt="img" />
      </Styled.CardTop>
      <Styled.CardBottom>
        <Styled.CardTitle>
          <Styled.CardTitleText>{title}</Styled.CardTitleText>
        </Styled.CardTitle>
        <Styled.CardContent>
          <Styled.CardContentText>{content}</Styled.CardContentText>
        </Styled.CardContent>
      </Styled.CardBottom>
    </Styled.ProjectCard>
  )
}
