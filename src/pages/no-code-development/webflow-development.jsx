import AnalysisSvg from "../../assets/icon/analysis-svg";
import { BuildIcon } from "../../assets/icon/define-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import ProcessIcon from "../../assets/icon/process-icon";
import SecondSvg from "../../assets/icon/second-svg";
import StrategryIcon from "../../assets/icon/strategy-icon";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function WebflowDevelopment() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'SEO and site speed optimization',
        },
        {
            id: 2,
            title: 'CMS dynamic content structure',
        },
        {
            id: 3,
            title: 'Design-Webflow implementation',
        },
        {
            id: 4,
            title: 'Custom responsive websites',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Build High-Performance Sites With Design Accuracy',
            answer: 'Every pixel reflects your original design vision — ensuring perfect execution and unmatched brand consistency across devices.'
        },
        {
            id: 2,
            question: 'We Optimize Functionality for Growth and Conversion',
            answer: 'Every pixel reflects your original design vision — ensuring perfect execution and unmatched brand consistency across devices.'
        },
        {
            id: 3,
            question: 'We Deliver Launch-Ready Systems That Empower Teams',
            answer: 'Every pixel reflects your original design vision — ensuring perfect execution and unmatched brand consistency across devices.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Plan',
            desc: 'Analyze project goals, content flow, and design structure for flawless conversion.'
        },
        {
            id: 2,
            icon: BuildIcon,
            icons: SecondSvg,
            title: 'Build',
            desc: 'Develop pixel-perfect, CMS-powered layouts ensuring adaptability devices globally.'
        },
    
        {
            id: 3,
            icon: ValidationIcon,
            icons: AnalysisSvg,
            title: 'Optimize',
            desc: 'Test SEO, accessibility, and performance metrics for maximum impact and speed.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Launch',
            desc: 'Deliver a polished, live-ready site with smooth interactions and scalability ensured.'
        },
    ]
    return (
        <>
            <Services 
            heading="WEBFLOW DEVELOPMENT"
            desc="Build Pixel-Perfect, Responsive Websites Powered By Webflow — Combining Design Precision With Seamless, No-Code Performance."
            impact_heading="Scalable Design Reliable Webflow Execution"
            impact_desc="Our Webflow Development service transforms creative designs into responsive, high-performance websites. We focus on precision, maintainability, and conversion-driven performance — giving your brand a scalable and visually consistent digital foundation."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Webflow Development Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}