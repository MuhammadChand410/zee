import { reach } from "yup";
import { ScrollingImage } from "../../assets/images";
import DotIcon from "../../assets/icon/dot-icon";
import HeroContant from "../../component/common/hero-contant/hero-contant";

const HORIZONTAL_SCROLLING = [
    {
        id: 1,
        thumbnail: ScrollingImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 2,
        thumbnail: ScrollingImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 3,
        thumbnail: ScrollingImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 4,
        thumbnail: ScrollingImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 5,
        thumbnail: ScrollingImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
    {
        id: 6,
        thumbnail: ScrollingImage,
        title: '20+ GenAI UX patterns, examples and implementation tactics',
        desc: 'A shared language for product teams to build usable, intelligent and safe GenAI...',
        time: '7 min read',
        date: 'Jan 23, 2025',
    },
]
export default function HorizontalScrolling() {
    return (
        <section className="md:py-20 py-8 bg-black">
            <div className="container">
                <div className="grid gap-8 md:gap-4">
                    <div>
                         <HeroContant subheading={`Latest insights`} classNameSub={`!pb-3 !text-start`} heading={`Our Recent Articles`} classNamehead={`!text-start`}/>
                    </div>
                    <div className="main-animate max-w-full overflow-hidden">
                        <div className="slider">
                            <div className="slide-trackkk flex gap-12">
                                {HORIZONTAL_SCROLLING.map((card =>
                                    <div className="slideee rounded-[16px]" style={{ border: "1px solid rgba(255, 255, 255, 0.20)", }} key={card.id}>
                                        <img src={card.thumbnail} className="w-full" alt="scrolling-image" width={382} height={246} loading="lazy" />
                                        <div className="px-6 py-6 rounded-b-[16px] " style={{
                                            background: "rgba(255, 255, 255, 0.08)",
                                            backdropFilter: "blur(6px)"
                                        }}>
                                            <h2 className="md:text-[22px] font-[Geologica] text-[#FFF] font-semibold pb-3">{card.title}</h2>
                                            <p className="text-base font-normal text-[#FFF] leading-[25px] pb-4 md:pb-6">{card.desc}</p>
                                            <div className="flex gap-2 items-center">
                                                <span className="text-xs text-[#FFF] font-normal">{card.time}</span>
                                                <DotIcon />
                                                <span className="text-xs text-[#FFF] font-normal">{card.date}</span>
                                            </div>
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