import HeroIcon from "../../assets/icon/hero-icon"
import HeroStarIcon from "../../assets/icon/hero-star-icon";
import { AdiQat, Cisco, Figma, FigmaB, HeroBg, NissanMotor, Repurpose, Sketch, Trafilea, Vector, W, WalMart, Xd, YallaMotor } from "../../assets/images"


import React, { useState } from "react";
export default function HeroSectin({
    className,
    startIcon,
    endIcon,
    onClick,
    type = "submit",
}) {

    const HERO_ICONS = [
        {
            id: 1,
            thumbnail: Figma
        },
        {
            id: 2,
            thumbnail: Sketch
        },
        {
            id: 3,
            thumbnail: Xd
        },
        {
            id: 4,
            thumbnail: FigmaB
        },
        {
            id: 5,
            thumbnail: W
        },
        {
            id: 6,
            thumbnail: Vector
        },
    ]

    const SLIDER_IMAGE = [
        {
            id: 1,
            thumbnail: WalMart,
            width: 134,
            height: 32,
        },

        {
            id: 2,
            thumbnail: Trafilea,
            width: 137,
            height: 32,
        },
        {
            id: 3,
            thumbnail: YallaMotor,
            width: 152,
            height: 32,
        },
        {
            id: 4,
            thumbnail: NissanMotor,
            width: 142,
            height: 32,
        },
        {
            id: 5,
            thumbnail: Repurpose,
            width: 196,
            height: 32,
        },
        {
            id: 6,
            thumbnail: WalMart,
            width: 134,
            height: 32,
        },
        {
            id: 7,
            thumbnail: Trafilea,
            width: 137,
            height: 32,
        },
        {
            id: 8,
            thumbnail: YallaMotor,
            width: 152,
            height: 32,
        },
        {
            id: 9,
            thumbnail: NissanMotor,
            width: 142,
            height: 32,
        },
        {
            id: 10,
            thumbnail: Repurpose,
            width: 196,
            height: 32,
        },
        {
            id: 11,
            thumbnail: AdiQat,
            width: 56,
            height: 40,
        },
        {
            id: 12,
            thumbnail: Cisco,
            width: 60,
            height: 32,
        },

    ]
    return (
        <section className="py-14 bg-black">
            <div className="container">
                <div className="relative before:content-[''] before:absolute before:top-10 before:left-20 before:w-[300px] before:h-[300px] before:from-[#202020] before:to-[#333333] before:rounded-[60%] before:blur-2xl before:-z-10"></div>

                <div className="absolute hidden md:block left-32 bottom-12">
                    <img src={HeroBg} alt="beforecircle" height={435} width={429} />
                </div>

                <div className="absolute hidden md:block left-31 bottom-10">
                    <HeroStarIcon />
                </div>
                <div className="grid gap-7 sm:gap-10 pb-5 sm:pb-10">
                    <div className="grid justify-center">
                        <div
                            style={{
                                border: "1px solid rgba(60, 60, 60, 0.4)",
                                background: "var(--Secondary-secondary-500, #0B0B0B)",
                            }}
                            className="flex sm:flex-row flex-col gap-3 rounded-2xl w-fit px-2 py-2">
                            <div className="flex gap-3">
                                <HeroIcon />
                                <p className="text-base font-normal text-white text-center">
                                    Trusted by startups to craft $100M+ designs with
                                </p>
                            </div>
                            <div className="flex gap-1 px-2">
                                {HERO_ICONS.map(card => (
                                    <div className="-mr-3 " key={card.id}>
                                        <img src={card.thumbnail} alt="image" width={32} height={32} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid justify-center">
                        <div className="grid gap-2 max-w-[900px]">
                            <div className="flex justify-center items-center">
                                <h1 className="relative sm:text-7xl text-4xl font-extrabold leading-[50px] sm:leading-[96px] text-white text-center">CREATIVE INTELLIGENCE IN EVERY PIXEL <span className="absolute hidden md:block -right-12 top-3 bg-[#F3FE00] text-[#0B0B0B] font-bold px-2 py-1.5 rounded-lg text-sm rotate-8">
                                    NO CODE
                                </span></h1>
                            </div>
                            <p className="sm:text-xl text-base text-white font-normal text-center">We craft <span className="text-xl font-normal text-[#F3FE00]">stunning</span> designs for businesses worldwide.</p>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-center pb-1 sm:pb-7">
                        <button
                            type={type}
                            onClick={onClick}
                            className={`group relative flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-[#FFF] bg-[#FFF] text-black text-base font-semibold hover:bg-black hover:text-[#FFF] transition-all duration-300 overflow-hidden ${className || ""}`}
                        >
                            <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full">
                                Schedule Call
                            </span>

                            <span className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100 translate-x-full group-hover:translate-x-0">
                                Let's Talk
                            </span>

                            {(startIcon || endIcon) && (
                                <span className="w-5 h-5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                    {endIcon || startIcon}
                                </span>
                            )}
                        </button>
                        {/* <Button text='Schedule Call' textt={`Let's Talk`} className='!bg-white  !border !border-[#FFF]  !text-black hover:bg-black hover:text-[#FFF]'/> */}

                        <button
                            type={type}
                            onClick={onClick}
                            className={`group relative flex items-center justify-center gap-3 px-5 py-3 rounded-full border border-white hover:border-[#F3FE00] bg-black text-[#FFF] text-base font-semibold hover:bg-black transition-all duration-300 overflow-hidden ${className || ""}`}
                        >

                            <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full">
                                © 2025 Work
                            </span>

                            <span className="absolute opacity-0  transition-all duration-300 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 ">
                                Open
                            </span>

                            {(startIcon || endIcon) && (
                                <span className="w-5 h-5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                    {endIcon || startIcon}
                                </span>
                            )}
                        </button>
                    </div>

                    <p className="text-[#E7E7E7] text-sm font-medium text-center">TRUSTED BY INDUSTRY LEADERS & FAST-GROWING STARTUPS</p>
                </div>
            </div>
            <div className="slider max-w-full">
                <div className="slide-track">
                    {SLIDER_IMAGE.map(card => (
                        <div className="slide" key={card.id}>
                            <img src={card.thumbnail} height={card.height} width={card.width} alt="image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}



