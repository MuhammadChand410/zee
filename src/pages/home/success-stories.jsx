import { Link } from "react-router-dom";
import { SuccessFive, SuccessFour, SuccessImage, SuccessSix, SuccessThree, SuccessTwo } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";
import Button from "../../component/common/header/button";

export default function SuccessStories() {
    const SUCCESS_IMAGE = [
        {
            id: 1,
            thumbnail: SuccessImage,
            title: 'Smart Money Solutions',
            desc: 'Our finance app makes money management simple and secure. It helps users stay in control of their spending with clear, intuitive features.',
        },
        {
            id: 2,
            thumbnail: SuccessTwo,
            title: 'Forecast Made Clear',
            desc: 'The weather app delivers real-time forecasts with accuracy you can trust. Clean visuals ensure updates are quick to read anytime, anywhere.',
        },
        {
            id: 3,
            thumbnail: SuccessThree,
            title: 'Effortless Shopping Flow',
            desc: 'This ecommerce platform creates a smooth shopping journey for every user. From browsing to checkout, every step feels seamless and reliable.',
        },
        {
            id: 4,
            thumbnail: SuccessFour,
            title: 'Connect Beyond Boundaries',
            desc: 'Neowallet is an innovative and user-friendly e-wallet application designed to streamline digital transactions and enhance the overall financial management.',
        },
        {
            id: 5,
            thumbnail: SuccessFive,
            title: 'Style Made Simple',
            desc: 'Our clothing ecommerce site makes fashion accessible and easy to explore. Customers can browse collections and shop confidently with just a few clicks.',
        },
        {
            id: 6,
            thumbnail: SuccessSix,
            title: 'Smart Shipping Made',
            desc: 'Explore how Orbix Studio redesigned Fastgo’s scooter rental app to drive adoption among urban commuters. Optimized UX for micromobility, safety, and speed.',
        },
    ]
    return (
        <section className="py-8 sm:py-20 bg-black">
            <div className="container">
                <div className="grid gap-6 sm:gap-15">
                    <div className="flex justify-center">
                        <div className="max-w-[596px]">
                            <HeroContant subheading='HOW WE HELPED OTHERS SUCCEED' heading='Our Creative Showcase' classNamehead={`!leading-[40px]`} desc='We have become experts in creating top-notch digital products. We design beautifully and
                             develop excellently. And we care deeply about what we do.' classNameDesc={`md:!leading-normal !leading-[21px]`}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                        {SUCCESS_IMAGE.map((card) => (
                            <div className={`${card.id % 2 === 0 ? 'sm:mt-30' : ''}`} key={card.id}>
                                <div className="grid gap-10">
                                    <img src={card.thumbnail} alt="success-image" width={600} height={685} loading="lazy" />
                                    <div className="grid gap-2 sm:gap-2.5">
                                        <h2 className="sm:text-[28px] text-[24px] font-[Inter Tight] font-semibold text-white">{card.title}</h2>
                                        <p className="text-base font-normal text-[#FFF] font-[Inter Tight]">{card.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className="flex justify-center py-6 sm:py-10">
                        <div className="max-w-[494px] grid gap-6">
                            <HeroContant heading='Your project here' classNamehead='!text-[24px] !pb-4'
                                desc={
                                    <>
                                        The proof is in our work. Check out{" "}
                                        <Link className="text-[#F3FE00] underline">our case studies</Link> to learn how our product development services can transform your business.

                                    </>
                                }
                            />
                            <div className="flex justify-center">
                                <div className='group w-[230px] flex justify-center'>
                                    <Button text="Book a discovery call" textt='Lets Talk' className='!flex group-hover:!justify-center' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}