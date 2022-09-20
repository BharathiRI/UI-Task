import { getImageUrl } from '../../../../shared/helpers/util'
import * as Styled from './style'

/**
 * @returns Background Image of Service section
 */

export const BackgroundLayer = () => {
  return (
    <Styled.BackgroundLayer>
      <Styled.ShapeOne>
        <Styled.ShapeImage src={`${getImageUrl}/others/line-9.png`} alt="" />
      </Styled.ShapeOne>
      <Styled.ShapeTwo>
        <Styled.ShapeImage src={`${getImageUrl}/others/bubble-42.png`} alt="" />
      </Styled.ShapeTwo>
      <Styled.ShapeThree>
        <Styled.ShapeImage src={`${getImageUrl}/others/bubble-43.png`} alt="" />
      </Styled.ShapeThree>
    </Styled.BackgroundLayer>
  )
}
