import { DropDown } from "../../../../../shared/dropdown/DropDown"
import { getImageUrl } from "../../../../../shared/helpers/util"
import CloseIcon from '../../../../../assets/images/icons/close.svg'
import { ListArray } from "../Navbar"
import * as Styled from './style'

interface IProps{
  expand: boolean,
  setExpand: any;
}

export const MobileNav = ({expand,setExpand}:IProps) => {
   
  return (
    <Styled.MobileNavBody expand={expand} >
      <Styled.MobileNavInner>
        <Styled.MobileNavHeader>
          <Styled.MobileNavLogo>
            <Styled.Image src={`${getImageUrl}/logo-2.svg`} alt="img" />
          </Styled.MobileNavLogo>
          <Styled.CloseButton onClick={()=>setExpand(false)}>
            <Styled.CloseIcon src={CloseIcon} alt="img" />
          </Styled.CloseButton>
        </Styled.MobileNavHeader>
        <Styled.MobileMenuBody>
          <Styled.MobileMenuInner>
            <DropDown List={ListArray} view="Mobile"/>
          </Styled.MobileMenuInner>
        </Styled.MobileMenuBody>
      </Styled.MobileNavInner>
    </Styled.MobileNavBody>
  )
}
