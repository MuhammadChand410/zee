import ContactUs from "../../component/common/header/contact-us";
import HorizontalScrolling from "./horizontal-scrolling";
import InsightHero from "./insight-hero";
import LargeBlog from "./large-blog";
import MainContainer from "./main-container";

export default function Insights(){
    return(
        <>
        <InsightHero/>
        <LargeBlog />
        <HorizontalScrolling />
        <MainContainer/>
        <ContactUs/>
        </>
    )
}