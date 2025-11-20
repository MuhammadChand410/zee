import AnalysisSvg from "../../assets/icon/analysis-svg";
import { DesiignIcon, IntegrateIcon, PrototypeIcon, } from "../../assets/icon/define-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function InteractionDesign() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Microinteractions & feedback',
        },
        {
            id: 2,
            title: 'Animation systems',
        },
        {
            id: 3,
            title: 'Motion principles',
        },
        {
            id: 4,
            title: 'Interactive flow guidance',
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Plan',
            desc: 'Define animation goals, and timing details for better impact.'
        },
        {
            id: 2,
            icon: DesiignIcon,
            icons: SecondSvg,
            title: 'Design',
            desc: 'Create motion concepts aligned brand tone and product identity.'
        },
    
        {
            id: 3,
            icon: IntegrateIcon,
            icons: AnalysisSvg,
            title: 'Integrate',
            desc: 'Implement motion across screens and transitions efficiently.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Validate',
            desc: 'Test animations for usability, performance, & accessibility.'
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Design Motion That Improves User Understanding',
            answer: 'Each animation is purposeful, reinforcing clarity, flow, and engagement through natural motion that enhances user experience intuitively.'
        },
        {
            id: 2,
            question: 'We Build Dynamic Systems That Strengthen Brand Identity',
            answer: 'Each animation is purposeful, reinforcing clarity, flow, and engagement through natural motion that enhances user experience intuitively.'
        },
        {
            id: 3,
            question: 'We Optimize Every Animation for Speed and Accessibility',
            answer: 'Each animation is purposeful, reinforcing clarity, flow, and engagement through natural motion that enhances user experience intuitively.'
        },
    ]
    return (
        <>
            <Services 
            heading="INTERACTION & MOTION DESIGN"
            desc="Motion That Guides, Interaction That Delights. We Craft Movement That Enhances Clarity And Builds Emotional Connection."
            impact_heading="Adding Life to Every Digital Experience"
            impact_desc="Adding Life to Every Digital Experience"
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Interaction & Motion Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />
            

        </>
    )
}