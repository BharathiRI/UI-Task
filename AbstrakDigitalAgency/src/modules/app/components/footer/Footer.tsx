import * as Styled from './style'
import fb from '../../../../assets/images/icons/fb.svg'
import behance from '../../../../assets/images/icons/behance.svg'
import dribble from '../../../../assets/images/icons/dribble.svg'
import instagram from '../../../../assets/images/icons/instagram.svg'
import linkedIn from '../../../../assets/images/icons/linkedIn.svg'
import pinInterest from '../../../../assets/images/icons/pinInterest.svg'
import twitter from '../../../../assets/images/icons/twitter.svg'
import vimeo from '../../../../assets/images/icons/vimeo.svg'
import MailBox from '../../../../assets/images/icons/mail.svg'
import { Button } from '../../../../shared/button/Button'


export const Footer = () => {
    const iconArray = [fb, behance, dribble, instagram, linkedIn, pinInterest, twitter, vimeo]
    const servicesArray = ["Design", "Development","Online Marketing", "Business", "Technology", "Content Strategy"];
    const resourcesArray = ["Blog","Case Studies", "Portfolio"];
    const supportsArray = ["Contact", "Private Policy", "Terms of Use"];
    
  return (
    <Styled.CardWrapper>
    <Styled.FooterBody>
        <Styled.FooterTop>
            <Styled.IconBox>
                {iconArray?.map((icon:any,index:number)=>(
                  <Styled.Icon key={index}>
                    <Styled.IconImage src={icon} alt="img" />
                  </Styled.Icon>
                ))}
            </Styled.IconBox>
        </Styled.FooterTop>
        <Styled.FooterCenter>
          <Styled.FooterCenterLeft>
            <Styled.Heading>
            Get in touch!
            </Styled.Heading>
            <Styled.Content>
            Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus
            </Styled.Content>
            <Styled.InputBox>
                <Styled.InputMain>
                <Styled.InputIcon src={MailBox} alt="img" />
                 <Styled.Input type="text" placeholder='Email'/>
                </Styled.InputMain>
                <Button type="submit" size='14px 30px' color='Yes' buttonText='Subscribe' />
            </Styled.InputBox>
          </Styled.FooterCenterLeft>
          <Styled.FooterCenterRight>
            <Styled.ListBox>
              <Styled.ListHeading>
                Services
              </Styled.ListHeading>
                 {servicesArray.map((service:string,index:number)=>(
              <Styled.List key={index}>
                   {service}
              </Styled.List>
                 ))}
            </Styled.ListBox>
            <Styled.ListBox>
              <Styled.ListHeading>
                Resources
              </Styled.ListHeading>
              {resourcesArray.map((resources:string,index:number)=>(
              <Styled.List key={index}>
                   {resources}
              </Styled.List>
                 ))}
            </Styled.ListBox>
            <Styled.ListBox>
              <Styled.ListHeading>
                Support
              </Styled.ListHeading>
              <Styled.List>
              {supportsArray.map((support:string,index:number)=>(
              <Styled.List key={index}>
                   {support}
              </Styled.List>
                 ))}
              </Styled.List>
            </Styled.ListBox>
          </Styled.FooterCenterRight>
        </Styled.FooterCenter>
        <Styled.FooterBottom>
          <Styled.List>© 2022. All rights reserved by Axilthemes.</Styled.List>
          <Styled.List>Privacy Policy  . Terms of Use</Styled.List>
        </Styled.FooterBottom>
    </Styled.FooterBody>
    </Styled.CardWrapper>
  )
}
