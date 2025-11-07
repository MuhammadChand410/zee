import ArrowIcon from "../../assets/icon/arrow-icon";
import { HoverImage } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";


export default function ServicesSection() {
    const SERVICES_CARD = [
        {
            id: 1,
            desc: "FOR DIGITAL EXPERIENCES",
            title: "UX UI Design",
            icon: ArrowIcon,
        },
        {
            id: 2,
            desc: "For Startups & Existing Companies",
            title: "Product Revamp",
            icon: ArrowIcon,
        },
        {
            id: 3,
            desc: "FOR VISUAL STORYTELLERS",
            title: "Brand Design",
            icon: ArrowIcon,
        },
        {
            id: 4,
            desc: "FOR RAPID APP BUILDERS",
            title: "Low Code Development",
            icon: ArrowIcon,
        },
    ];

    return (
        <section className="py-8 sm:py-20 bg-black relative overflow-hidden">
            <div className="container">
                <div className="grid justify-center pb-8 sm:py-16">
                    <HeroContant
                        subheading="WE ARE GREAT AT"
                        heading="Our Services"
                        desc="Designs with Exceptional User Experiences"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8">
                    {SERVICES_CARD.map((card) => (
                        <div
                            key={card.id}
                            className="relative group py-10 border-b-[#2D2D2D] border hover:border-l-[#2D2D2D] border-t-[#2D2D2D] overflow-hidden"
                        >
                            <img
                                src={HoverImage}
                                alt="hover bg"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                  w-[215px] h-[198px] object-cover opacity-0 
                                  group-hover:opacity-100 group-hover:translate-x-[1%]
                                  transition-all duration-1500 ease-in-out"
                            />

                            <div className="absolute inset-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative flex items-center gap-8 justify-between group-hover:px-12 transition-all duration-900 z-10">
                                <div className="grid gap-4">
                                    <p className="text-lg text-[#FFF] font-normal">
                                        {card.desc}
                                    </p>
                                    <h2 className="text-[28px] text-[#FFF] font-semibold">
                                        {card.title}
                                    </h2>
                                </div>
                                <div
                                    className="px-3.5 py-3.5 bg-[#2D2D2D] rounded-full w-fit border border-[#2D2D2D] transition-all duration-300 group-hover:bg-white"
                                >
                                    <ArrowIcon />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

