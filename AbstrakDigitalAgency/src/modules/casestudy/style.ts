import styled from 'styled-components'
import { screenSizes } from '../../styles/theme'

export const CardWrapper = styled.div`
  background-color: #27272e;
`

export const CaseStudyBody = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding: 60px 15px 20px;
  max-width: 540px;
  margin: 0 auto;

  @media only screen and (min-width: ${screenSizes.S}px) {
    max-width: 720px;
    padding: 80px 15px 40px;
  }
  @media only screen and (min-width: ${screenSizes.M}px) {
    max-width: 960px;
    padding: 100px 15px 60px;
  }
  @media only screen and (min-width: ${screenSizes.XL}px) {
    max-width: 1140px;
    padding: 140px 15px 100px;
  }
  @media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`

export const HeadingContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2%;
  row-gap: 40px;
  @media (min-width: ${screenSizes.L}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
