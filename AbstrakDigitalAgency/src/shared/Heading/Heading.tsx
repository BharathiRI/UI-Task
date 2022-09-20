import { ReactNode } from 'react'
import * as Styled from './style'

interface Iprops {
  align: string
  title: string
  mainTitle: string | ReactNode
  subTitle?: string
  subTitle2?: string
  colors: string
  width?: string
  subColor?: string
}

/**
 *
 * @param params - By using this params we can customize it
 * @returns Header of each session
 */

export const Heading = ({ align, title, mainTitle, subTitle, subTitle2, colors, width, subColor }: Iprops) => {
  return (
    <Styled.HeadingBody align={align} width={width ? width : ''}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.MainTitle colors={colors}>{mainTitle}</Styled.MainTitle>
      <Styled.SubTitleBox>
        {subTitle ? <Styled.SubTitle subColor={subColor? subColor : ""}>{subTitle}</Styled.SubTitle> : ''}
        {subTitle2 ? <Styled.SubTitle subColor={subColor? subColor : ""}>{subTitle2}</Styled.SubTitle> : ''}
      </Styled.SubTitleBox>
    </Styled.HeadingBody>
  )
}
