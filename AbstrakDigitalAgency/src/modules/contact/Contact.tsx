import { Heading } from '../../shared/Heading/Heading'
import { Form } from './form/Form'
import * as Styled from './style'

export const Contact = () => {
  return (
    <Styled.ContactWrapper>
    <Styled.ContactBody>
      <Styled.ContactLeft>
        <Heading
          align="left"
          colors="#292930"
          title="About Us"
          mainTitle="We do design, code & develop."
          subTitle="Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed ligula commodo blandit in et mauris."
          subTitle2='Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed ligula commodo blandit in et mauris. Quisque efficitur ipsum ut dolor molestie pellentesque.'
        />
      </Styled.ContactLeft>
      <Styled.ContactRight>
        <Form />
      </Styled.ContactRight>
    </Styled.ContactBody>
    </Styled.ContactWrapper>
  )
}
