
import Advantage from "./advantage";
import BlogsSection from "./blogs-section";
import ContactUs from "./contact-us";
import FrameHome from "./frame-home";
import HeroSectin from "./hero";
import NoiseEffect from "./noise-effect";
import ServicesSection from "./services-home";
import SuccessStories from "./success-stories";
import VideoSection from "./video";


export default function Home() {
    return (
        <>
            <HeroSectin />
            <VideoSection />
            <ServicesSection />
            <Advantage />
            <SuccessStories />
            <NoiseEffect />
            <FrameHome />
            <BlogsSection />
            <ContactUs />
        </>
    )
}