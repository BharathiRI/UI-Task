import * as Styled from './style'

interface IProps{
    List: any;
    view: string;
}

export const DropDown = ({List, view}:IProps) => {
  return (
    <Styled.Dropdown view={view}>
        {
            List?.map((items:any,index:number)=>(
                <Styled.DropdownList view={view} key={index}>
                <Styled.DropdownTextBox view={view}>
                 <Styled.DropdownText>
                  {items.text}
                 </Styled.DropdownText>
                 <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>                </Styled.DropdownTextBox>
                <Styled.DropdownSubMenu view={view}>
                    {
                        items.subMenus?.map((menu:string,index:number)=>(
                            <Styled.DropdownSubMenuList view={view} key={index}>
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
