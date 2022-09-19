import { getImageUrl } from '../../../../shared/helpers/util'
import * as Styled from './style'

export const BackgroundLayer = () => {
  return (
    <Styled.BackgroundLayer>
    <Styled.ShapeOne>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-12.png`} alt="" />
    </Styled.ShapeOne>
    <Styled.ShapeTwo>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-16.png`} alt="" />
    </Styled.ShapeTwo>
    <Styled.ShapeThree>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-13.png`} alt="" />
    </Styled.ShapeThree>
    <Styled.ShapeFour>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-14.png`} alt="" />
    </Styled.ShapeFour>
    <Styled.ShapeFive>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-16.png`} alt="" />
    </Styled.ShapeFive>
    <Styled.ShapeSix>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-15.png`} alt="" />
    </Styled.ShapeSix>
    <Styled.ShapeSeven>
    <Styled.ShapeImage src={`${getImageUrl}/others/bubble-16.png`} alt="" />
    </Styled.ShapeSeven>
  </Styled.BackgroundLayer>
  )
}
