import * as Styled from './style'
import CloseIcon from '../../../../../assets/images/icons/close.svg'
import TelIcon from '../../../../../assets/images/icons/tel.svg'
import PhoneIcon from '../../../../../assets/images/icons/phone.svg'

interface IProps{
    expand: boolean,
    setExpand: any;
}

export const SideNav = ({expand,setExpand}:IProps) => {

  const textArray = ['Digital Agency', 'Creative Agency', 'Portfolio Agency', 'Home Startup', 'Corporate Agency']
  const iconArray = []

  return (
    <Styled.SideNavBody expand={expand}>
      <Styled.SideNavInner>
        <Styled.SideNavHeader>
          <Styled.CloseButton onClick={()=>setExpand(false)}>
            <Styled.CloseIcon src={CloseIcon} alt="img" />
          </Styled.CloseButton>
        </Styled.SideNavHeader>
            <Styled.InputBox>
              <Styled.Input placeholder='Search...'/>
            </Styled.InputBox>
            <Styled.MainBox>
              <Styled.LeftBox>
                {textArray?.map((text: string, index: number) => (
                  <Styled.LeftBoxText key={index}>{text}</Styled.LeftBoxText>
                ))}
              </Styled.LeftBox>
              <Styled.RightBox>
                <Styled.Box>
                  <Styled.BoxHeading>Contact Information</Styled.BoxHeading>
                  <Styled.BoxText>Theodore Lowe, Ap #867-859 <br/>  Sit Rd, Azusa New York</Styled.BoxText>
                </Styled.Box>
                <Styled.Box>
                  <Styled.BoxHeading>We're Available 24/7. Call Now.</Styled.BoxHeading>
                  <Styled.AddressLine>
                    <Styled.AImage src={PhoneIcon} alt="img"/>
                     <Styled.BoxText>(888) 233-3243</Styled.BoxText>
                  </Styled.AddressLine>
                  <Styled.AddressLine>
                    <Styled.AImage src={TelIcon} alt="img"/>
                     <Styled.BoxText>(888) 233-3243</Styled.BoxText>
                  </Styled.AddressLine>
                </Styled.Box>
                <Styled.Box>
                  <Styled.BoxHeading>Find us here</Styled.BoxHeading>
                  <Styled.IconBox>
                    <Styled.Image src="" alt="" />
                  </Styled.IconBox>
                </Styled.Box>
              </Styled.RightBox>
            </Styled.MainBox>
      </Styled.SideNavInner>
    </Styled.SideNavBody>
  )
}
