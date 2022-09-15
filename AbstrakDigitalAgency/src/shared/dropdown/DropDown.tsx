import * as Styled from './style'
import DownArrow from '../../assets/images/icons/DownArrow.svg'

interface IProps{
    List: any;
}

export const DropDown = ({List}:IProps) => {
  return (
    <Styled.Dropdown>
        {
            List?.map((items:any)=>(
                <Styled.DropdownList>
                <Styled.DropdownTextBox>
                 <Styled.DropdownText>
                  {items.text}
                 </Styled.DropdownText>
                 <Styled.Image src={DownArrow} alt="" />
                </Styled.DropdownTextBox>
                <Styled.DropdownSubMenu>
                    {
                        items.subMenus?.map((menu:string)=>(
                            <Styled.DropdownSubMenuList>
                                <Styled.DropdownSubText>
                                {menu}
                                </Styled.DropdownSubText>
                            </Styled.DropdownSubMenuList>
                        ))
                    }
                   
                </Styled.DropdownSubMenu>
             </Styled.DropdownList>
            ))
        }
   
  </Styled.Dropdown>
  )
}
