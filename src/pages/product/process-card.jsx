import AnalysisSvg from "../../assets/icon/analysis-svg";
import DiscoveryIcon from "../../assets/icon/discovery-icon";
import DiscovertOne from "../../assets/icon/discovery-one";
import ProcessIcon from "../../assets/icon/process-icon";
import SecondSvg from "../../assets/icon/second-svg";
import StrategryIcon from "../../assets/icon/strategy-icon";
import ValidationSvg from "../../assets/icon/validatiob-svg";
import ValidationIcon from "../../assets/icon/validation-icon";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function ProcessCard() {
    const PROCESS_CARD = [
        {
            id: 1,
            icon: DiscoveryIcon,
            icons: DiscovertOne,
            title: 'Discovery',
            desc: 'Understand business goals and market potential.'
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
        <section className="md:py-20 py-8 bg-[#090909]">
            <div className="container">
                <div className="grid md:gap-20 gap-8">
                    <div className="flex justify-center">
                        <HeroContant subheading={`OUR PROCESS`} classNameSub={`md:!pb-8 !pb-4`} heading={`A Strategic Process That Builds Strong Foundations`} classNamehead={`md:!leading-[48px] !leading-[40px]`} />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
                        {PROCESS_CARD.map((card =>
                            <div className="group grid gap-1 px-5 py-6 rounded-xl bg-[#121212] hover:bg-[#F3FE00] transition-all duration-300 ease-in-out" key={card.id}>
                                <div className="flex justify-between">
                                    <card.icon />
                                    <card.icons />
                                </div>
                                <div className="grid gap-4 font-[Plus Jakarta Sans] transition-all duration-300 ease-in-out">
                                    <h2 className="text-lg font-medium text-[#FFFFFF] leading-[21px] group-hover:text-[#000000] transition-all duration-300 ease-in-out">
                                        {card.title}
                                    </h2>
                                    <p className="text-sm text-[#BDBDBD] font-normal group-hover:text-[#000000] transition-all duration-300 ease-in-out">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}