import React, { useState } from "react";
import UxHero from "./hero";
import HeroContant from "../hero-contant/hero-contant";
import ImpactIcon from "../../../assets/icon/impact-icon";
import { ConsultingImage, ConsultingOper, ImpactImage } from "../../../assets/images";
import FaqIcon from "../../../assets/icon/faq-icon";
import ContactUs from "../header/contact-us";



export default function Services({ heading, desc, impact_heading, impact_desc, process_heading, why_heading, impactListing, processCards, faq }) {
    const [open, setOpen] = useState(0)
    const handleClick = (index) => {
        setOpen(prev => prev === index ? null : index)
    }
    return (
        <>
            <UxHero
                hero_heading={heading}
                hero_desc={desc} />
            <section className="md:py-20 py-8 bg-[#0B0B0B]">
                <div className="container">
                    <div className="grid grid-cols-1 md:[grid-template-columns:minmax(100px,502px)_minmax(100px,659px)] gap-8 md:gap-14">
                        <div>
                            <img src={ImpactImage} className="w-full" alt="impact-image" width={502} height={361} loading="lazy" />
                        </div>
                        <div>
                            <div className="">
                                <HeroContant subheading={`IMPACT`} classNameSub={`!pb-8 !text-start`} heading={impact_heading} classNamehead={`md:!leading-[48px] !max-w-[530px] !leading-[40px] !text-start md:!text-[40px] !text-[28px]`} desc={impact_desc} classNameDesc={`!font-[Plus Jakarta Sans] !leading-[21px] !pb-8 !text-start`} />
                                <div className="grid grid-cols-1 md:[grid-template-columns:minmax(100px,270px)_minmax(100px,328px)] gap-2">
                                    {impactListing.map((card =>
                                        <div className="flex items-center gap-3 pb-2" key={card.id}>
                                            <ImpactIcon />
                                            <h2 className="text-sm font-medium leading-[21px] text-[#FFFFFF]">{card.title}</h2>
                                        </div >

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:py-20 py-8 bg-[#090909]">
                <div className="container">
                    <div className="grid md:gap-20 gap-8">
                        <div className="flex justify-center">
                            <HeroContant subheading={`OUR PROCESS`} classNameSub={`md:!pb-8 !pb-4`} heading={process_heading} classNamehead={`md:!leading-[48px] !leading-[40px]`} />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
                            {processCards.map((card =>
                                <div className="group grid gap-1 px-5 py-6 rounded-xl bg-[#121212] hover:bg-[#F3FE00] transition-all duration-300 ease-in-out" key={card.id}>
                                    <div className="flex justify-between">
                                        <card.icon />
                                        <card.icons />
                                    </div>
                                    <div className="grid gap-4 font-[Plus Jakarta Sans] transition-all duration-300 ease-in-out">
                                        <h2 className="text-lg font-medium text-[#FFFFFF] leading-[21px] group-hover:text-[#000000] transition-all duration-300 ease-in-out">
                                            {card.title}
                                        </h2>
                                        <p className="text-sm text-[#BDBDBD] font-normal group-hover:text-[#000000] transition-all duration-300 ease-in-out">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:py-20 py-8 bg-[#0B0B0B]">
                <div className="container">
                    <div className="grid grid-cols-1 md:[grid-template-columns:minmax(100px,659px)_minmax(100px,502px)] gap-8 md:gap-20">
                        <div className=" max-w-[660px]">
                            <h2 className="md:text-[40px] pb-4 text-[28px] text-[#FFFFFF] font-bold font-[Geologica] leading-[48px]">{why_heading}</h2>
                            <div className="flex flex-col gap-4">
                                {faq.map((faq, index) => (
                                    <div key={faq.id} className="flex  gap-3 px-3 py-3 bg-[#121212] rounded-lg" >
                                        <FaqIcon />
                                        <div className="pt-1.5">
                                            <button
                                                onClick={() => handleClick(index)}
                                                className={`pb-1 cursor-pointer`}>
                                                <span className="text-start flex text-base font-semibold font-[Plus Jakarta Sans] text-[#FFFFFF] leading-[21px]">{faq.question}</span>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${open === index ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                                <p className="text-sm font-normal font-[Plus Jakarta Sans] text-[#DCDCDC] leading-[20px]">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative w-fit max-w-[502px]">
                            <img
                                src={ConsultingImage}
                                className="w-full"
                                alt="consulting-image"
                                width={502}
                                height={405}
                                loading="lazy"
                            />

                            <img
                                src={ConsultingOper}
                                alt="consulting-oper"
                                width={286}
                                height={120}
                                className="absolute top-40 md:top-64 left-0 z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <ContactUs />
        </>
    )
}