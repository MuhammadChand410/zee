import AnalysisSvg from "../../assets/icon/analysis-svg";
import { MaintainIcon, SupportIcon } from "../../assets/icon/define-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import ProcessIcon from "../../assets/icon/process-icon";
import SecondSvg from "../../assets/icon/second-svg";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import Services from "../../component/common/services/service";


export default function PlatformSupport() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Regular maintenance and backups',
        },
        {
            id: 2,
            title: 'Bug fixes and performance monitoring',
        },
        {
            id: 3,
            title: 'Security Optimization & Uptime Support',
        },
        {
            id: 4,
            title: 'Feature updates and scalability checks',
        },
    ]
    const FAQS = [
        {
            id: 1,
            question: 'We Keep Your Platforms Running Smoothly and Securely',
            answer: 'From security patches to uptime monitoring, we ensure your platforms perform flawlessly with no interruptions.'
        },
        {
            id: 2,
            question: 'We Anticipate Issues Before They Affect Performance',
            answer: 'From security patches to uptime monitoring, we ensure your platforms perform flawlessly with no interruptions.'
        },
        {
            id: 3,
            question: 'We Provide Transparent Reporting and Continuous Improvement',
            answer: 'From security patches to uptime monitoring, we ensure your platforms perform flawlessly with no interruptions.'
        },
    ]
    const PROCESS_CARD = [
        {
            id: 1,
            icon: ProcessIcon,
            icons: DiscovertOne,
            title: 'Monitor',
            desc: 'Track performance metrics, uptime, and system health 24/7 for reliability.'
        },
        {
            id: 2,
            icon: MaintainIcon,
            icons: SecondSvg,
            title: 'Maintain',
            desc: 'Execute regular updates, patch fixes, and version control consistency.'
        },

        {
            id: 3,
            icon: ValidationIcon,
            icons: AnalysisSvg,
            title: 'Optimize',
            desc: 'Improve loading times, performance, and user experience through insights.'
        },
        {
            id: 4,
            icon: SupportIcon,
            icons: ValidationSvg,
            title: 'Support',
            desc: 'Provide ongoing support and performance reports for clarity.'
        },
    ]
    return (
        <>
            <Services
                heading="PLATFORM MAINTENANCE & SUPPORT"
                desc="Ensure Long-Term Stability With Continuous Updates, Backups, And Performance Optimization For All Your No-Code Platforms And Websites."
                impact_heading="Sustaining Growth Through Reliable Support"
                impact_desc="Our Platform Maintenance & Support service keeps your no-code solutions secure, fast, and updated. We manage updates, monitor uptime, and ensure your systems stay optimized for user performance."
                process_heading="A Strategic Process That Builds Strong Foundations"
                why_heading="Why Are Our Maintenance & Support Services the Right Choice for You?"
                impactListing={IMPACT_CARD}
                faq={FAQS}
                processCards={PROCESS_CARD}

            />

        </>
    )
}