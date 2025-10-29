import HeroIcon from "../../assets/icon/hero-icon"
import StarIcon from "../../assets/icon/star-icon";
import { AdiQat, B1, B2, B3, Cisco, Figma, FigmaB, NissanMotor, Repurpose, Sketch, Trafilea, Vector, W, WalMart, Xd, YallaMotor } from "../../assets/images"


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
                <div className="">
                    {/* <img className="absolute z-0 top-0 left-[20px] hidden sm:block blur-[30px] opacity-[0.8]" src={B1} alt="" />
                    <img className="absolute z-0 top-[150px] sm:top-0 -left-[20px] sm:left-[130px] " src={B2} alt="" />
                    <img className="absolute z-0 top-0 right-0 blur-[30px] hidden sm:block opacity-[0.8]" src={B3} alt="" />
                    <StarIcon /> */}
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
                            <h1 className="sm:text-7xl text-4xl font-extrabold leading-[50px] sm:leading-[96px] text-white text-center">CREATIVE INTELLIGENCE IN EVERY PIXEL</h1>
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




// <section className="hero-section h-[750px]">

//     <div className="container">
//         <div className="relative ">

//             <img className="absolute z-0 top-0 left-[20px] hidden sm:block blur-[30px] opacity-[0.8]" src={bg1} alt="" />
//             <img className="absolute z-0 top-[150px] sm:top-0 -left-[20px] sm:left-[130px] " src={bg2} alt="" />
//             <img className="absolute z-0 top-0 right-0 blur-[30px] hidden sm:block opacity-[0.8]" src={bg3} alt="" />
//             <StarIcon />

//             <div className="absolute z-10 top-0 left-0">
//                 <div className="w-[327px] sm:w-[600px] mt-8 sm:mt-12 mx-auto bg-[#0D0D0C] rounded-[8px] border border-[#303030] flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5 p-2">
//                     <div className="flex items-center gap-3">
//                         <img src={industrylogo} alt="" />
//                         <p>Trusted by startups to craft $100M+ designs with</p>
//                     </div>

//                     <ul className="flex items-center">
//                         {Startups.map(item => (
//                             <li key={item.id}
//                                 className="-ms-[7px] w-[32px] h-[32px] rounded-full bg-[#303030] border border-[#0D0D0C] flex items-center justify-center ">
//                                 {item.icon}
//                             </li>

//                         ))}


//                     </ul>
//                 </div>
//                 <div className="relative  flex flex-col items-center justify-center gap-3 py-12">
//                     <h1 className="w-[330px] sm:w-[978px] text-center font-[Geologica] uppercase font-[800] text-[36px] sm:text-[72px] leading-[50px] sm:leading-[96px]">Creative Intelligence in Every Pixel</h1>
//                     <p className="text-[20px] text-center capitalize text-[#FFFFFF] font-[Inter]"> We craft <span className="text-[#F3FE00] font-[Plus Jakarta Sans]"> stunning</span> designs for businesses worldwide.</p>
//                     <span className="absolute hidden sm:block origin-right rotate-7 top-[60px] right-[45px] bg-[#F3FE00] py-[6px] px-2 rounded-[8px] text-[#0B0B0B] text-[12px] font-bold uppercase font-[Geologica]"> NO CODE</span>
//                 </div>
//                 <div className="flex items-center justify-center gap-[20px]">
//                     <Button
//                         path="/contact" hovertext={" Let's talk 🤙"} defaulttext={"Schedule Call"}
//                         className="w-[170px] h-[48px] bg-white border border-white text-[#0B0B0B]  font-[Plus Jakarta Sans] leading-none "
//                         showicon={false}
//                     />
//                     <Button
//                         path="https://www.figma.com" target="_blank" hovertext={" Open "} defaulttext={"©2025 Work"}
//                         className="w-[149px] h-[48px] bg-black border border-white font-[Inter] hover:border-[#F3FE00] "
//                         showicon={false}
//                     />
//                 </div>
//                 <p className="mt-8 sm:mt-[88px] text-center text-[14px] font-[500] uppercase font-[Plus Jakarta Sans] text-[#E7E7E7]">Trusted by Industry Leaders & Fast-Growing Startups</p>
//                 <div className="py-5 mt-6">
//                     <div className=" slide-track relative py-1 flex items-center justify-between gap-[48px]">
//                         {companies.map(item => (
//                             <div key={item.name} className=" h-[33px]">
//                                 <img className="w-full h-full"
//                                     src={item.image} alt={item.name}
//                                     width={item.width}
//                                     height={item.height}
//                                 />
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>