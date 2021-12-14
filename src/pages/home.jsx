import About from "../components/about-us/about-us";
import FAQ from "../components/faq/faq";
import Testimonials from "../components/testimonials/testimonials";
import Work from "../components/work/work";
import Partners from "../components/partners/partners";
import MobileApp from "../components/mobile-app/mobile-app";
import Badges from "../components/badges/badges";
import Howitworks from "../components/how-it-works/how-it-works";

export default function Home () {
 return(
    <>
    <Work />
    <Howitworks/>
    <Badges/>
    <Partners />
    <About/>
    <Testimonials />
    <FAQ />
    <MobileApp />
    </>
 )   
}