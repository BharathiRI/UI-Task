import styled from 'styled-components'
import { screenSizes } from '../../../../styles/theme'

export const BackgroundLayer = styled.div``

export const ShapeOne = styled.div`
  top: 90px;
    right: 200px;
  position: absolute;
  z-index: -1;
`

export const ShapeTwo = styled.div`
 top: 210px;
    left: 52%;
  position: absolute;
  z-index: -1;
  display: none;
  @media only screen and (min-width: ${screenSizes.M}px)
{
    display: block;
}
`

export const ShapeThree = styled.div`
 top: 40%;
    left: 170px;
  position: absolute;
  z-index: -1;
`
export const ShapeImage = styled.img``
