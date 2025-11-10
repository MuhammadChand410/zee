import ImpactIcon from "../../assets/icon/impact-icon";
import { ImpactImage } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function ImpactProduct() {
    const IMPACT_CARD = [
        {
            id: 1,
            title: 'Defining product vision and goals',
        },
        {
            id: 2,
            title: 'Setting clear, actionable strategies',
        },
        {
            id: 3,
            title: 'Setting clear, actionable strategies',
        },
        {
            id: 4,
            title: 'Setting clear, actionable strategies',
        },
        {
            id: 5,
            title: 'Feature & Outcome Prioritization',
        },
    ]
    return (
        <section className="md:py-20 py-8 bg-[#0B0B0B]">
            <div className="container">
                <div className="flex md:flex-row flex-col gap-8 md:gap-20">
                    <div>
                        <img src={ImpactImage} alt="impact-image" width={502} height={361} loading="lazy" />
                    </div>
                    <div>
                        <div className="max-w-[640px]">
                            <HeroContant subheading={`IMPACT`} classNameSub={`md:!pb-8 !pb-4 !text-start`} heading={`Transform Vision into Measurable Product Success`} classNamehead={`md:!leading-[48px] !leading-[40px] !text-start md:!text-[40px] !text-[28px]`} desc={`Our Product Strategy Consulting bridges the gap between design, business, and technology. We define clear goals, align user needs with business outcomes, and guide your product from concept to market success.`} classNameDesc={`!font-[Plus Jakarta Sans] !leading-[21px] !pb-8 !text-start`} />
                            <div className="grid md:grid-cols-2 grid-cols-1 ">
                                {IMPACT_CARD.map((card =>
                                    <div className="flex gap-3 pb-4" key={card.id}>
                                        <ImpactIcon />
                                        <h2 className="text-sm font-medium leading-[21px] text-[#FFFFFF]">{card.title}</h2>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}