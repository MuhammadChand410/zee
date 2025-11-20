import AnalysisSvg from "../../assets/icon/analysis-svg";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import ProcessIcon from "../../assets/icon/process-icon";
import SecondSvg from "../../assets/icon/second-svg";
import StrategryIcon from "../../assets/icon/strategy-icon";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function ProductStrategy() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Defining product vision and goals',
        },
        {
            id: 2,
            title: 'Identifying needs and pain points',
        },
        {
            id: 3,
            title: 'Setting clear, actionable strategies',
        },
        {
            id: 4,
            title: 'Mapping the business and design',
        },
         {
            id: 5,
            title: 'Feature & Outcome Prioritization',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Align Product Goals With Market Reality',
            answer: 'We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why.'
        },
        {
            id: 2,
            question: 'We Turn Vision Into Actionable Roadmaps',
            answer: 'We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why.'
        },
        {
            id: 3,
            question: 'We Build Scalable Systems for Future Growth',
            answer: 'We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Discovery',
            desc: 'Understand business goals, audience, and market potential.'
        },
        {
            id: 2,
            icon: ProcessIcon,
            icons: SecondSvg,
            title: 'Analysis',
            desc: 'Evaluate data, trends, and competitors for key opportunities.'
        },
    
        {
            id: 3,
            icon: StrategryIcon,
            icons: AnalysisSvg,
            title: 'Strategy',
            desc: 'Define roadmap, positioning, and value proposition.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Validation',
            desc: 'Refine through feedback and finalize the execution plan.'
        },
    ]
    return (
        <>
            <Services 
            heading="PRODUCT STRATEGY CONSULTING"
            desc="We Help You Design With Purpose And Direction.Through Data-Driven Strategy, We Turn Your Vision Into A Roadmap For Lasting Success."
            impact_heading="Transform Vision into Measurable Product"
            impact_desc="Our Product Strategy Consulting bridges the gap between design, business, and technology. We define clear goals, align user needs with business outcomes, and guide your product from concept to market success."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Product Strategy Consulting Services the Right Choice for You? "
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}