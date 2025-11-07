import { useRef } from "react";
import { ScrollingImage } from "../../assets/images";
import DotIcon from "../../assets/icon/dot-icon";
import HeroContant from "../../component/common/hero-contant/hero-contant";
import SliderArrow from "../../assets/icon/slider-arrowj";
import SliderLeft from "../../assets/icon/slider-arrow-left";

const HORIZONTAL_SCROLLING = [
    {
        id: 1,
        thumbnail: ScrollingImage,
        title: "20+ GenAI UX patterns, examples and implementation tactics",
        desc: "A shared language for product teams to build usable, intelligent and safe GenAI...",
        time: "7 min read",
        date: "Jan 23, 2025",
    },
    {
        id: 2,
        thumbnail: ScrollingImage,
        title: "20+ GenAI UX patterns, examples and implementation tactics",
        desc: "A shared language for product teams to build usable, intelligent and safe GenAI...",
        time: "7 min read",
        date: "Jan 23, 2025",
    },
    {
        id: 3,
        thumbnail: ScrollingImage,
        title: "20+ GenAI UX patterns, examples and implementation tactics",
        desc: "A shared language for product teams to build usable, intelligent and safe GenAI...",
        time: "7 min read",
        date: "Jan 23, 2025",
    },
    {
        id: 4,
        thumbnail: ScrollingImage,
        title: "20+ GenAI UX patterns, examples and implementation tactics",
        desc: "A shared language for product teams to build usable, intelligent and safe GenAI...",
        time: "7 min read",
        date: "Jan 23, 2025",
    },

];

export default function AdminScrolling() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 400;
        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="md:py-20 py-8 bg-black relative">
            <div className="container">
                <div className="grid gap-8 md:gap-4 relative">
                    <div className="flex md:flex-row md:gap-5 gap-4 flex-col justify-between items-start md:items-center">
                        <HeroContant
                            subheading="LATEST INSIGHTS"
                            classNameSub="!pb-3 !text-start"
                            heading="Our Recent Articles"
                            classNamehead="!text-start"
                        />
                        <div className="flex w-fit gap-3 ">
                            <button
                                onClick={() => scroll("left")}
                                className="px-5 py-2.5 rounded-full bg-white/30 hover:bg-[#F3FE00] transition"
                            >
                                <SliderLeft size={22} className="" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="px-5 py-2.5 rounded-full bg-white/30 hover:bg-[#F3FE00] transition"
                            >
                                <SliderArrow size={22} className="" />
                            </button>
                        </div>
                    </div>


                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-2"
                    >
                        {HORIZONTAL_SCROLLING.map((card) => (
                            <div
                                key={card.id}
                                className="w-[351px] max-w-[351px] flex-shrink-0 rounded-[16px]"
                                style={{
                                    border: "1px solid rgba(255, 255, 255, 0.20)",
                                }}
                            >
                                <img
                                    src={card.thumbnail}
                                    className="w-full h-auto"
                                    alt="scrolling-image"
                                    width={351}
                                    height={246}
                                    loading="lazy"
                                />
                                <div
                                    className="px-6 py-6 rounded-b-[16px]"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.08)",
                                        backdropFilter: "blur(6px)",
                                    }}
                                >
                                    <h2 className="md:text-[22px] font-[Geologica] text-[#FFF] font-semibold pb-3">
                                        {card.title}
                                    </h2>
                                    <p className="text-base font-normal text-[#FFF] leading-[25px] pb-4 md:pb-6">
                                        {card.desc}
                                    </p>
                                    <div className="flex gap-2 items-center">
                                        <span className="text-xs text-[#FFF] font-normal">
                                            {card.time}
                                        </span>
                                        <DotIcon />
                                        <span className="text-xs text-[#FFF] font-normal">
                                            {card.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
