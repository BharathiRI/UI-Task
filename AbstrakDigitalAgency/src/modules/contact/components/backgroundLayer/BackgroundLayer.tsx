import { getImageUrl } from '../../../../shared/helpers/util'
import * as Styled from './style'

export const BackgroundLayer = () => {
  return (
    <Styled.BackgroundLayer>
    <Styled.ShapeOne>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-7.png`} alt="" />
    </Styled.ShapeOne>
    <Styled.ShapeTwo>
    <Styled.ShapeImage src={`${getImageUrl}/others/line-4.png`} alt="" />
    </Styled.ShapeTwo>
    <Styled.ShapeThree>
    <Styled.ShapeImage src={`${getImageUrl}/others/line-5.png`} alt="" />
    </Styled.ShapeThree>
  </Styled.BackgroundLayer>
  )
}
