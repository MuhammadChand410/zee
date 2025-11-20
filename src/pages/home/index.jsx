
import ContactUs from "../../component/common/header/contact-us";
import CursorGlow from "../../component/common/header/curser-glow";
import Advantage from "./advantage";
import BlogsSection from "./blogs-section";
import FrameHome from "./frame-home";
import HeroSectin from "./hero";
import NoiseEffect from "./noise-effect";
import ServicesSection from "./services-home";
import SuccessStories from "./success-stories";
import VideoSection from "./video";


export default function Home() {
    return (
        <>
            <CursorGlow className="relative min-h-screen bg-[#0a0a0a] text-white" />
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