import AboutStarIcon from "../../assets/icon/about-star-icon";
import ButtonHero from "../../component/common/header/button-hero";

export default function ProductHero() {
    return (
        <section className="sm:py-20 py-8 bg-[#0B0B0B]">
            <div className="container">
                <div className="absolute hidden md:block left-44 bottom-53">
                    <AboutStarIcon />
                </div>
                <div className="grid gap-8">
                    <div className="grid justify-center">
                        <div className="grid gap-3 max-w-[757px]">
                            <div className="flex justify-center items-center">
                                <h1 className="relative font-[Geologica] sm:text-7xl text-4xl font-extrabold leading-[50px] sm:leading-[92px] text-white text-center">PRODUCT STRATEGY CONSULTING</h1>
                            </div>
                            <div className="">
                                <p className="sm:text-xl text-base text-white font-normal text-center">We Help You Design With Purpose And Direction.Through Data-Driven Strategy, We Turn Your Vision Into A Roadmap For Lasting Success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <ButtonHero text='Book a Free Call' textt='Open' className='!px-5 border border-white hover:border-[#F3FE00] bg-black !text-[#FFF] hover:bg-black' />
                    </div>
                </div>
            </div>
        </section>
    )
}
