import ArrowBlackIcon from "../../assets/icon/arrow-black-icon";
import DotIcon from "../../assets/icon/dot-icon";
import { BlogsOne, BlogsThree, BlogsTwo } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function BlogsSection() {
    const BLOGS_IMGAES = [
        {
            id: 1,
            thumbnail: BlogsOne,
            sub: 'ZeeFrames',
            title: '20+ GenAI UX patterns, examples and implementation tactics',
            desc: 'A shared language for product teams to build usable, intelligent and safe GenAI experiences...',
            time: '7 min read',
            date: 'Jan 23, 2025',
        },
        {
            id: 2,
            thumbnail: BlogsTwo,
            sub: 'ZeeFrames',
            title: 'Skipping Figma, human after all, Figma grid, accessibility as an afterthought',
            desc: 'Weekly curated resources for designers — thinkers and makers.',
            time: '7 min read',
            date: 'Jan 23, 2025',
        },
        {
            id: 3,
            thumbnail: BlogsThree,
            sub: 'ZeeFrames',
            title: 'Is your creative character being sacrificed to Algorithm, Inc.?',
            desc: 'AI is changing how we work. Here’s why and how we must preserve the human spirit that drives...',
            time: '7 min read',
            date: 'Jan 23, 2025',
        },
    ]
    return (
        <section className="py-8 sm:py-20 bg-[#0B0B0B]">
            <div className="container">
                <div className="grid gap-8 sm:gap-12">
                    <div className="flex sm:flex-row flex-col  justify-between">
                        <div className="grid sm:items-center justify-center">
                            <div className="max-w-[410px]">
                                <HeroContant subheading='Our Insights' classNameSub='sm:!text-start !text-center !pb-4 sm:!pb-8' heading='Insights That Inspire Vision Forward' classNamehead='sm:!text-start !text-center sm:!leading-[44px] !leading-[40px]' />
                            </div>
                        </div>
                        <div className="grid sm:items-center justify-center">
                            <button className="flex gap-3 items-center py-3 px-5 bg-white rounded-full text-[#0D0D0D] text-base font-semibold ">
                                Explore More
                                <ArrowBlackIcon />
                            </button>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:gap-8">
                        {BLOGS_IMGAES.map((card =>
                            <div className="border border-[#2D2D2D] bg-[#121212] rounded-[16px]" key={card.id}>
                                <img src={card.thumbnail} className="w-full" alt="blogs-image" width={392} height={227} />
                                <div className="grid gap-5 px-6 py-6 ">
                                    <span className="text-xs font-normal text-[#FFF] ">{card.sub}</span>
                                    <div className="grid gap-2">
                                        <h2 className="text-2xl text-[#FFF] font-medium">{card.title}</h2>
                                        <p className="text-base font-normal text-[#FFF] leading-[24px]">{card.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <time className="text-xs font-normal text-[#FFF]">{card.time}</time>
                                        <DotIcon />
                                        <time className="text-xs font-normal text-[#FFF]">{card.date}</time>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}