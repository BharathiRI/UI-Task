import * as Styled from './style'

interface Iprops{
    type?: string | undefined,
    buttonText: string
    size: string
    largeSize?: string
    color: string
    maxWidth?: string
}
export const Button = ({buttonText, size, color, type,largeSize,maxWidth}: Iprops) => {
  return (
    <Styled.Button maxWidth={maxWidth} type={type} largeSize={largeSize} size={size} color={color}>{buttonText}</Styled.Button>
  )
}
