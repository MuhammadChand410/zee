import { Icon } from "lucide-react";
import GroupIcon from "../../assets/icon/group-icon";
import ClientsIcon from "../../assets/icon/clients-icon";
import UserIcon from "../../assets/icon/user-icon";
import SmileIcon from "../../assets/icon/smile-icon";

export default function AboutMission() {
    const MISSION_CARD = [
        {
            id: 1,
            Icon: GroupIcon,
            title: '1200+',
            desc: 'Successful Projects',
        },
        {
            id: 2,
            Icon: ClientsIcon,
            title: '200+',
            desc: 'Repeated Clients',
        },
        {
            id: 3,
            Icon: UserIcon,
            title: '30+',
            desc: 'UX Experts',
        },
        {
            id: 4,
            Icon: SmileIcon,
            title: '4.8+',
            desc: 'Stars On Google',
        },
    ]
    return (
        <section className="sm:py-20 py-8 bg-[#030303]">
            <div className="container">
                <div className="grid sm:gap-20 gap-8">
                    <div className="grid gap-4 sm:gap-6 max-w-[980px]">
                        <h2 className="text-[#F3FE00] text-sm font-normal">OUR MISSION</h2>
                        <p className="sm:text-[32px] text-[#FFF] text-[28px] font-[Geologica] leading-[42px] font-light sm:leading-[46px] ">ZeeFrames strives to be a leading UI/UX design agency known for innovative solutions that deliver exceptional user experiences and drive busi<span className="text-[#A3A3A3]">ness growth. We blend creativity and user-centered design to craft intuitive, standout products and partner with clients to achieve lasting impact.</span></p>
                    </div>
                    <div className="flex md:flex-row flex-col gap-16 justify-between">
                        <p className="text-sm font-normal text-[#FFF]">Since 2020, what we get...</p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-12 sm:gap-18 max-w-[512px] w-full">
                            {MISSION_CARD.map((card =>
                                <div key={card.id} className="relative grid md:justify-start justify-end">
                                    <span className={`absolute -top-9.5 ${card.id === 1 ? 'right-[36px]' : card.id === 2 ? 'right-[15px]' : card.id === 3 ? 'right-[13px]' : 'right-[1px]'}`}><card.Icon /></span>
                                    <div className="relative">
                                        <h2 className="text-[#F3FE00] text-[60px] font-bold">{card.title}</h2>
                                        <p className="text-[23px] text-[#C2C2C2] font-normal">{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}