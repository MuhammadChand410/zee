import AchivementBlack from "../../assets/icon/achivement-black";
import AchivementClutch from "../../assets/icon/achivement-clutch";
import AchivementStar from "../../assets/icon/achiviment-star";
import GoodFirm from "../../assets/icon/goodfirm-icon";
import UpWork from "../../assets/icon/upwork-icon";

export default function Achivements({ count = 5 }) {
    const ACHIVEMENT_STAR = [
        {
            id: 1,
            icon: AchivementClutch,
            title: 'Reviewed on',
            titlee: '41 Reviews',
            stars: 5,
            color: "#FF3D2E",
        },
        {
            id: 2,
            icon: GoodFirm,
            title: 'Reviewed on',
            titlee: '41 Reviews',
            stars: 5,
            color: "#5591FF",
        },
        {
            id: 3,
            icon: UpWork,
            title: 'Reviewed on',
            titlee: '41 Reviews',
            stars: 5,
            color: "#6FDA44",
        },

    ]
    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                <div className="grid gap-8 sm:gap-18">
                    <div className="flex md:flex-row flex-col items-center justify-center gap-8 sm:gap-18 ">
                        {ACHIVEMENT_STAR.map((card =>
                            <div className="grid gap-3 justify-between max-w-[759px]" key={card.id}>
                                <div className="flex items-center gap-8 sm:gap-3">
                                    <h2 className="text-base text-[#CACACA] font-normal">{card.title}</h2>
                                    <div className="flex gap-1">
                                        {[...Array(card.stars)].map((_, index) => (
                                            <AchivementStar key={index} color={card.color} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 sm:gap-3">
                                    <card.icon />
                                    <h2 className="text-base text-[#CACACA] font-normal">{card.titlee}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <div className="px-8 py-8 bg-[#F3FE00] rounded-[12px] md:max-w-[700px] lg:max-w-[1030px] max-w-[327px]">
                            <div className="flex md:flex-row flex-col gap-6 md:gap-18 items-center justify-center max-w-[1030px] px-2 md:px-30">
                                <div className="flex md:flex-row flex-col gap-1 md:gap-5 items-center">
                                    <h3 className="text-[#000] text-[40px] font-extrabold">224</h3>
                                    <p className="text-[#1F1F1F] text-base font-normal leading-[24px] max-w-[279px] md:max-w-[87px]">Reviews on 3 platforms</p>
                                </div>
                                <div className="flex md:flex-row flex-col gap-1 md:gap-4 items-center">
                                    <div className="flex gap-4">
                                        <h3 className="text-[#000] text-[40px] font-extrabold">4.9</h3>
                                        <div className="flex items-center gap-1.5">
                                            {[...Array(count)].map((_, index) => (
                                                <AchivementBlack key={index} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-[#1F1F1F] text-base font-normal leading-[24px]">Average Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}