import * as Styled from './style'

interface Iprops {
  image: string
}

/**
 * @param image - Logo of the client companies
 * @returns Each clients Card
 */

export const Card = ({ image }: Iprops) => {
  return (
    <Styled.ClientsCard>
      <Styled.CardImage src={image} alt="img" />
    </Styled.ClientsCard>
  )
}
