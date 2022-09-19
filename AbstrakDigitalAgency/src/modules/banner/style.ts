import styled from 'styled-components'
import { fadeInUp, slideInLeft, slideInRight, zoomIn } from '../../styles/styled'
import { screenSizes } from '../../styles/theme'

export const BannerWrapper = styled.div`
 position: relative;
 z-index: 1;
 min-height: 100%;
 
`

export const BannerBody = styled.div`
  display: grid;
  grid-template-columns: 12fr;
  margin: 0 auto;
  padding: 200px 15px 0;
  @media (min-width: ${screenSizes.XS}px) {
    max-width: 540px;
  }
  @media only screen and (min-width: ${screenSizes.S}px) {
    max-width: 720px;
  }
  @media only screen and (min-width: ${screenSizes.M}px) {
    max-width: 960px;
    grid-template-columns: 6fr 6fr;
  }
  @media only screen and (min-width: ${screenSizes.XL}px) {
    max-width: 1140px;
  }
  @media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`

export const BannerLeft = styled.div`
  max-width: 90%;
  margin-bottom: 100px;
  @media only screen and (min-width: ${screenSizes.S}px) {
    margin-bottom: none;
  }
`

export const AnimatedBox1 = styled.div`
  animation: ${fadeInUp} 5s;
`

export const AnimatedBox2 = styled.div`
  animation: ${zoomIn} 5s;
  transition: all 0.7s ease;
`

export const AnimatedBox3 = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  animation: ${slideInRight} 5s;
  transition: all 0.7 ease;
`

export const AnimatedBox4 = styled.div`
  animation: ${slideInLeft} 5s;
  transition: all 0.7s ease;
`
export const BannerHeading = styled.h1`
  line-height: 1;
  font-size: 40px;
  font-family: 'HelveticaSansBold';
  @media only screen and (min-width: ${screenSizes.S}px) {
    font-size: 55px;
  }
  @media only screen and (min-width: ${screenSizes.XL}px) {
    font-size: 60px;
  }
`

export const BannerContent = styled.p`
`

export const BannerRight = styled.div`
  position: relative;
  z-index: 5;
`

export const ImageBox1 = styled.div``

export const ImageBox2 = styled.div`
  margin-top: 0;
  text-align: center;
  bottom: 0;
  position: absolute;

  @media only screen and (min-width: ${screenSizes.S}px) {
    position: static;
    margin-top: -260px;
    margin-right: 0;
  }
  @media only screen and (min-width: ${screenSizes.M}px) {
    margin-top: -200px;
    margin-right: -30px;
  }
  @media only screen and (min-width: ${screenSizes.XL}px) {
    text-align: right;
    margin-top: -260px;
    margin-right: -50px;
  }
`

export const ImageBox3 = styled.div`
  z-index: -2;
  position: absolute;
  top: -25px;
  left: auto;
  right: 20px;
  display: none;
  @media only screen and (min-width: ${screenSizes.XL}px) {
    right: 0;
    display: block;
  }
`

export const Image = styled.img``


