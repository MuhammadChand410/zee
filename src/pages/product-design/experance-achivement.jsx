import AnalysisSvg from "../../assets/icon/analysis-svg";
import { DefineIcon, MapIcon, StructureIcon } from "../../assets/icon/define-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";

export default function ExperienceArchitecture() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Information hierarchy',
        },
        {
            id: 2,
            title: 'Navigation clarity',
        },
        {
            id: 3,
            title: 'Flow optimization',
        },
        {
            id: 4,
            title: 'Wireframe logic',
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DefineIcon,
            icons: DiscovertOne,
            title: 'Define',
            desc: 'Gather requirements, objectives, and user expectations carefully.'
        },
        {
            id: 2,
            icon: MapIcon,
            icons: SecondSvg,
            title: 'Map',
            desc: 'Sketch visual paths and logical flows across interactions.'
        },
    
        {
            id: 3,
            icon: StructureIcon,
            icons: AnalysisSvg,
            title: 'Structure',
            desc: 'Organize navigation hierarchy, user goals, and screen clearly.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Validate',
            desc: 'Test flow usability and adjust for better engagement efficiency.'
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Design Experiences That Feel Naturally Effortless',
            answer: 'Every flow we create reduces confusion and supports faster, frictionless navigation, resulting in greater user satisfaction overall.'
        },
        {
            id: 2,
            question: 'We Build Architectures Based on Real User Logic',
            answer: 'Every flow we create reduces confusion and supports faster, frictionless navigation, resulting in greater user satisfaction overall.'
        },
        {
            id: 3,
            question: 'We Create Scalable Frameworks for Future Design Growth',
            answer: 'Every flow we create reduces confusion and supports faster, frictionless navigation, resulting in greater user satisfaction overall.'
        },
    ]
    return (
        <>
            <Services 
            heading="EXPERIENCE ARCHITECTURE"
            desc="Simplify Complexity Through Structured Design Logic. We Create Intuitive User Flows That Make Navigation Effortless."
            impact_heading="Blueprinting Seamless Digital Experiences"
            impact_desc="We create structures that make digital experiences intuitive and fluid, reducing friction and improving usability across all screens."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Experience Architecture Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}