import AnalysisSvg from "../../assets/icon/analysis-svg";
import DeliverIcon from "../../assets/icon/deliver-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import Services from "../../component/common/services/service";
import { DesiignIcon , DefineIcon } from "../../assets/icon/define-icon";
import ProcessIcon from "../../assets/icon/process-icon";

export default function VisualDesign() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Social media and digital assets',
        },
        {
            id: 2,
            title: 'Marketing and advertising collateral',
        },
        {
            id: 3,
            title: 'Campaign visuals and storytelling',
        },
        {
            id: 4,
            title: 'Brand consistency across all channels',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Create Visual Assets That Speak With Purpose and Clarity',
            answer: 'Each asset is strategically designed to reinforce your brand’s message and improve audience understanding across multiple touchpoints consistently.'
        },
        {
            id: 2,
            question: 'We Build Cohesion Across Campaigns, Platforms, and Audiences',
            answer: 'Each asset is strategically designed to reinforce your brand’s message and improve audience understanding across multiple touchpoints consistently.'
        },
        {
            id: 3,
            question: 'We Enhance Engagement Through Thoughtful, On-Brand Design Choices',
            answer: 'Each asset is strategically designed to reinforce your brand’s message and improve audience understanding across multiple touchpoints consistently.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Discover',
            desc: 'Understand your brand goals, campaigns, and communication needs thoroughly.'
        },
        {
            id: 2,
            icon: ProcessIcon,
            icons: SecondSvg,
            title: 'Conceptualize',
            desc: 'Develop design ideas and visual directions that align with campaign strategy seamlessly.'
        },
    
        {
            id: 3,
            icon: DesiignIcon,
            icons: AnalysisSvg,
            title: 'Design',
            desc: 'Create high-quality visuals optimized for digital and print performance efficiently.'
        },
        {
            id: 4,
            icon: DeliverIcon,
            icons: ValidationSvg,
            title: 'Deliver',
            desc: 'Package assets with detailed brand application guidelines for consistent usage globally.'
        },
    ]
    return (
        <>
            <Services 
            heading="VISUAL COMMUNICATION DESIGN" 
            desc="Deliver Cohesive Visual Assets That Amplify Brand Consistency. We Design Communication Materials That Speak Your Brand’s Language Clearly And Effectively."
            impact_heading="Building Cohesive Visual Brand Communication"
            impact_desc="Our Visual Communication Design service ensures that every marketing material, social post, and campaign asset aligns with your brand identity. We help you communicate visually with clarity, consistency, and creativity."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Visual Communication Design Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}