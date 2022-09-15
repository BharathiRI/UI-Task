import * as Styled from './style';

interface Iprops{
    labelText: string;
     type: string;
     placeholder: string;
}

export const Input= ({labelText,type,placeholder}: Iprops) => {
  return (
    <Styled.InputWrapper>
      <Styled.Label>{labelText}</Styled.Label>
      <Styled.Input type={type} placeholder={placeholder} />
    </Styled.InputWrapper>
  )
}
