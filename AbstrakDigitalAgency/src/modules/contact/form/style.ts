import styled from 'styled-components'
import { gapSizes, screenSizes } from '../../../styles/theme'

export const Form = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 40px 30px;
  margin-bottom: 20px;

  @media (min-width: ${screenSizes.S}px) {
    padding: 50px;
    margin-bottom: 0;
  }
`

export const FormTop = styled.div``

export const FormHeading = styled.h3`
  font-size: 28px;
  margin-bottom: ${gapSizes.M};
`

export const FormBottom = styled.form``

export const FormInputBox = styled.div`
  margin-bottom: 40px;
`
