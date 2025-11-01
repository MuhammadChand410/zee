import AboutImage from "./aboout-image";
import AboutHero from "./about-hero";
import AboutMission from "./about-mission";
import Achivements from "./achivements";
import OurMission from "./our-mission";
import OurTeam from "./our-team";
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
      <OurTeam />
      <Achivements />
    </>
  )
}