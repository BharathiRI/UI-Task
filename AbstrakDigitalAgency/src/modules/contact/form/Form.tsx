import { Button } from "../../../shared/button/Button"
import { Input } from "../../../shared/input/Input"
import * as Styled from './style'

/**
 * @returns Contact form
 */

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
        <Button
                type="submit"
                size="18px 55px"
                largeSize="23px 55px"
                color="#fff"
                bgColor="#5956e9"
                hoverBgColor='#2522ba'
                hoverColor='#fff'
                border="none"
                buttonText="Get Free Quote"
                maxWidth="100%"
              />
        </Styled.FormBottom>
    </Styled.Form>
  )
}
