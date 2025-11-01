import AchivementBlack from "../../assets/icon/achivement-black";
import AchivementClutch from "../../assets/icon/achivement-clutch";
import AchivementStar from "../../assets/icon/achiviment-star";

export default function Achivements() {
    const ACHIVEMENT_STAR = [
        {
            id: 1,
            title: 'Reviewed on',
            titlee: '41 Reviews'
        },
        {
            id: 2,
            title: 'Reviewed on',
            titlee: '41 Reviews'
        },
        {
            id: 3,
            title: 'Reviewed on',
            titlee: '41 Reviews'
        },

    ]
    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                <div className="grid gap-8 sm:gap-18">
                    <div className="flex md:flex-row flex-col items-center justify-center gap-8 sm:gap-18">
                        {ACHIVEMENT_STAR.map((card =>
                            <div className="grid gap-3" key={card.id}>
                                <div className="flex items-center gap-8 sm:gap-3">
                                    <h2 className="text-base text-[#CACACA] font-normal">{card.title}</h2>
                                    <div className="flex gap-1">
                                        <AchivementStar />
                                        <AchivementStar />
                                        <AchivementStar />
                                        <AchivementStar />
                                        <AchivementStar />
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 sm:gap-3">
                                    <AchivementClutch />
                                    <h2 className="text-base text-[#CACACA] font-normal">{card.titlee}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <div className="px-8 py-8 bg-[#F3FE00] rounded-[12px]">
                            <div className="flex md:flex-row flex-col gap-6 sm:gap-18 items-center justify-center">
                                <div className="flex gap-5 items-center">
                                    <h3 className="text-[#000] text-[40px] font-extrabold">224</h3>
                                    <p className="text-[#1F1F1F] text-base font-normal leading-[24px]">Reviews on <br /> 3 platforms</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <h3 className="text-[#000] text-[40px] font-extrabold">4.9</h3>
                                    <div className="flex items-center gap-1.5">
                                        <AchivementBlack />
                                        <AchivementBlack />
                                        <AchivementBlack />
                                        <AchivementBlack />
                                        <AchivementBlack />
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