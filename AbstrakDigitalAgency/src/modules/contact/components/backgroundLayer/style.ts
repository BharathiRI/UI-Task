import styled from 'styled-components'
import { screenSizes } from '../../../../styles/theme'

export const BackgroundLayer = styled.div``

export const ShapeOne = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  width: 80%;
  @media (min-width: ${screenSizes.S})
 {
  width: 100%;
}
`

export const ShapeTwo = styled.div`
  top: 110px;
  left: 0;
  position: absolute;
  z-index: -1;
`

export const ShapeThree = styled.div`
  bottom: 140px;
  right: 0;
  position: absolute;
  z-index: -1;
`
export const ShapeImage = styled.img``
