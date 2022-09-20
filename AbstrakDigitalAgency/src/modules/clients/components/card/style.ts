import styled from 'styled-components'

export const ClientsCard = styled.div`
  display: grid;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  color: #fff;
`

export const CardImage = styled.img`
  filter: grayscale(100%);
  opacity: 0.3;
  transition: all 0.3s ease-in-out;

  :hover {
    opacity: 1;
    filter: grayscale(0);
  }
`
