import { getImageUrl } from '../../../../shared/helpers/util'
import * as Styled from './style'

export const BackgroundLayer = () => {
  return (
    <Styled.BackgroundLayer>
    <Styled.ShapeOne>
    <Styled.ShapeImage src={`${getImageUrl}/others/line-1.png`} alt="" />
    </Styled.ShapeOne>
    <Styled.ShapeTwo>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-4.png`} alt="" />
    </Styled.ShapeTwo>
  </Styled.BackgroundLayer>
  )
}
