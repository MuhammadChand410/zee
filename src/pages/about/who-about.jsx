import ClientIcon from "../../assets/icon/client-icon";
import TeamIcon from "../../assets/icon/team-icon";
import TestimotionalIcon from "../../assets/icon/testimotional-icon";
import { WhooImage } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function WhoAbout() {
    const WHOO_WE_ARE = [
        {
            id: 1,
            icon: TeamIcon,
            title: 'Our Team',
            desc: 'Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various geographies.',
        },
        {
            id: 2,
            icon: ClientIcon,
            title: 'Client-Centric Design',
            desc: 'At ZeeFrames, our unique design approach focuses on understanding client needs and collaborating to create exceptional, goal-driven digital various products.',
        },
        {
            id: 3,
            icon: TestimotionalIcon,
            title: 'Testimonials Showcase',
            desc: 'Don’t just take our word for it—see what satisfied clients say. Explore testimonials and case studies showcasing how our design solutions help businesses goals.',
        },
    ]
    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                <div className="flex lg:flex-row flex-col items-start md:items-center gap-8 lg:gap-20">
                    <div className="">
                        <img
                            src={WhooImage}
                            alt="who-image"
                            width={390}
                            height={392}
                            loading="lazy"
                        />
                    </div>
                    <div className="grid max-w-[680px] gap-12">
                        <div>
                            <HeroContant subheading='ABOUT' classNameSub='!text-start' heading='Who We Are' classNamehead={`!text-start`} desc='ZeeFrames is a specialized UI UX design agency with a focus on creating exceptional digital experiences. ZeeFrames is committed to delivering the best user experience possible for your business.' classNameDesc={`!text-start`} />
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                            {WHOO_WE_ARE.map((card =>
                                <div className="grid gap-5 px-4 py-4 bg-[#0B0B0B] rounded-[16px] border border-[#292929]" key={card.id}>
                                    <card.icon />
                                    <div className="grid gap-2">
                                        <h2 className="text-base font-normal text-[#FFF]">{card.title}</h2>
                                        <p className="text-sm font-normal text-[#DEDEDE] font-[Plus Jakarta Sans] leading-[21px]">{card.desc}</p>
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