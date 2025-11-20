import AnalysisSvg from "../../assets/icon/analysis-svg";
import DeliverIcon from "../../assets/icon/deliver-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import Services from "../../component/common/services/service";
import { DesiignIcon , DefineIcon } from "../../assets/icon/define-icon";

export default function BrandIdentity() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Logo and mark design',
        },
        {
            id: 2,
            title: 'Color palette and typography',
        },
        {
            id: 3,
            title: 'Visual consistency platforms',
        },
        {
            id: 4,
            title: 'Brand personality and creation',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Craft Visual Identities That Tell Compelling Stories',
            answer: 'Our designs merge creativity and clarity, helping your brand express emotion and purpose through every visual touchpoint meaningfully.'
        },
        {
            id: 2,
            question: 'We Translate Your Brand Essence Into Lasting Impressions',
            answer: 'Our designs merge creativity and clarity, helping your brand express emotion and purpose through every visual touchpoint meaningfully.'
        },
        {
            id: 3,
            question: 'We Design Systems That Scale Across Every Platform',
            answer: 'Our designs merge creativity and clarity, helping your brand express emotion and purpose through every visual touchpoint meaningfully.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Discover',
            desc: 'Understand brand values, audience insights, and goals deeply for authenticity.'
        },
        {
            id: 2,
            icon: DefineIcon,
            icons: SecondSvg,
            title: 'Define',
            desc: 'Establish creative tone, mood, and positioning direction clearly across channels.'
        },
    
        {
            id: 3,
            icon: DesiignIcon,
            icons: AnalysisSvg,
            title: 'Design',
            desc: 'Craft cohesive logo systems and visuals that express brand essence beautifully.'
        },
        {
            id: 4,
            icon: DeliverIcon,
            icons: ValidationSvg,
            title: 'Deliver',
            desc: 'Document every asset in a clear, easy-to-use and comprehensive brand guide for consistency.'
        },
    ]
    return (
        <>
            <Services 
            heading="BRAND IDENTITY DESIGN" 
            desc="We Design Brand Identities That Inspire Recognition And Trust. Your Brand’s Visual DNA, Shaped For Consistency, Clarity, And Timeless Appeal."
            impact_heading="Creating a Visual Identity That Defines You"
            impact_desc="Our Brand Identity Design service builds the visual and emotional foundation of your brand. We craft logos, typography, and color systems that capture who you are and how you want to be remembered."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Brand Identity Design Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />

        </>
    )
}