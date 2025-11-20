import AnalysisSvg from "../../assets/icon/analysis-svg";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import Services from "../../component/common/services/service";
import { DefineIcon, TestIcon, GuideIcon } from "../../assets/icon/define-icon";

export default function CreativeDirection() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Art direction and style guidance',
        },
        {
            id: 2,
            title: 'Visual storytelling consistency',
        },
        {
            id: 3,
            title: 'Brand tone and creative supervision',
        },
        {
            id: 4,
            title: 'Cross-channel creative coordination',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Align Every Creative Element With Brand Strategy',
            answer: ' We ensure every color, image, and tone expresses your brand purpose while maintaining aesthetic precision and strategic alignment.'
        },
        {
            id: 2,
            question: 'We Drive Creative Cohesion Across Every Platform',
            answer: ' We ensure every color, image, and tone expresses your brand purpose while maintaining aesthetic precision and strategic alignment.'
        },
        {
            id: 3,
            question: 'We Transform Ideas Into Emotionally Resonant Stories',
            answer: ' We ensure every color, image, and tone expresses your brand purpose while maintaining aesthetic precision and strategic alignment.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Understand',
            desc: 'Analyze brand objectives, audience, and existing creative language comprehensively.'
        },
        {
            id: 2,
            icon: DefineIcon,
            icons: SecondSvg,
            title: 'Define',
            desc: 'Establish a creative tone and visual direction that fits the brand essence perfectly.'
        },
    
        {
            id: 3,
            icon: GuideIcon,
            icons: AnalysisSvg,
            title: 'Guide',
            desc: 'Supervise design execution to ensure aesthetic alignment and message clarity always.'
        },
        {
            id: 4,
            icon: TestIcon,
            icons: ValidationSvg,
            title: 'Refine',
            desc: 'Review, test, and evolve creative outputs for performance and visual consistency.'
        },
    ]
    return (
        <>
            <Services 
            heading="CREATIVE DIRECTION" 
            desc="Turn Ideas Into Impactful Visuals Guided By Creative Precision. We Lead Your Brand’s Design Direction With Vision, Strategy, And Purpose."
            impact_heading="Aligning Creativity With Strategy"
            impact_desc="We provide creative direction that ensures all brand visuals and messaging work harmoniously. Our process unites design, tone, and storytelling for consistent, high-quality output."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Creative Direction Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}