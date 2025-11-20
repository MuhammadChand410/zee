import AnalysisSvg from "../../assets/icon/analysis-svg";
import { BuildIcon } from "../../assets/icon/define-icon";
import DeliverIcon from "../../assets/icon/deliver-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import ProcessIcon from "../../assets/icon/process-icon";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function FigmaSites() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Responsive design implementation',
        },
        {
            id: 2,
            title: 'Figma-to-Webflow/Framer conversion',
        },
        {
            id: 3,
            title: 'Visual and interaction consistency',
        },
        {
            id: 4,
            title: 'Speed and accessibility optimization',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Maintain Design Accuracy Across Every Pixel and Device',
            answer: 'Your design vision stays intact — we convert without compromise, ensuring seamless alignment between Figma and final output.'
        },
        {
            id: 2,
            question: 'We Enhance Designs for Performance and Scalability',
            answer: 'Your design vision stays intact — we convert without compromise, ensuring seamless alignment between Figma and final output.'
        },
        {
            id: 3,
            question: 'We Deliver Editable, Maintainable Websites for Non-Tech Teams',
            answer: 'Your design vision stays intact — we convert without compromise, ensuring seamless alignment between Figma and final output.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: ProcessIcon,
            icons: DiscovertOne,
            title: 'Analyze',
            desc: 'Review your Figma design and identify development-ready sections clearly.'
        },
        {
            id: 2,
            icon: BuildIcon,
            icons: SecondSvg,
            title: 'Build',
            desc: 'Convert designs into live websites using Webflow or Framer.'
        },
    
        {
            id: 3,
            icon: ValidationIcon,
            icons: AnalysisSvg,
            title: 'Optimize',
            desc: 'Boost responsiveness, performance, and interactivity for enhanced UX.'
        },
        {
            id: 4,
            icon: DeliverIcon,
            icons: ValidationSvg,
            title: 'Deliver',
            desc: 'Finalize, test, and hand over editable systems for management.'
        },
    ]
    return (
        <>
            <Services 
            heading="FIGMA SITES"
            desc="Transform your Figma designs into live, responsive websites with structured development, pixel accuracy, and full design integrity."
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