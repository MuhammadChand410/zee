import { BestI, BestIn, HeroBg, } from "../../assets/images"
import React, { useState } from "react";
import ButtonHero from "../../component/common/header/button-hero";
import ArrowBoxIcon from "../../assets/icon/arrow-box-icon";
import ArrowAbout from "../../assets/icon/arrow-about";
import TickIcon from "../../assets/icon/verified-icon";
import ViewIcon from "../../assets/icon/view-icon";
import WebIcon from "../../assets/icon/web-icon";
import AboutStarIcon from "../../assets/icon/about-star-icon";
export default function AboutHero() {
    const ABOUTHERO_CARD = [
        {
            id: 1,
            title: ' 4.9 Rating',
            desc: 'Reviewed on',
            icon: ArrowBoxIcon,
        },
        {
            id: 2,
            title: 'Best in',
            desc: 'Reviewed on',
            thumbnaill: BestI,
            thumbnail: BestIn,
            widthh: 22,
            heightt: 16,
            width: 22,
            height: 16,
            icon: ArrowBoxIcon,
        },
        {
            id: 3,
            title: '150 M Views',
            desc: 'Reviewed on',
            icon: ViewIcon,
        },
        {
            id: 4,
            title: 'Verified',
            desc: 'Reviewed on',
            icon: WebIcon,
        },
    ]
    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                {/* <div className="relative before:content-[''] before:absolute before:top-10 left-0 sm:before:left-20 before:w-[300px] before:h-[300px] before:from-[#202020] before:to-[#333333] before:rounded-[60%] before:blur-2xl before:-z-10"></div> */}
                <div className="absolute hidden md:block left-57 bottom-68">
                    <AboutStarIcon />
                </div>
                <div className="grid gap-8 sm:gap-16">
                    <div className="grid gap-7">
                        <div className="grid justify-center">
                            <div className="grid gap-3 max-w-[880px]">
                                <div className="flex justify-center items-center">
                                    <h1 className="relative font-[Geologica] sm:text-7xl text-4xl font-extrabold leading-[50px] sm:leading-[92px] text-white text-center">ELITE DESIGN PARTNERS</h1>
                                </div>
                                <p className="sm:text-xl text-base text-white font-normal text-center">We Are The Best Product Design Agency For Startups. We Excel In UI/UX Design, Branding, Web Development & Committed To 100% Satisfaction With Every Project.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <ButtonHero text='Request a Proposal Today' textt='Open' className='!px-5 border border-white hover:border-[#F3FE00] bg-black !text-[#FFF] hover:bg-black' />
                        </div>
                    </div>
                    <div className="grid justify-center">
                        <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
                            {ABOUTHERO_CARD.map((card) => (
                                <div
                                    className="bg-[#191919] flex md:flex-col flex-row  gap-4 border border-[#303030] px-5 py-3 rounded-[16px]"
                                    key={card.id}
                                >
                                    <div className="flex items-center justify-center gap-1 md:gap-2.5">
                                        <div className="flex items-center gap-1 md:gap-2">
                                            <h2 className="text-lg text-[#FFF] text-start md:text-center font-semibold">
                                                {card.title}
                                            </h2>

                                            {card.id === 4 && (
                                                <div className="shrink-0 flex">
                                                    <TickIcon />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-1.5">
                                            <img
                                                src={card.thumbnaill}
                                                alt=""
                                                width={card.widthh}
                                                height={card.heightt}
                                            />

                                            <img
                                                src={card.thumbnail}
                                                alt=""
                                                width={card.width}
                                                height={card.height}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid justify-center">
                                        <div className="px-1.5 py-1 flex gap-2 items-center justify-between rounded-full border border-[#3F3F3F]">
                                            <span className="px-2 py-1 flex items-center rounded-full bg-[#FFF]">
                                                <card.icon />
                                            </span>
                                            <p className="text-[#CACACA] text-sm font-normal">{card.desc}</p>
                                            <span className="px-3 py-1 border border-[#B5B5B5] rounded-full">
                                                <ArrowAbout />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



