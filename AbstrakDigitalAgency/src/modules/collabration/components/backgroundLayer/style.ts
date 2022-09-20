import styled from 'styled-components'
import { screenSizes } from '../../../../styles/theme'
import { movingleftright1, movingleftright2, movingleftright3 } from '../../../../styles/styled'

export const BackgroundLayer = styled.div``

export const ShapeOne = styled.div`
  top: 0;
  left: 32%;
  position: absolute;
  z-index: -1;
`

export const ShapeTwo = styled.div`
  top: 180px;
  left: 18%;
  opacity: 0.5;
  animation: ${movingleftright1} 20s infinite;
  position: absolute;
  z-index: -1;
`

export const ShapeThree = styled.div`
  top: 31%;
  left: 20%;
  animation: ${movingleftright2} 25s infinite;
  position: absolute;
  z-index: -1;
`

export const ShapeFour = styled.div`
  top: 44%;
  left: 28%;
  animation: ${movingleftright1} 25s infinite;
  position: absolute;
  z-index: -1;
`

export const ShapeFive = styled.div`
  top: 50%;
  left: 17%;
  animation: ${movingleftright2} 30s infinite;
  position: absolute;
  z-index: -1;
`

export const ShapeSix = styled.div`
  top: 26%;
  right: 21%;
  animation: ${movingleftright3} 30s infinite;
  position: absolute;
  z-index: -1;
  display: none;

  @media only screen and (min-width: ${screenSizes.XL}px) {
    display: block;
  }
`

export const ShapeSeven = styled.div`
  top: 30%;
  right: 15%;
  animation: ${movingleftright1} 30s infinite;
  position: absolute;
  z-index: -1;
`

export const ShapeImage = styled.img``
