import styled from 'styled-components'
import { screenSizes } from '../../../../styles/theme'
import { movingleftright1, movingleftright3 } from '../../../../styles/styled'

export const BackgroundLayer = styled.div``

export const ShapeOne = styled.div`
  top: 0%;
  left: 0;
  position: absolute;
  z-index: -1;

  img {
    width: 60%;
    @media only screen and (min-width: ${screenSizes.M}px) {
      width: auto;
    }
  }
`

export const ShapeTwo = styled.div`
  top: 200px;
  right: 200px;
  text-align: right;
  position: absolute;
  z-index: -1;
  display: none;
  @media only screen and (min-width: ${screenSizes.XL}px) {
    display: block;
    right: 15px;
  }
`

export const ShapeThree = styled.div`
  right: 100px;
  top: 45%;
  height: 53px;
  width: 53px;
  position: absolute;
  z-index: -1;
`

export const ShapeFour = styled.div`
  left: 220px;
  top: 45%;
  height: 20px;
  width: 20px;
  animation: ${movingleftright1} 25s infinite;
  position: absolute;
  z-index: -1;
`

export const ShapeFive = styled.div`
  left: 45%;
  bottom: 130px;
  height: 20px;
  width: 20px;
  animation: ${movingleftright3} 20s infinite;
  position: absolute;
  z-index: -1;
`

export const ShapeSix = styled.div`
  right: 230px;
  bottom: 40%;
  height: 20px;
  width: 20px;
  position: absolute;
  z-index: -1;
  display: none;

  @media only screen and (min-width: ${screenSizes.XL}px) {
    display: block;
  }
`

export const ShapeSeven = styled.div`
  right: 250px;
  top: 40%;
  height: 20px;
  width: 20px;
  position: absolute;
  z-index: -1;
  display: none;
  @media only screen and (min-width: ${screenSizes.XL}px) {
    display: block;
  }
`

export const ShapeImage = styled.img``
