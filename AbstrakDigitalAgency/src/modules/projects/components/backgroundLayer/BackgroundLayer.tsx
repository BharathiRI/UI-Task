import { getImageUrl } from '../../../../shared/helpers/util'
import * as Styled from './style'

/**
 *
 * @returns Background Image of Projects section
 */

export const BackgroundLayer = () => {
  return (
    <Styled.BackgroundLayer>
      <Styled.ShapeOne>
        <Styled.ShapeImage src={`${getImageUrl}/others/circle-2.png`} alt="" />
      </Styled.ShapeOne>
      <Styled.ShapeTwo>
        <Styled.ShapeImage src={`${getImageUrl}/others/bubble-2.png`} alt="" />
      </Styled.ShapeTwo>
      <Styled.ShapeThree>
        <Styled.ShapeImage src={`${getImageUrl}/others/bubble-1.png`} alt="" />
      </Styled.ShapeThree>
    </Styled.BackgroundLayer>
  )
}
