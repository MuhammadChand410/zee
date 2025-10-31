import { Icon } from "lucide-react";
import GroupIcon from "../../assets/icon/group-icon";
import HeroContant from "../../component/common/hero-contant/hero-contant";
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
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                <div className="grid sm:gap-20 gap-8">
                    <div>
                        <HeroContant subheading='Our Mission' classNameSub={`!pb-6 sm:!pb-4 !text-start`} desc={`ZeeFrames strives to be a leading UI/UX design agency known for innovative solutions that deliver exceptional user experiences and drive business growth. We blend creativity and user-centered design to craft intuitive, standout products and partner with clients to achieve lasting impact.`} classNameDesc={`!text-start !max-w-[981px] !text-[30px] sm:!text-[24px] !font-light !w-full !leading-[40px]`} />
                    </div>
                    <div className="flex md:flex-row flex-col justify-between">
                        <p className="text-sm font-normal text-[#FFF]">Since 2020, what we get...</p>
                        <div className="grid sm:items-center justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-18">
                                {MISSION_CARD.map((card =>
                                    <div key={card.id} className="">
                                        <card.Icon />
                                        <div className="-mt-21 -left-23 z-0 relative">
                                            <h2 className="text-[#F3FE00] text-[60px] font-bold">{card.title}</h2>
                                            <p className="text-[23px] text-[#C2C2C2] font-normal">{card.desc}</p>
                                        </div>
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