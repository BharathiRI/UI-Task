import styled from 'styled-components'
import { screenSizes } from '../../styles/theme'

interface IActive {
  active: boolean
}

export const CardWrapper = styled.div`
  background-color: #ecf2f6;
  position: relative;
  z-index: 1;
`
export const PricePlansBody = styled.div`
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

export const BillPlanBox = styled.ul`
  list-style: none;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #e3e6e9;
  border-radius: 110px;
  width: auto;
  margin: 0 auto 60px;
`

export const BillBox = styled.li`
  margin-right: 10px;
`

export const BillButton = styled.button<IActive>`
  color: ${(props) => (props.active ? '#fff' : '#292930')};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.025em;
  background-color: ${(props) => (props.active ? '#5956e9' : 'transparent')};
  border: none;
  border-radius: 60px;
  display: block;
  text-decoration: none;
  padding: 12px 25px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  @media only screen and (min-width: ${screenSizes.XS}px) {
    font-size: 18px;
    padding: 14px 30px;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  @media (min-width: ${screenSizes.M}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
