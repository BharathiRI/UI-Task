import { withTheme, ThemeProps } from 'styled-components'
import { Footer } from '../app/components/footer/Footer'
import { Navbar } from '../app/components/navbar/Navbar'
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
//  Style
import * as Styled from './style'

/**
 * It merge all the sections of the website
 */

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  return (
      <Styled.HomeBody>
        <Navbar/>
        <Banner/>
        <Service/>
        <Contact/>
        <Projects/>
        <CaseStudy/>
        <Testimonial/>
        <PricePlans/>
        <Clients/>
        <Stories/>
        <Collabration/>
        <Footer/>
      </Styled.HomeBody>
  )
})
