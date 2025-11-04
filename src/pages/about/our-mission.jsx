import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function OurMission() {
    const OUR_VALUES = [
        {
            id: 1,
            span: '01',
            title: 'Crafted, not copied',
            desc: 'No two problems are exactly alike, that’s why we believe every project deserves a specific tailored solution, including yours.',
        },
        {
            id: 2,
            span: '02',
            title: 'Seamless collaboration',
            desc: 'We ensure all the deliverables are met timely because we love smooth-sailing projects. Our project managers are always ready to discuss and provide updates for you.',
        },
        {
            id: 3,
            span: '03',
            title: 'Stay flexible',
            desc: 'Just like cats, we are flexible. We remain adaptable to any urgent needs or changes as your project evolves.',
        },
        {
            id: 4,
            span: '04',
            title: 'Transparent pricing',
            desc: 'We provide a clear breakdown of invoices, so no hidden fees! Whether you do project-based or recurring partnership, you can cancel anytime.',
        },
    ]
    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                <div className="grid sm:gap-20 gap-8">
                    {/* <div>
                        <HeroContant subheading={`our value`} classNameSub={`!pb-2 !text-start`} desc={`Together, we make perfect partners. We offer worry-free partnerships and deliver your vision into reality with our top-tier creativity. No fluff, just the good stuff.`} classNameDesc={`!text-start !text-[28px] !leading-[46px] sm:!leading-[40px] sm:!text-[24px]`} />
                    </div> */}
                    <div className="grid gap-4 sm:gap-6 max-w-[980px]">
                        <h2 className="text-[#F3FE00] text-sm font-normal">our value</h2>
                        <p className="sm:text-[32px] text-[#FFF] text-[28px] font-[Geologica] leading-[42px] font-light sm:leading-[46px] ">Together, we make perfect partners. We offer worry-free partnerships and deliver your vis<span className="text-[#A3A3A3]">ion into reality with our top-tier creativity. No fluff, just the good stuff.</span></p>
                    </div>
                    <div className="grid gap-4 sm:gap-0">
                        {OUR_VALUES.map((card =>
                            <div className="flex md:flex-row flex-col justify-between gap-4 sm:gap-20 px-6 py-4 sm:py-8" key={card.id}>
                                <div className="flex items-center gap-3 sm:gap-20">
                                    <span className="text-lg text-[#FFF] font-normal">{card.span}</span>
                                    <h2 className="sm:text-[32px] max-w-[568px] text-[28px] text-[#FFF] font-extralight">{card.title}</h2>
                                </div>
                                <p className="text-sm max-w-[424px] text-[#FFF] font-normal leading-[21px]">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}