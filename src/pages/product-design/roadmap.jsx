import AnalysisSvg from "../../assets/icon/analysis-svg";
import DeliverIcon from "../../assets/icon/deliver-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import PlanIcon from "../../assets/icon/plan-icon";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function ProductRoadmap() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Vision alignment',
        },
        {
            id: 2,
            title: 'Feature prioritization',
        },
        {
            id: 3,
            title: 'Execution milestones',
        },
        {
            id: 4,
            title: 'Resource planning',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Align Teams Around a Common Vision',
            answer: 'Everyone moves with clarity, design, dev, and strategy in sync.'
        },
        {
            id: 2,
            question: 'We Help You Prioritize What Matters Most',
            answer: 'Everyone moves with clarity, design, dev, and strategy in sync.'
        },
        {
            id: 3,
            question: 'We Deliver Clear, Visual, and Actionable Roadmaps',
            answer: 'Everyone moves with clarity, design, dev, and strategy in sync.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Discover',
            desc: 'Define clear objectives and target audience.'
        },
        {
            id: 2,
            icon: PlanIcon,
            icons: SecondSvg,
            title: 'Plan',
            desc: 'Gather relevant qualitative and quantitative data.'
        },
    
        {
            id: 3,
            icon: ValidationIcon,
            icons: AnalysisSvg,
            title: 'Validation',
            desc: 'Find actionable insights and emerging trends.'
        },
        {
            id: 4,
            icon: DeliverIcon,
            icons: ValidationSvg,
            title: 'Deliver',
            desc: 'Present data-backed design recommendations.'
        },
    ]
    return (
        <>
            <Services 
            heading="PRODUCT STRATEGY & ROADMAPPING"
            desc="Plan With Clarity And Move With Confidence. We Design Roadmaps That Turn Ideas Into Successful Products."
            impact_heading="A Clear Path to Product Success"
            impact_desc="We align goals, prioritize features, and create structured plans that make delivery predictable and efficient."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Product Roadmapping Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}