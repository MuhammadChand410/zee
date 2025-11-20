import AnalysisSvg from "../../assets/icon/analysis-svg";
import { DesiignIcon, PrototypeIcon, } from "../../assets/icon/define-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function UiUxDesign() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'UI aesthetics',
        },
        {
            id: 2,
            title: 'Visual hierarchy',
        },
        {
            id: 3,
            title: 'Interaction logic',
        },
        {
            id: 4,
            title: 'Accessibility consistency',
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Discover',
            desc: 'Define design vision, audience expectations, and success clearly.'
        },
        {
            id: 2,
            icon: DesiignIcon,
            icons: SecondSvg,
            title: 'Design',
            desc: 'Create elegant, structured layouts with clear usability throughout.'
        },
    
        {
            id: 3,
            icon: PrototypeIcon,
            icons: AnalysisSvg,
            title: 'Prototype',
            desc: 'Build interactive experiences that demonstrate flow and engagement.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Refine',
            desc: 'Review, validate, and enhance every detail for flawless visual experience.'
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Balance Aesthetic Appeal With Functional Clarity',
            answer: 'We combine beauty and usability to design interfaces that captivate, perform, and deliver long-term user engagement.'
        },
        {
            id: 2,
            question: 'We Design Experiences That Convert and Retain Users',
            answer: 'We combine beauty and usability to design interfaces that captivate, perform, and deliver long-term user engagement.'
        },
        {
            id: 3,
            question: 'We Create Design Systems That Scale With Growth',
            answer: 'We combine beauty and usability to design interfaces that captivate, perform, and deliver long-term user engagement.'
        },
    ]
    return (
        <>
            <Services 
            heading="UI/UX DESIGN"
            desc="Beautiful, Functional, And Conversion-Focused Interfaces. We Design Experiences That Engage, Perform, And Retain Users."
            impact_heading="Designing for Clarity and Emotion"
            impact_desc="We create stunning and usable interfaces that delight users while achieving measurable results for your business."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our UI/UX Design Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />
            

        </>
    )
}