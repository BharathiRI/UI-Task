import { useState } from 'react'
import { DropDown } from '../../../../shared/dropdown/DropDown'
import { getImageUrl } from '../../../../shared/helpers/util'
import Dark from '../../../../assets/images/icons/dark.svg'
import Light from '../../../../assets/images/icons/light.svg'
import * as Styled from './style'
import { SideNav } from './sideNav/SideNav'
import { MobileNav } from './mobileNav/MobileNav'
import { useScreenSize } from '../../../../shared/hooks/useScreenSize'

export const ListArray = [
  {
    id: '1',
    text: 'Digital Agency',
    subMenus: ['Digital 1', 'Digital 2', 'Digital 3'],
  },
  {
    id: '2',
    text: 'Services',
    subMenus: ['Services 1', 'Services 2', 'Services 3'],
  },
  {
    id: '3',
    text: 'Portfolio',
    subMenus: ['Portfolio 1', 'Portfolio 2', 'Portfolio 3', 'Portfolio 4'],
  },
  {
    id: '4',
    text: 'Pages',
    subMenus: ['Pages 1', 'Pages 2', 'Pages 3', 'Pages 4'],
  },
  {
    id: '5',
    text: 'Blog',
    subMenus: ['Blog 1', 'Blog 2', 'Blog 3', 'Blog 4'],
  },
]

interface IProps {
  expand: boolean
  setExpand: any
}

/**
 *
 * @param expand - indicates it's open or not
 * @param setExpand - change the visibility
 * @returns Navbar for Desktop
 */

export const Navbar = ({ expand, setExpand }: IProps) => {
  const [dark, setDark] = useState<boolean>(false)

  const { matches: currentScreenSize, height: currentScreenHeight } = useScreenSize()
  // const {isStick,isMobile} = useScreenSize();

  console.log({ currentScreenSize, currentScreenHeight })

  const switchTheme = () => {
    let changeLocalTheme: string

    const Theme = localStorage.getItem('currentTheme')
    if (Theme === 'lightTheme') {
      changeLocalTheme = 'darkTheme'
    } else {
      changeLocalTheme = 'lightTheme'
    }
    localStorage.setItem('currentTheme', changeLocalTheme)
    setDark(!dark)
  }

  return (
    <>
      <Styled.NavbarBody sticky={currentScreenHeight >= 500 ? true : false}>
        {/* <Styled.NavbarBody sticky={isStick}> */}
        <Styled.NavbarContainer>
          <Styled.NavbarLeft>
            {/* <Styled.Image src={`${getImageUrl}/logo-3.svg`} alt="" />  */}
            <Styled.Image src={`${getImageUrl}/logo-2.svg`} alt="" />
          </Styled.NavbarLeft>
          <Styled.NavbarCenter>
            <DropDown List={ListArray} view="Desktop" />
          </Styled.NavbarCenter>
          <Styled.NavbarRight>
            <Styled.NavbarActions>
              <Styled.NavbarActionsList>
                <Styled.ActionButton bgColor="#ecf2f6" onClick={() => setExpand(!expand)}>
                  <Styled.Span></Styled.Span>
                  <Styled.Span></Styled.Span>
                  <Styled.Span></Styled.Span>
                </Styled.ActionButton>
                <Styled.ActionButton bgColor="#5956e9">
                  <Styled.Span2 onClick={() => switchTheme()}>
                    <Styled.ThemeImage src={dark ? Light : Dark} alt="img" />
                  </Styled.Span2>
                </Styled.ActionButton>
              </Styled.NavbarActionsList>
            </Styled.NavbarActions>
          </Styled.NavbarRight>
        </Styled.NavbarContainer>
      </Styled.NavbarBody>
      {currentScreenSize < 1024 && expand && <MobileNav expand={expand} setExpand={setExpand} />}
      {currentScreenSize >= 1024 && <SideNav expand={expand} setExpand={setExpand} />}
      {/* {(isMobile && expand) && <MobileNav expand={expand} setExpand={setExpand} /> }
    { !isMobile && <SideNav expand={expand} setExpand={setExpand} /> } */}
    </>
  )
}
