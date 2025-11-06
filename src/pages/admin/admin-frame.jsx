import { section } from "framer-motion/client";
import { AdminFrameImage, TrendingBlogImage } from "../../assets/images";
import DotIcon from "../../assets/icon/dot-icon";

export default function AdminFrame() {
    const TRENDING_BLOGS = [
        {
            id: 1,
            thumbnail: TrendingBlogImage,
            sub: 'ZeeFrames',
            title: '20+ GenAI UX patterns, examples and implementation tactics',
            time: '7 min read',
            date: 'Jan 23, 2025',
        },
        {
            id: 2,
            thumbnail: TrendingBlogImage,
            sub: 'ZeeFrames',
            title: '20+ GenAI UX patterns, examples and implementation tactics',
            time: '7 min read',
            date: 'Jan 23, 2025',
        },
        {
            id: 3,
            thumbnail: TrendingBlogImage,
            sub: 'ZeeFrames',
            title: '20+ GenAI UX patterns, examples and implementation tactics',
            time: '7 min read',
            date: 'Jan 23, 2025',
        },
        {
            id: 4,
            thumbnail: TrendingBlogImage,
            sub: 'ZeeFrames',
            title: '20+ GenAI UX patterns, examples and implementation tactics',
            time: '7 min read',
            date: 'Jan 23, 2025',
        },
        {
            id: 5,
            thumbnail: TrendingBlogImage,
            sub: 'ZeeFrames',
            title: '20+ GenAI UX patterns, examples and implementation tactics',
            time: '7 min read',
            date: 'Jan 23, 2025',
        },
    ]
    return (
        <section className="md:py-20 py-8 bg-black">
            <div className="container">
                <div className="flex md:flex-row flex-col gap-8 md:gap-10">
                    <div className="max-w-[820px] grid gap-10">
                        <div className=" flex flex-col gap-2">
                            <h2 className="text-lg text-[#ECECEC] font-medium">Let me paint you a picture of Junior Me....</h2>
                            <p className="text-base font-normal leading-[24px] text-[#ECECEC] font-[Plus Jakarta Sans]">I’d whip up a design, slap together a shiny mockup, and send it off to the developers, feeling pretty damn proud of myself. I’d whip up a design, slap together a shiny mockup, and send it off to the developers, feeling pretty damn proud of myself.</p>
                            <p className="text-base text-[#ECECEC] font-medium">Junior Me thought, “Hey, if it looks good, we’re good, right?”</p>
                            <h3 className="text-[22px] font-medium text-[#ECECEC]">Wrong. So very wrong.</h3>
                            <p className="text-base text-[#ECECEC] font-normal leading-[24px] font-[Plus Jakarta Sans]">Fast-forward to now, and my deliverables are unrecognizable compared to those plain mockups of the past. I’ve learned — sometimes the hard way — that the job doesn’t stop at making things look pretty.
                                <br /><br />
                                As a product designer and now product manager, I’ve realized that great deliverables anticipate problems, answer questions, and make the dev team’s life a whole lot easier.
                                <br /><br />
                                Here are five lessons I’ve learned about deliverables that Junior Me could’ve never imagined.</p>
                            <p className="text-base text-[#ECECEC] font-normal leading-[24px] font-[Plus Jakarta Sans]">Fast-forward to now, and my deliverables are unrecognizable compared to those plain mockups of the past. I’ve learned — sometimes the hard way — that the job doesn’t stop at making things look pretty.
                                <br /> <br />
                                As a product designer and now product manager, I’ve realized that great deliverables anticipate problems, answer questions, and make the dev team’s life a whole lot easier.
                                <br /><br />
                                Here are five lessons I’ve learned about deliverables that Junior Me could’ve never imagined.</p>
                        </div>
                        <div>
                            <img src={AdminFrameImage} alt="frame-image" width={900} height={439} />
                        </div>
                        <div className="grid gap-2">
                            <h2 className="text-lg text-[#ECECEC] font-medium">Best practices for working with big data tables</h2>
                            <p className=""> <span className="text-base text-[#ECECEC] font-normal font-[Plus Jakarta Sans] leading-[24px]">Designing tables for large datasets is a whole different story. Big data tables need optimized designs and smart interactions to make sure users can navigate and analyze data efficiently. Here are some best practices to keep in mind when working with big data tables:</span>
                                <br /><br />
                                <span className="text-lg text-[#ECECEC] font-medium font-[Plus Jakarta Sans] leading-[24px]"> 1. Enable advanced sorting and filtering <br />
                                    When you’re working with big data sets, it’s important to have effective ways to sift through all that information. Sorting and filtering are key tools for helping users find relevant data quickly.</span>
                                <br /><br />
                                <span className="text-base text-[#ECECEC] font-semibold font-[Plus Jakarta Sans] leading-[24px]"> Multi-level sorting: Let users sort by multiple columns at the same time. For instance, users might want to sort first by department, then by revenue and then by date. <br />
                                    Dynamic filters: give users the option to filter as they type or select options. Filters should be simple to understand, easy to use and flexible, so users can easily customize their views of the data.</span>
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="sticky top-24 max-w-[361px]">
                            <h3 className="pb-6 text-[24px] text-[#FFF] font-semibold">Trending Blogs</h3>
                            <div className="grid gap-5">
                                {TRENDING_BLOGS.map((card =>
                                    <div className="flex items-center gap-3 px-1.5 py-1.5" key={card.id} style={{
                                        borderRadius: "16px",
                                        border: "1px solid rgba(255, 255, 255, 0.20)",
                                        background: " rgba(255, 255, 255, 0.08)",
                                        backdropFilter: "blur(6px)"
                                    }}>
                                        <img src={card.thumbnail} alt="blog-image" width={104} height={104} loading="lazy" />
                                        <div className="">
                                            <p className="pb-3 text-xs font-normal text-white">{card.sub}</p>
                                            <h4 className="pb-3 text-sm font-medium text-white font-[Geologica]">{card.title}</h4>
                                            <div className="flex gap-2 items-center">
                                                <time className="text-xs text-white font-normal">{card.time}</time>
                                                <DotIcon />
                                                <time className="text-xs text-white font-normal">{card.date}</time>
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