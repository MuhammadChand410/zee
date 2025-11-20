import AnalysisSvg from "../../assets/icon/analysis-svg";
import { RecommendIcon } from "../../assets/icon/define-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import ProcessIcon from "../../assets/icon/process-icon";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function UxAudit() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Heuristic analysis',
        },
        {
            id: 2,
            title: 'Performance and usability review',
        },
        {
            id: 3,
            title: 'Conversion optimization',
        },
        {
            id: 4,
            title: 'Experience refinement',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Identify What’s Holding Your Product Back',
            answer: 'We uncover design gaps, usability barriers, and workflow issues that silently reduce engagement and conversion success consistently.'
        },
        {
            id: 2,
            question: 'We Provide Clear, Practical, and Actionable Solutions',
            answer: 'We uncover design gaps, usability barriers, and workflow issues that silently reduce engagement and conversion success consistently.'
        },
        {
            id: 3,
            question: 'We Turn Audit Insights Into Measurable Growth Outcomes',
            answer: 'We uncover design gaps, usability barriers, and workflow issues that silently reduce engagement and conversion success consistently.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Assess',
            desc: 'Review current user experience and product performance.'
        },
        {
            id: 2,
            icon: ProcessIcon,
            icons: SecondSvg,
            title: 'Analyze',
            desc: 'Identify friction points and missed usability strategically.'
        },
    
        {
            id: 3,
            icon: RecommendIcon,
            icons: AnalysisSvg,
            title: 'Recommend',
            desc: 'Deliver prioritized improvement plans and optimization clearly.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Optimize',
            desc: 'Implement and monitor changes to measure user satisfaction.'
        },
    ]
    return (
        <>
            <Services 
            heading="UX AUDIT PRODUCT OPTIMIZATION"
            desc="Refine What Exists, Redefine How It Performs. We Optimize Products For Usability, Efficiency, And Conversion."
            impact_heading="Continuous Evolution for Lasting Growth"
            impact_desc="Our UX Audit identifies design weaknesses, user friction, and missed opportunities, helping you deliver consistent product excellence."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our UX Audit Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}