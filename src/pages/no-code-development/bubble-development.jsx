import AnalysisSvg from "../../assets/icon/analysis-svg";
import { BuildIcon, IntegrateIcon } from "../../assets/icon/define-icon";
import DeliverIcon from "../../assets/icon/deliver-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import ProcessIcon from "../../assets/icon/process-icon";
import SecondSvg from "../../assets/icon/second-svg";
import StrategryIcon from "../../assets/icon/strategy-icon";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function BubbleDevelopment() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Custom app development',
        },
        {
            id: 2,
            title: 'Database design and automation',
        },
        {
            id: 3,
            title: 'API integrations',
        },
        {
            id: 4,
            title: 'Dashboard and user management',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Transform Ideas Into Complete, Ready-to-Launch Applications',
            answer: 'We build, test, and deploy custom apps designed to solve your business challenges without lengthy development cycles.'
        },
        {
            id: 2,
            question: 'We Focus on Scalability and Workflow Efficiency From Day One',
            answer: 'We build, test, and deploy custom apps designed to solve your business challenges without lengthy development cycles.'
        },
        {
            id: 3,
            question: 'We Empower Teams With Tools They Can Manage Easily',
            answer: 'We build, test, and deploy custom apps designed to solve your business challenges without lengthy development cycles.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Plan',
            desc: 'Define app goals, and logic with clear use-case mapping.'
        },
        {
            id: 2,
            icon: BuildIcon,
            icons: SecondSvg,
            title: 'Build',
            desc: 'Develop custom features and database flows for scalability.'
        },
    
        {
            id: 3,
            icon: IntegrateIcon,
            icons: AnalysisSvg,
            title: 'Integrate',
            desc: 'Connect APIs, and third-party tools for functionality expansion.'
        },
        {
            id: 4,
            icon: DeliverIcon,
            icons: ValidationSvg,
            title: 'Launch',
            desc: 'Test, refine, and production-ready web apps built for growth.'
        },
    ]
    return (
        <>
            <Services 
            heading="BUBBLE APP DEVELOPMENT"
            desc="Develop Dynamic, Scalable Web Applications Using Bubble — Turning Complex Ideas Into Fully Functional Products Without Traditional Coding."
            impact_heading="From Prototype to Production, Without Code"
            impact_desc="Our Bubble App Development service helps startups and businesses build powerful, custom web applications quickly and efficiently. We focus on usability, performance, and seamless scalability to bring your ideas to market faster."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Bubble App Development Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}