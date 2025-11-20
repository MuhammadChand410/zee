import AnalysisSvg from "../../assets/icon/analysis-svg";
import AnalyzeIcon from "../../assets/icon/analyz-icon";
import CollectIcon from "../../assets/icon/collect-icon";
import DeliverIcon from "../../assets/icon/deliver-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import PlanIcon from "../../assets/icon/plan-icon";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import Services from "../../component/common/services/service";


export default function UxSearch() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'User behavior & motivation',
        },
        {
            id: 2,
            title: 'Problem discovery',
        },
        {
            id: 3,
            title: 'Usability validation',
        },
        {
            id: 4,
            title: 'Insight-based design direction',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Base Every Decision on Proven Data',
            answer: 'Design backed by real evidence ensures confidence and clarity in outcomes.'
        },
        {
            id: 2,
            question: 'We Translate User Behavior Into Actionable Insight',
            answer: 'Design backed by real evidence ensures confidence and clarity in outcomes.'
        },
        {
            id: 3,
            question: 'We Help You Build With Clarity and Focus',
            answer: 'Design backed by real evidence ensures confidence and clarity in outcomes.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: PlanIcon,
            icons: DiscovertOne,
            title: 'Plan',
            desc: 'Define clear objectives and target audience.'
        },
        {
            id: 2,
            icon: CollectIcon,
            icons: SecondSvg,
            title: 'Collect',
            desc: 'Gather relevant qualitative and quantitative data.'
        },
    
        {
            id: 3,
            icon: AnalyzeIcon,
            icons: AnalysisSvg,
            title: 'Analyze',
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
            heading="UX RESEARCH & INSIGHTS"
            desc="Understand Your Users Beyond Assumptions. We Uncover What Drives Real Behavior Through Research And Data."
            impact_heading="Design Backed by Evidence" classNamehead='!max-w-[350px]'
            impact_desc="Our UX Research & Insights reveal patterns, motivations, and expectations that shape better design decisions. We provide data you can act on, not guess from."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our UX Research & Insights Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}