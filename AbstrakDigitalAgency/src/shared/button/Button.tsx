import * as Styled from './style'

interface Iprops {
  type?: string
  buttonText: string
  size: string
  largeSize?: string
  color: string
  maxWidth?: string
  bgColor: string
  border: string
  hoverBgColor: string
  hoverColor: string
}
export const Button = ({ buttonText, size, color, type, largeSize, maxWidth, bgColor, border,hoverBgColor,hoverColor }: Iprops) => {
  return (
    <Styled.Button
      maxWidth={maxWidth}
      type={type ? type : "button"}
      largeSize={largeSize}
      size={size}
      color={color}
      bgColor={bgColor}
      border={border}
      hoverBgColor={hoverBgColor}
      hoverColor={hoverColor}
    >
      {buttonText}
    </Styled.Button>
  )
}
