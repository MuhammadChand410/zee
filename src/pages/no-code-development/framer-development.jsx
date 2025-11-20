import AnalysisSvg from "../../assets/icon/analysis-svg";
import { BuildIcon, DesiignIcon, DevelopIcon } from "../../assets/icon/define-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import ProcessIcon from "../../assets/icon/process-icon";
import SecondSvg from "../../assets/icon/second-svg";
import StrategryIcon from "../../assets/icon/strategy-icon";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function FramerDevelopment() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'SEO and analytics setup',
        },
        {
            id: 2,
            title: 'Framer website design & development',
        },
        {
            id: 3,
            title: 'Integration and hosting optimization',
        },
        {
            id: 4,
            title: 'Custom motion and interaction design',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Design and Build With Creative Fluidity and Speed',
            answer: 'Our Framer expertise ensures designs translate into immersive, animated experiences that captivate instantly and perform efficiently.'
        },
        {
            id: 2,
            question: 'We Combine Design Precision With Engineering Performance',
            answer: 'Our Framer expertise ensures designs translate into immersive, animated experiences that captivate instantly and perform efficiently.'
        },
        {
            id: 3,
            question: 'We Deliver Responsive Sites That Feel Effortlessly Dynamic',
            answer: 'Our Framer expertise ensures designs translate into immersive, animated experiences that captivate instantly and perform efficiently.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Plan',
            desc: 'Define brand goals, motion intent, and functional priorities for creative alignment.'
        },
        {
            id: 2,
            icon: DesiignIcon,
            icons: SecondSvg,
            title: 'Design',
            desc: 'Implement smooth animations, transitions, and page structures that reinforce storytelling.'
        },
    
        {
            id: 3,
            icon: DevelopIcon,
            icons: AnalysisSvg,
            title: 'Develop',
            desc: 'Build responsive Framer sites optimized for speed, and accessibility throughout.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Deliver',
            desc: 'Test, refine, and launch high-performing websites with integrated analytics tracking.'
        },
    ]
    return (
        <>
            <Services 
            heading="FRAMER DEVELOPMENT"
            desc="Transform Your Figma Designs Into Live, Responsive Websites With Structured Development, Pixel Accuracy, And Full Design Integrity."
            impact_heading="From Design to Fully Functional Reality"
            impact_desc="We bring your Figma designs to life using modern no-code tools. Our approach ensures pixel perfection, responsive design, and consistent brand execution across devices."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Figma Sites Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}