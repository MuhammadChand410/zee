import AboutImage from "./aboout-image";
import AboutHero from "./about-hero";
import AboutMission from "./about-mission";
import OurMission from "./our-mission";
import WhoAbout from "./who-about";
import WhoAreSection from "./who-are-images";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <AboutImage />
      <WhoAbout />
      <AboutMission/>
      <WhoAreSection/>
      <OurMission/>
    </>
  )
}