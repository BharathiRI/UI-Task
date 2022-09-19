import { Button } from "../../shared/button/Button"
import { Heading } from "../../shared/Heading/Heading"
import { getImageUrl } from "../../shared/helpers/util"
import { BackgroundLayer } from "./components/backgroundLayer/BackgroundLayer"
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
         <Button
                size="23px 55px"
                color="#0d6efd"
                bgColor="#fff"
                hoverBgColor='#ffdc60'
                hoverColor='#fff'
                border="none"
                buttonText="Estimate Project"
              />
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
      <BackgroundLayer/>
    </Styled.CardWrapper>
  )
}
