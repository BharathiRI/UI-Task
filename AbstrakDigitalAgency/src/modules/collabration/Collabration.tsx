import { Button } from "../../shared/button/Button"
import { Heading } from "../../shared/Heading/Heading"
import { getImageUrl } from "../../shared/helpers/util"
import * as Styled from './style'

export const Collabration = () => {
  return (
    <Styled.CardWrapper>
      <Styled.CollabrationBody>
      <Styled.CollabrationTop>
        <Heading
          align="center"
          colors="#fff"
          title="Let's work together"
          mainTitle="Need a successful project?"
         />
        <Button type="button" size='23px 55px' color='Yes' buttonText='Estimate Project' />
        </Styled.CollabrationTop>
        <Styled.CollabrationBottom>
           <Styled.CollabrationImageList1>
            <Styled.Image src={`${getImageUrl}\others/laptop-poses.png`} alt="" width="30%"/>
           </Styled.CollabrationImageList1>
           <Styled.CollabrationLargeImage>
          <Styled.Image src={`${getImageUrl}\others/chat-group.png`} alt="" width="50%"/>
          </Styled.CollabrationLargeImage>
           <Styled.CollabrationImageList2>
            <Styled.Image src={`${getImageUrl}\others/bill-pay.png`} alt="" width="30%" />
           </Styled.CollabrationImageList2>
        </Styled.CollabrationBottom>
      </Styled.CollabrationBody>
    </Styled.CardWrapper>
  )
}
