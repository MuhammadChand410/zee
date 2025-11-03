import { TeamImage } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function OurTeam() {
    const OUR_TEAMIMAGE = [
        {
            id: 1,
            thumbnail: TeamImage,
            title: "Muhammad Baber",
            desc: "Design Director",
        },
        {
            id: 2,
            thumbnail: TeamImage,
            title: "Muhammad Baber",
            desc: "Design Director",
        },
        {
            id: 3,
            thumbnail: TeamImage,
            title: "Muhammad Baber",
            desc: "Design Director",
        },
        {
            id: 4,
            thumbnail: TeamImage,
            title: "Muhammad Baber",
            desc: "Design Director",
        },
    ];

    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                <div className="grid justify-center">
                    <div className="max-w-[436px] pb-8 sm:pb-20">
                        <HeroContant subheading={`Our Team`} classNameSub={`!pb-4`} heading={`Meet the people behind the magic`} classNamehead={`sm:!leading-[54px] !leading-[40px] !pb-4`} desc={`Rest assured. Your project is in good hands.`}
                        />
                    </div>
                </div>

                <div className={`grid md:grid-cols-2 grid-cols-1 gap-6 justify-items-center`}>
                    {OUR_TEAMIMAGE.map((card, index) => (
                        <div
                            key={card.id}
                            className={`flex flex-col gap-4 ${index === 1 ? "mt-[100px]" : index === 3 ? "mt-[100px]" : ""
                                }`}
                        >
                            <img
                                src={card.thumbnail}
                                alt=""
                                width={310}
                                height={360}
                                loading="lazy"
                            />
                            <div className="flex gap-14">
                                <h2 className="text-base text-[#FFF] font-normal">{card.title}</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
