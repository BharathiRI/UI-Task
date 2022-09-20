import * as Styled from './style'

interface Iprops {
  labelText: string
  type: string
  placeholder: string
}

/**
 *
 * @param params We can customize that by using it
 * @returns Input field
 */

export const Input = ({ labelText, type, placeholder }: Iprops) => {
  return (
    <Styled.InputWrapper>
      <Styled.Label>{labelText}</Styled.Label>
      <Styled.Input type={type} placeholder={placeholder} />
    </Styled.InputWrapper>
  )
}
