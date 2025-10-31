import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function OurMission(){
    return(
        <section className="sm:py-20 py-8 bg-black">  
            <div className="container">
                <div>
                    <div>
                        <HeroContant subheading={`our value`} classNameSub={`!pb-2 !text-start`} desc={`Together, we make perfect partners. We offer worry-free partnerships and deliver your vision into reality with our top-tier creativity. No fluff, just the good stuff.`} classNameDesc={`!text-start !text-[28px] !leading-[46px] sm:!leading-[40px] sm:!text-[24px]`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}