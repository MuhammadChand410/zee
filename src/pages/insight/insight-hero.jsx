import AboutStarIcon from "../../assets/icon/about-star-icon";
import SearchIcon from "../../assets/icon/search-icon";
export default function InsightHero() {
    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">

                <div className="grid gap-8">
                    <div className="grid justify-center">
                        <div className="grid relative gap-3 max-w-[880px]">
                            <div className="absolute left-[2px] bottom-8">
                                <AboutStarIcon />
                            </div>
                            <div className="flex justify-center items-center">
                                <h1 className="relative font-[Geologica] sm:text-7xl text-4xl font-extrabold leading-[50px] sm:leading-[92px] text-white text-center">STAY UPDATED WITH OUR INSIGHTS</h1>
                            </div>
                            <p className="sm:text-xl text-base text-white font-normal text-center">Read Our Thoughts And Insights On UI UX Design</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex md:gap-30 gap-2 items-center border border-[#2D2D2D] rounded-full w-fit py-1.5 pl-6 pr-1.5" style={{ background: "rgba(255, 255, 255, 0.10)" }}>
                            <input type="text" name="" id="" placeholder="Search Any Insights" className="text-[#FFF] text-base font-normal outline-none" style={{ opacity: "0.6" }} />
                            <div className="px-2 py-2 rounded-[100px]" style={{ background: "rgba(255, 255, 255, 0.10)" }}>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



