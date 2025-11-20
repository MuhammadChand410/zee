import AnalysisSvg from "../../assets/icon/analysis-svg";
import { DefineIcon, DevelopIcon, ResearrchIcon} from "../../assets/icon/define-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";

export default function BrandPositioning() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Market research & analysis',
        },
        {
            id: 2,
            title: 'Brand positioning & tone',
        },
        {
            id: 3,
            title: 'Audience persona development',
        },
        {
            id: 4,
            title: 'Value proposition definition',
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: ResearrchIcon,
            icons: DiscovertOne,
            title: 'Research',
            desc: 'Explore market landscape, competitors, and audience expectations thoroughly.'
        },
        {
            id: 2,
            icon: DefineIcon,
            icons: SecondSvg,
            title: 'Define',
            desc: 'Identify positioning, tone, and communication pillars that set you apart distinctly.'
        },
    
        {
            id: 3,
            icon: DevelopIcon,
            icons: AnalysisSvg,
            title: 'Develop',
            desc: 'Craft messaging, mission, and purpose that resonate across every brand channel.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Align',
            desc: 'Validate positioning through audience feedback and refine for maximum impact.'
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Turn Market Insights Into Clear Brand Direction',
            answer: 'Our research-driven strategies translate data into distinct positioning that strengthens brand equity and audience engagement effectively.'
        },
        {
            id: 2,
            question: 'We Build Messaging Systems That Drive Emotional Connection',
            answer: 'Our research-driven strategies translate data into distinct positioning that strengthens brand equity and audience engagement effectively.'
        },
        {
            id: 3,
            question: 'We Align Brand Voice Across Every Touchpoint Seamlessly',
            answer: 'Our research-driven strategies translate data into distinct positioning that strengthens brand equity and audience engagement effectively.'
        },
    ]
    return (
        <>
            <Services 
            heading="BRAND STRATEGY & POSITIONING"
            desc="Define Who You Are, Why You Matter, And Where You Belong. We Position Your Brand With Clarity, Confidence, And Competitive Power."
            impact_heading="Building Brands With Strategic Depth"
            impact_desc="We create brand strategies that articulate vision, values, and personality. Our positioning frameworks help your brand stand out and connect emotionally with the right audience."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Brand Strategy & Positioning Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}