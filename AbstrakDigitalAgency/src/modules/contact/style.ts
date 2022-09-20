import styled from 'styled-components'
import { gapSizes, screenSizes } from '../../styles/theme'

export const ContactWrapper = styled.div`
  background-color: #ecf2f6;
  position: relative;
  z-index: 1;
`

export const ContactBody = styled.div`
  display: grid;
  grid-template-columns: 12fr;
  padding: 60px 15px 0;
  margin: 0 auto;
  @media (min-width: ${screenSizes.XS}px) {
    max-width: 540px;
  }
  @media only screen and (min-width: ${screenSizes.S}px) {
    max-width: 720px;
    padding: 80px 15px;
  }
  @media only screen and (min-width: ${screenSizes.M}px) {
    max-width: 960px;
    grid-template-columns: 6fr 6fr;
    padding: 100px 15px;
  }
  @media only screen and (min-width: ${screenSizes.XL}px) {
    max-width: 1140px;
    padding: 140px 15px;
  }
  @media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`

export const ContactLeft = styled.div``

export const ContactRight = styled.div`
  @media (min-width: ${screenSizes.S}px) {
    margin-left: ${gapSizes.M};
  }
  @media (min-width: ${screenSizes.XL}px) {
    justify-self: right;
  }
  @media (min-width: ${screenSizes.XXL}px) {
    justify-self: center;
  }
`
