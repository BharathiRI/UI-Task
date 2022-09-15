import * as Styled from './style';

interface Iprops{
    image: string
}
export const Card = ({image}:Iprops) => {
  return (
    <Styled.ClientsCard>
          <Styled.CardImage src={image} alt="img" />
    </Styled.ClientsCard>
  )
}
