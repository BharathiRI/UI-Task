import {  useState } from 'react'
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
    subMenus: ["Digital 1", "Digital 2", "Digital 3"]
  },
  {
    id: '2',
    text: 'Services',
    subMenus: ["Services 1", "Services 2", "Services 3"]
  },
  {
    id: '3',
    text: 'Portfolio',
    subMenus: ["Portfolio 1", "Portfolio 2", "Portfolio 3", "Portfolio 4"]
  },
  {
    id: '4',
    text: 'Pages',
    subMenus: ["Pages 1", "Pages 2", "Pages 3", "Pages 4"]
  },
  {
    id: '5',
    text: 'Blog',
    subMenus: ["Blog 1", "Blog 2", "Blog 3", "Blog 4"]
  },
]


interface IProps{
  expand: boolean,
  setExpand: any;
}

export const Navbar = ({expand,setExpand}:IProps) => {

  const [dark,setDark] = useState<boolean>(false);
  
  const {matches:currentScreenWidth, height:currentScreenHeight} = useScreenSize();

  return (
    <>
    <Styled.NavbarBody sticky={currentScreenHeight>360?true:false}>
      <Styled.NavbarContainer>
        <Styled.NavbarLeft>
          {/* <Styled.Image src={`${getImageUrl}/logo-3.svg`} alt="" />  */}
          <Styled.Image src={`${getImageUrl}/logo-2.svg`} alt="" />
        </Styled.NavbarLeft>
        <Styled.NavbarCenter>
          <DropDown List={ListArray} view="Desktop"/>
        </Styled.NavbarCenter>
        <Styled.NavbarRight>
          <Styled.NavbarActions>
            <Styled.NavbarActionsList>
               <Styled.ActionButton bgColor="#ecf2f6" onClick={()=>setExpand(!expand)}>
                <Styled.Span></Styled.Span>
                <Styled.Span></Styled.Span>
                <Styled.Span></Styled.Span>
               </Styled.ActionButton>
               <Styled.ActionButton bgColor="#5956e9">
               <Styled.Span2 onClick={()=>setDark(!dark)}>
                <Styled.ThemeImage src={dark ? Light : Dark} alt="img" />
                </Styled.Span2>
               </Styled.ActionButton>
            </Styled.NavbarActionsList>
          </Styled.NavbarActions>
        </Styled.NavbarRight>
      </Styled.NavbarContainer>
    </Styled.NavbarBody>
    {((currentScreenWidth <= 992) && expand) && <MobileNav expand={expand} setExpand={setExpand} /> }
    {(currentScreenWidth > 992) && <SideNav expand={expand} setExpand={setExpand} /> }
    </>
  )
}
