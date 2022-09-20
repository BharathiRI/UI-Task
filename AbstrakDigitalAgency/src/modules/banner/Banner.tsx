import { Button } from '../../shared/button/Button'
import { getImageUrl } from '../../shared/helpers/util'
import { BackgroundLayer } from './components/backgroundLayer/BackgroundLayer'
import * as Styled from './style'

/**
 *
 * @returns Banner Section
 */

export const Banner = () => {
  return (
    <Styled.BannerWrapper>
      <Styled.BannerBody>
        <Styled.BannerLeft>
          <Styled.AnimatedBox1>
            <Styled.BannerHeading>Build beautiful website & mobile apps.</Styled.BannerHeading>
            <Styled.BannerContent>
              Create live segments and target the right people for messages based on their behaviors.
            </Styled.BannerContent>
            <Button
              type='button'
              size="20px 35px"
              color="#fff"
              bgColor="#5956e9"
              hoverBgColor="#2522ba"
              hoverColor="#fff"
              border="none"
              buttonText="Get Started"
              largeSize="28px 45px"
            />
          </Styled.AnimatedBox1>
        </Styled.BannerLeft>
        <Styled.BannerRight>
          <Styled.AnimatedBox2>
            <Styled.ImageBox1>
              <Styled.Image src={`${getImageUrl}/banner/window.png`} alt="" />
            </Styled.ImageBox1>
          </Styled.AnimatedBox2>
          <Styled.AnimatedBox3>
            <Styled.ImageBox2>
              <Styled.Image src={`${getImageUrl}/banner/laptop-poses.png`} alt="" />
            </Styled.ImageBox2>
          </Styled.AnimatedBox3>
          <Styled.ImageBox3>
            <Styled.AnimatedBox4>
              <Styled.Image src={`${getImageUrl}/banner/chat-group.png`} alt="" />
            </Styled.AnimatedBox4>
          </Styled.ImageBox3>
        </Styled.BannerRight>
        <BackgroundLayer />
      </Styled.BannerBody>
    </Styled.BannerWrapper>
  )
}
