import { ReactNode } from 'react';
import * as Styled from './style'

interface Iprops{
    align: string,
    title: string,
    mainTitle: string | ReactNode,
    subTitle?: string,
    subTitle2? : string,
    colors: string,
    break?: string,
    width?: string
}

export const Heading = ({align,title,mainTitle,subTitle,subTitle2,colors,width}: Iprops) => {
    console.log({colors,align});
    
    return (
      <Styled.HeadingBody align={align} width={width? width: ""}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.MainTitle colors={colors}>{mainTitle}</Styled.MainTitle>
          <Styled.SubTitleBox>
          {subTitle ? <Styled.SubTitle>{subTitle}</Styled.SubTitle> : ""}
          {subTitle2 ? <Styled.SubTitle>{subTitle2}</Styled.SubTitle> : ""}
          </Styled.SubTitleBox>
      </Styled.HeadingBody>
    )
  }
  