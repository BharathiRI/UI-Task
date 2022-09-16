import { useState } from 'react'
import { withTheme, ThemeProps } from 'styled-components'
import { Footer } from '../app/components/footer/Footer'
import { MobileNav } from '../app/components/navbar/mobileNav/MobileNav'
import { Navbar } from '../app/components/navbar/Navbar'
import { SideNav } from '../app/components/navbar/sideNav/SideNav'
import { Banner } from '../banner/Banner'
// Components
import { CaseStudy } from '../casestudy/CaseStudy'
import { Clients } from '../clients/Clients'
import { Collabration } from '../collabration/Collabration'
import { Contact } from '../contact/Contact'
import { PricePlans } from '../pricePlans/PricePlans'
import { Projects } from '../projects/Projects'
import { Service } from '../service/Service'
import { Stories } from '../stories/Stories'
import { Testimonial } from '../testimonial/Testimonial'
import Dark from '../../assets/images/icons/dark.svg'
//  Style
import * as Styled from './style'

/**
 * It merge all the sections of the website
 */

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <>
    {expand && <Styled.FadeLayer expand={expand}></Styled.FadeLayer> }
      <Styled.ThemeSwitchBox>
        <Styled.ThemeButton>
          <Styled.Span>
            <Styled.Image src={Dark} alt="" />
          </Styled.Span>
        </Styled.ThemeButton>
      </Styled.ThemeSwitchBox>
      <Styled.HomeBody>
        <Navbar expand={expand} setExpand={setExpand}/>
        <Banner />
        <Service />
        <Contact />
        <Projects />
        <CaseStudy />
        <Testimonial />
        <PricePlans />
        <Clients />
        <Stories />
        <Collabration />
        <Footer />
      </Styled.HomeBody>
    </>
  )
})
