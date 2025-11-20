import AnalysisSvg from "../../assets/icon/analysis-svg";
import DeliverIcon from "../../assets/icon/deliver-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import Services from "../../component/common/services/service";
import { DesiignIcon , DefineIcon, IntegrateIcon } from "../../assets/icon/define-icon";
import ProcessIcon from "../../assets/icon/process-icon";

export default function RebrandingEvolution() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Brand audits and evaluations',
        },
        {
            id: 2,
            title: 'Identity redesign and refinement',
        },
        {
            id: 3,
            title: 'Brand repositioning and tone update',
        },
        {
            id: 4,
            title: 'Transition strategy and rollout planning',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Refresh Without Losing Your Core Brand Heritage',
            answer: 'We evolve your visual and verbal identity carefully, keeping the essence intact while ensuring modern relevance and emotional continuity.'
        },
        {
            id: 2,
            question: 'We Deliver Rebranding Strategies Built for Longevity and Growth',
            answer: 'We evolve your visual and verbal identity carefully, keeping the essence intact while ensuring modern relevance and emotional continuity.'
        },
        {
            id: 3,
            question: 'We Guarantee a Seamless, Impactful Transition Across Channels',
            answer: 'We evolve your visual and verbal identity carefully, keeping the essence intact while ensuring modern relevance and emotional continuity.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Assess',
            desc: 'Review your existing brand identity, voice, and perception comprehensively.'
        },
        {
            id: 2,
            icon: ProcessIcon,
            icons: SecondSvg,
            title: 'Strategize',
            desc: 'Define rebranding goals and develop creative strategies aligned with future thoughtfully.'
        },
    
        {
            id: 3,
            icon: IntegrateIcon,
            icons: AnalysisSvg,
            title: 'Redesign',
            desc: 'Create refreshed visuals and systems that reflect modern relevance beautifully.'
        },
        {
            id: 4,
            icon: DeliverIcon,
            icons: ValidationSvg,
            title: 'Launch',
            desc: 'Implement new identity and ensure a seamless transition across all platforms smoothly.'
        },
    ]
    return (
        <>
            <Services 
            heading="REBRANDING & EVOLUTION" 
            desc="Transform Existing Identities Into Modern, Future-Ready Brand Systems. We Evolve Your Brand With Purpose, Precision, And Continuity."
            impact_heading="Revitalizing Brands for the Next Chapter"
            impact_desc="Our Rebranding & Evolution service helps you modernize your visual identity, tone, and positioning without losing your core essence. We ensure your brand remains relevant, engaging, and forward-looking."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Rebranding & Evolution Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}