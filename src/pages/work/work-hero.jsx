import AboutStarIcon from "../../assets/icon/about-star-icon";
import ButtonHero from "../../component/common/header/button-hero";

export default function WorkHero() {
    return (
        <section className="sm:py-20 py-8 bg-[#090909]">
            <div className="container">
                <div className="absolute hidden md:block left-47 bottom-52">
                    <AboutStarIcon />
                </div>
                <div className="grid gap-8">
                    <div className="grid justify-center">
                        <div className="grid gap-3 max-w-[717px]">
                            <div className="flex justify-center items-center">
                                <h1 className="relative font-[Geologica] sm:text-7xl text-4xl font-extrabold leading-[50px] sm:leading-[92px] text-white text-center">WE’re PROUD OF
                                    WHAT WE’VE BUILT.</h1>
                            </div>
                            <div className="flex justify-center">
                                <p className="sm:text-xl max-w-[571px]  text-base text-white font-normal text-center">No Matter The Industry You’re In, Or The Asset You Need, We Can Design It For You</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <ButtonHero text='Schedule Call' textt='Open' className='!px-5 border border-white hover:border-[#F3FE00] bg-black !text-[#FFF] hover:bg-black' />
                    </div>
                </div>
            </div>
        </section>
    )
}
