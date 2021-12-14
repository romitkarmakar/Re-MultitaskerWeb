import About from "../components/about-us/about-us";
import FAQ from "../components/faq/faq";
import Testimonials from "../components/testimonials/testimonials";
import Work from "../components/work/work";
import Partners from "../components/partners/partners";
import MobileApp from "../components/mobile-app/mobile-app";
import Badges from "../components/badges/badges";

export default function Home () {
 return(
    <>
    <Work />
    <Badges/>
    <Partners />
    <About/>
    <Testimonials />
    <FAQ />
    <MobileApp />
    </>
 )   
}