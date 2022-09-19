import styled from 'styled-components'
import { screenSizes } from '../../../../styles/theme'

export const BackgroundLayer = styled.div``

export const ShapeOne = styled.div`
  top: 140px;
  left: 315px;
  position: absolute;
  z-index: -1;
  img {
    opacity: 0.4;
    @media only screen and (min-width: ${screenSizes.M}px) {
      opacity: 1;
    }
  }
`

export const ShapeTwo = styled.div`
  top: 120px;
  right: 0;
  position: absolute;
  z-index: -1;
  img {
    opacity: 0.4;
    @media only screen and (min-width: ${screenSizes.M}px) {
      opacity: 1;
    }
  }
`
export const ShapeFour = styled.div`
  bottom: 60px;
  right: 230px;
  position: absolute;
  z-index: -1;
  img {
    opacity: 0.4;
    @media only screen and (min-width: ${screenSizes.M}px) {
      opacity: 1;
    }
  }
`

export const ShapeImage = styled.img``

export const ShapeThree = styled.div`
  bottom: 80px;
  left: 0;
  position: absolute;
  z-index: -1;
  img {
    opacity: 0.4;
    @media only screen and (min-width: ${screenSizes.M}px) {
      opacity: 1;
    }
  }
`