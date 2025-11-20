import AnalysisSvg from "../../assets/icon/analysis-svg";
import { AuditIcon, CreateIcon, DesiignIcon, DocumentIcon, IntegrateIcon, PrototypeIcon, } from "../../assets/icon/define-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function DesignGuideline() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Design libraries & tokens',
        },
        {
            id: 2,
            title: 'System scalability & team alignment',
        },
        {
            id: 3,
            title: 'UI documentation & accessibility',
        },
        {
            id: 4,
            title: 'Visual and brand consistency',
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: AuditIcon,
            icons: DiscovertOne,
            title: 'Audit',
            desc: 'Evaluate existing design assets, patterns, and inconsistencies.'
        },
        {
            id: 2,
            icon: CreateIcon,
            icons: SecondSvg,
            title: 'Create',
            desc: 'Develop reusable UI components, styles, and tokens for flexible scaling.'
        },
    
        {
            id: 3,
            icon: DocumentIcon,
            icons: AnalysisSvg,
            title: 'Document',
            desc: 'Establish design rules and documentation to enhance collab.'
        },
        {
            id: 4,
            icon: IntegrateIcon,
            icons: ValidationSvg,
            title: 'Integrate',
            desc: 'Implement, train teams, and ensure smooth workflow adoption.'
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Build Systems That Empower Every Design Team',
            answer: 'We design libraries that speed up delivery, reduce rework, and improve productivity across all creative departments consistently.'
        },
        {
            id: 2,
            question: 'We Create Foundations That Scale Seamlessly Over Time',
            answer: 'We design libraries that speed up delivery, reduce rework, and improve productivity across all creative departments consistently.'
        },
        {
            id: 3,
            question: 'We Ensure Unified Visual and Functional Harmony Everywhere',
            answer: 'We design libraries that speed up delivery, reduce rework, and improve productivity across all creative departments consistently.'
        },
    ]
    return (
        <>
            <Services 
            heading="DESIGN SYSTEMS & GUIDELINES"
            desc="Design Smarter, Scale Faster, And Stay Consistent. We Create Scalable Systems That Bring Unity To Your Brand Experiences."
            impact_heading="Building Foundations for Scalable Design"
            impact_desc="Our Design Systems service establishes visual and functional harmony across your entire digital ecosystem. We standardize UI components, documentation, and interaction patterns to strengthen brand consistency."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Design System Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />
            

        </>
    )
}