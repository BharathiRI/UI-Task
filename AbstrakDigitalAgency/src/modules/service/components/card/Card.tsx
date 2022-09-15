import * as Styled from './style';

interface Iprops{
    image: string,
    title: string,
    content: string
}
export const Card = ({image,title,content}:Iprops) => {
  return (
    <Styled.ServiceCard>
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
               <Styled.CardLinkText><span> --- </span>Find out more</Styled.CardLinkText>
            </Styled.CardLink>
        </Styled.CardRight>
    </Styled.ServiceCard>
  )
}
