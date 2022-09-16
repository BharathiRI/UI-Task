import { Button } from '../../shared/button/Button'
import { getImageUrl } from '../../shared/helpers/util'
import * as Styled from './style'

export const Banner = () => {
  return (
    <Styled.BannerWrapper>
    <Styled.BannerBody>
      <Styled.BannerLeft>
        <Styled.AnimatedBox1>
       <Styled.BannerHeading>
       Build beautiful website & mobile apps.
       </Styled.BannerHeading>
       <Styled.BannerContent>
       Create live segments and target the right people for messages based on their behaviors.
       </Styled.BannerContent>
       <Button
                size="20px 35px"
                color="#fff"
                bgColor="#5956e9"
                hoverBgColor='#2522ba'
                hoverColor='#fff'
                border="none"
                buttonText="Get Started"
                largeSize='28px 45px' 
              />
       </Styled.AnimatedBox1>
      </Styled.BannerLeft>
      <Styled.BannerRight>
        <Styled.AnimatedBox2>
            <Styled.ImageBox1>
                <Styled.Image width="100%" src={`${getImageUrl}/banner/window.png`} alt="" />
            </Styled.ImageBox1>
        </Styled.AnimatedBox2> 
        <Styled.AnimatedBox3>
            <Styled.ImageBox1>
                <Styled.Image width="80%" src={`${getImageUrl}/banner/laptop-poses.png`} alt="" />
            </Styled.ImageBox1>
        </Styled.AnimatedBox3> 
      </Styled.BannerRight>
    </Styled.BannerBody>
    </Styled.BannerWrapper>
  )
}
