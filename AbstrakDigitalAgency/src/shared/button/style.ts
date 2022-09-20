import styled from 'styled-components'
import { screenSizes } from '../../styles/theme'
import { PricePlansCard } from '../../modules/pricePlans/components/card/style'

interface IProps {
  size: string
  color: string
  bgColor: string
  border: string
  largeSize?: string
  maxWidth?: string
  hoverBgColor: string
  hoverColor: string
}

export const Button = styled.button<IProps>`
  position: relative;
  z-index: 1;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.04em;
  padding: ${(props) => props.size};
  height: auto;
  text-align: center;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.bgColor === 'transparent' ? '#99a1aa' : props.bgColor)};
  width: ${(props) => (props.maxWidth ? props.maxWidth : 'none')};
  transition: transform 2s cubic-bezier(0.2, 0.96, 0.34, 1);
  overflow: hidden;
  &::after {
    position: absolute;
    content: '';
    height: 300px;
    width: 300px;
    background-color: ${(props) => (props.bgColor === '#fff' ? 'transparent' : props.bgColor)};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0);
    transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: -1;
  }
  @media only screen and (min-width: ${screenSizes.M}px) {
    padding: ${(props) => (props.largeSize ? props.largeSize : props.size)};
  }
  :hover {
    background-color: ${(props) => props.hoverBgColor};
    border-color: ${(props) => props.hoverBgColor};
    color: ${(props) => props.hoverColor};
    &::after {
      transform: translateY(-50%) translateX(-50%) scale(1.3);
    }
  }
  ${PricePlansCard}:hover & {
    background-color: #ffdc60;
    border-color: #ffdc60;
    color: #fff;
  }
`
