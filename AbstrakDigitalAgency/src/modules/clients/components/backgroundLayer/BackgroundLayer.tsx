import { getImageUrl } from '../../../../shared/helpers/util'
import * as Styled from './style'

export const BackgroundLayer = () => {
  return (
    <Styled.BackgroundLayer>
    <Styled.ShapeOne>
    <Styled.ShapeImage src={`${getImageUrl}/others/line-9.png`} alt="" />
    </Styled.ShapeOne>
  </Styled.BackgroundLayer>
  )
}
