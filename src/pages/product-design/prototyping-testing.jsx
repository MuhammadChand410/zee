import AnalysisSvg from "../../assets/icon/analysis-svg";
import { BuildIcon, DesiignIcon, PrototypeIcon, TestIcon, } from "../../assets/icon/define-icon";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function PrototypingTesting() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Prototyping for concept validation',
        },
        {
            id: 2,
            title: 'Real user testing',
        },
        {
            id: 3,
            title: 'Feedback collection & iteration',
        },
        {
            id: 4,
            title: 'Usability improvement insights',
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Concept',
            desc: 'Define prototype goals, depth, and test objectives clearly.'
        },
        {
            id: 2,
            icon: BuildIcon,
            icons: SecondSvg,
            title: 'Build',
            desc: 'Design high-fidelity prototypes for realistic testing scenarios.'
        },
    
        {
            id: 3,
            icon: TestIcon,
            icons: AnalysisSvg,
            title: 'Test',
            desc: 'Iterate and enhance the design based on verified test outcomes.'
        },
        {
            id: 4,
            icon: ValidationIcon,
            icons: ValidationSvg,
            title: 'Refine',
            desc: 'Iterate and enhance the design based on verified test effectively.'
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Reduce Risk Before You Invest in Development',
            answer: 'By validating early, we help prevent wasted costs, time, and effort on features that fail to meet user expectations.'
        },
        {
            id: 2,
            question: 'We Deliver Feedback That Drives Measurable Improvement',
            answer: 'By validating early, we help prevent wasted costs, time, and effort on features that fail to meet user expectations.'
        },
        {
            id: 3,
            question: 'We Validate Every Concept With Authentic Real-World Users',
            answer: 'By validating early, we help prevent wasted costs, time, and effort on features that fail to meet user expectations.'
        },
    ]
    return (
        <>
            <Services 
            heading="PROTOTYPING & USER TESTING "
            desc="Test Ideas, Validate Fast, And Design Smarter. We Turn Concepts Into Interactive Experiences Validated By Real Users"
            impact_heading="From Idea to User-Validated Prototype"
            impact_desc="We help you move from assumptions to proof by turning design ideas into clickable, testable prototypes. Our testing ensures every interaction is purposeful and performance-driven."
            process_heading="A Strategic Process That Builds Strong Foundations"
            why_heading="Why Are Our Prototyping & User Testing Services the Right Choice for You?"
            impactListing={IMPACT_CARD}
            faq={FAQS}
            processCards={PROCESS_CARD}
            
            />
            

        </>
    )
}