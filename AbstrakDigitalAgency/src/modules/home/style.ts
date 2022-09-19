import styled from 'styled-components'
interface IProps {
  expand: boolean
}
export const HomeBody = styled.div`
`
export const FadeLayer = styled.div<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.expand ? '0.5' : '0')};
  z-index: 1040;
  width: 100vw;
  background-color: #000;
  transition: opacity 0.15s linear;
  pointer-events: none;
`

export const ThemeSwitchBox = styled.div`
  position: fixed;
  top: 200px;
  left: 0;
  background-color: #5956e9;
  border-radius: 0 30px 30px 0;
  padding: 10px;
  z-index: 5;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
`

export const Span = styled.span`
  padding: 0;
  text-align: center;
  color: #fff;
  background-color: transparent;
  font-size: 18px;
  height: 40px;
  width: 40px;
  line-height: 36px;
  border: 1px solid transparent;
  border-radius: 50%;
`

export const Image = styled.img`
  width: 60%;
  height: 60%;
  margin: 0 auto;
`
