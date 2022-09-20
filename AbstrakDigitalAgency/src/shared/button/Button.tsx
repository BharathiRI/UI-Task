import * as Styled from './style'

interface Iprops {
  type: 'button' | 'submit'
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

/**
 * This is shared button so that we can customize it
 * @returns Button
 */

export const Button = ({
  buttonText,
  size,
  color,
  type,
  largeSize,
  maxWidth,
  bgColor,
  border,
  hoverBgColor,
  hoverColor,
}: Iprops) => {
  return (
    <Styled.Button
      type={type}
      maxWidth={maxWidth}
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
