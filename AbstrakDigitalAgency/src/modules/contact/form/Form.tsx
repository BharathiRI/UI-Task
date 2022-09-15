import { Button } from "../../../shared/button/Button"
import { Input } from "../../../shared/input/Input"
import * as Styled from './style'

export const Form = () => {
  return (
    <Styled.Form>
        <Styled.FormTop>
          <Styled.FormHeading>
          Get a free Keystroke quote now
          </Styled.FormHeading>
        </Styled.FormTop>
        <Styled.FormBottom>
        <Styled.FormInputBox>
          <Input type="text" labelText="Name" placeholder="John Smith"/>
          <Input type="email" labelText="Email" placeholder="john@gmail.com" />
          <Input type="tel" labelText="Phone" placeholder="+253625634"/>                 
        </Styled.FormInputBox>
        <Button maxWidth="100%" type="submit" size="18px 55px" largeSize="23px 55px" color="Yes" buttonText="Get Free Quote"/>
        </Styled.FormBottom>
    </Styled.Form>
  )
}
