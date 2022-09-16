import { createGlobalStyle, ThemeProps, css } from 'styled-components'
import { fontSizes, gapSizes, screenSizes, Theme } from './theme'
import NunitoSans from '../assets/fonts/NunitoSans/NunitoSans-Regular.ttf'
import NunitoSansBlack from '../assets/fonts/NunitoSans/NunitoSans-Black.ttf'
import NunitoSansLight from '../assets/fonts/NunitoSans/NunitoSans-Light.ttf'
import NunitoSansBold from '../assets/fonts/NunitoSans/NunitoSans-Bold.ttf'
import NunitoSansExtraBold from '../assets/fonts/NunitoSans/NunitoSans-ExtraBold.ttf'
import NunitoSansSemiBold from '../assets/fonts/NunitoSans/NunitoSans-SemiBold.ttf'

import { rgba } from 'polished'

export const LinkStyle = css`
  color: ${(props) => props.theme.accent};
  cursor: pointer;
`

export const GlobalStyle = createGlobalStyle`
  :root{
    transition: margin 300ms ease-in-out;
    --pageMargin: 80px;
    @media (max-width: ${screenSizes.L}px) {
      --pageMargin: 40px;
    }
    @media (max-width: ${screenSizes.M}px) {
      --pageMargin: 20px;
    }
  }
  @font-face {
    font-family: NunitoSans;
    src: url(${NunitoSans});
  } 
  @font-face {
    font-family: NunitoSansSemiBold;
    src: url(${NunitoSansSemiBold});
  } 
  @font-face {
    font-family: NunitoSansBlack;
    src: url(${NunitoSansBlack});
  }
  @font-face {
    font-family: NunitoSansBold;
    src: url(${NunitoSansBold});
  }
  @font-face {
    font-family: NunitoSansExtraBold;
    src: url(${NunitoSansExtraBold});
  }
  @font-face {
    font-family: NunitoSansLight;
    src: url(${NunitoSansLight});
  }
  address, blockquote, h1, h2, h3, h4, h5, h6, hr, p, pre, table {
    margin: 0 0 30px;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    line-height: 1.2;
      letter-spacing: -.025em;
  }
 }
  h2{
   font-size: calc(1.325rem + .9vw);
    @media (max-width: ${screenSizes.XS})
 h2 {
    font-size: 34px;
}
    @media (max-width: ${screenSizes.S})
  h2 {
    font-size: 38px;
}
@media (max-width: ${screenSizes.XL})
  h2 {
    font-size: 56px;
}
  }
  h3{
    font-size: 32px;
    @media only screen and (max-width: ${screenSizes.S}) {
    font-size: 36px;
}
    @media only screen and (max-width: ${screenSizes.XL})
 {
    font-size: 36px;
}
@media only screen and (max-width: ${screenSizes.XL})
 {
    font-size: 40px;
}
  }
 h4{
  font-size: calc(1.275rem + .3vw);

  @media only screen and (max-width: ${screenSizes.S})
 h4 {
    font-size: 20px;
}
@media only screen and (${screenSizes.XL})
 h4 {
    font-size: 26px;
}
 }
 h5{
  line-height: 1.4;
  font-size: 24px;
  media only screen and (max-width: ${screenSizes.S})
  h5 {
    font-size: 20px;
}
 }
 h6{
   font-size: 18px;
    line-height: 1.2;
    media only screen and (max-width: ${screenSizes.S})
  h5 {
    font-size: 20px;
}
 }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // background-color: ${(props) => props.theme.primary};
  }
  html,
  body {
    font-size: 16px;
    height: 100%;
    scroll-behavior: smooth;
    width: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    // background-color: ${(props: ThemeProps<Theme>) => props.theme.secondary};
  }
  *::-webkit-scrollbar {
    width: 12px;
    background-color: ${rgba(81, 111, 119, 0.101961)};
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    background-color: #9CA6AD;
    border-radius: 20px;
    background-clip: content-box;
  }
  #root{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    max-width: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: NunitoSans;
  }
  a{
    font-family: 'NunitoSansSemiBold';
    text-decoration: none;
    color: ${(props: ThemeProps<Theme>) => props.theme.white};
  }
  label {
    font-size: ${fontSizes.XS}
    position: relative;
    color: ${(props) => props.theme.label};
  }
  input{
    height: 60px;
  }
  input:disabled ~ label{
   color: red;
  }
  input:focus{
    outline:none;
   }
  input[type="checkbox"] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  -ms-appearance: radio; 
  }
  
  button {
    font-size: 16px;
    margin: 0;
    padding: 8px 12px;
    cursor: pointer;
  }
  hr {
    background-color: ${(props) => rgba(props.theme.white, 0.2)};
    border: 0;
  }
  a {
    ${LinkStyle};
  }
  a.disabled {
    pointer-events: none;
  }
  img{
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
  svg{
    vertical-align: middle;
    overflow: visible;
    + span {
      margin-left: ${gapSizes.S};
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
