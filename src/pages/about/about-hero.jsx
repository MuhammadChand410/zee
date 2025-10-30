import HeroIcon from "../../assets/icon/hero-icon"
import HeroStarIcon from "../../assets/icon/hero-star-icon";
import { AdiQat, Cisco, Figma, FigmaB, HeroBg, NissanMotor, Repurpose, Sketch, Trafilea, Vector, W, WalMart, Xd, YallaMotor } from "../../assets/images"


import React, { useState } from "react";
import ButtonHero from "../../component/common/header/button-hero";
export default function AboutHero({
    className,
    startIcon,
    endIcon,
    onClick,
    type = "submit",
}) {

    return (
        <section className="sm:py-20 py-8 bg-black">
            <div className="container">
                <div className="relative before:content-[''] before:absolute before:top-10 left-0 sm:before:left-20 before:w-[300px] before:h-[300px] before:from-[#202020] before:to-[#333333] before:rounded-[60%] before:blur-2xl before:-z-10"></div>
                <div className="absolute hidden md:block left-32 bottom-12">
                    <img src={HeroBg} alt="beforecircle" height={435} width={429} />
                </div>
                <div className="absolute hidden md:block left-31 bottom-10">
                    <HeroStarIcon />
                </div>
                <div className="grid gap-8 sm:gap-16">
                    <div className="grid gap-7">
                        <div className="grid justify-center">
                            <div className="grid gap-3 max-w-[900px]">
                                <div className="flex justify-center items-center">
                                    <h1 className="relative max-w-[731px] sm:text-7xl text-4xl font-extrabold leading-[50px] sm:leading-[92px] text-white text-center">Elite Design Partners</h1>
                                </div>
                                <p className="sm:text-xl text-base text-white max-w-[774px] font-normal text-center">We are the best product design agency for startups. We excel in UI/UX design, branding, web development & committed to 100% satisfaction with every project.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <ButtonHero text='Request a Proposal Today' textt='Open' className='!px-5 border border-white hover:border-[#F3FE00] bg-black !text-[#FFF] hover:bg-black' />
                        </div>
                    </div>
                    <div className="grid justify-center">
                        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
                            <div className="bg-[#191919] border border-[#303030] px-5 py-3 rounded-[16px]">
                                <h2 className="text-lg text-[#FFF] text-center font-semibold">
                                    4.9 Rating
                                </h2>
                                <div className="grid justify-center">
                                    <div className="px-1.5 py-1 flex gap-2 justify-between rounded-full border border-[#3F3F3F]">
                                        <span className="px-1 py-2 rounded-full bg-[#FFF]"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="8" viewBox="0 0 29 8" fill="none">
                                            <g clip-path="url(#clip0_2361_7914)">
                                                <path d="M7.34375 0H8.62696V8H7.34375V0ZM13.1182 5.448C13.1182 6.67232 12.0862 6.76992 11.7792 6.76992C11.0121 6.76992 10.8726 6.05376 10.8726 5.62176V2.56H9.58937V5.61536C9.58937 6.37376 9.82805 6.99968 10.2464 7.41696C10.6159 7.78592 11.1696 7.98752 11.7696 7.98752C12.1949 7.98752 12.7974 7.85536 13.1182 7.5632V8H14.4014V2.56H13.1182V5.448ZM16.9678 0.64H15.6846V2.56H14.7222V3.84H15.6846V8H16.9678V3.84H17.9303V2.56H16.9678V0.64ZM21.9714 6.37344C21.692 6.624 21.3231 6.76288 20.9182 6.76288C20.0257 6.76288 19.3703 6.10912 19.3703 5.21152C19.3703 4.31392 20.0049 3.68768 20.9182 3.68768C21.316 3.68768 21.692 3.81984 21.9785 4.0704L22.1732 4.23744L23.0384 3.37472L22.8219 3.17984C22.3127 2.72128 21.6368 2.464 20.9179 2.464C19.3139 2.464 18.149 3.61856 18.149 5.2048C18.149 6.78432 19.3418 7.98016 20.9179 7.98016C21.6503 7.98016 22.3333 7.72288 22.836 7.25696L23.0451 7.06208L22.1665 6.2L21.9714 6.37344ZM27.6185 3.03424C27.2489 2.6656 26.8159 2.464 26.216 2.464C25.7906 2.464 25.3087 2.59616 24.9879 2.888V0H23.7047V8H24.9879V5.0032C24.9879 3.77888 25.8599 3.6816 26.1669 3.6816C26.9339 3.6816 26.9127 4.39808 26.9127 4.82944V8H28.196V4.83616C28.196 4.07776 28.0372 3.45184 27.6185 3.03424Z" fill="black" />
                                                <path d="M20.8809 4.2998C21.1269 4.2998 21.3629 4.39731 21.5369 4.57086C21.7109 4.74441 21.8086 4.9798 21.8086 5.22524C21.8086 5.47069 21.7109 5.70608 21.5369 5.87963C21.3629 6.05318 21.1269 6.15068 20.8809 6.15068C20.6348 6.15068 20.3988 6.05318 20.2249 5.87963C20.0509 5.70608 19.9531 5.47069 19.9531 5.22524C19.9531 4.9798 20.0509 4.74441 20.2249 4.57086C20.3988 4.39731 20.6348 4.2998 20.8809 4.2998Z" fill="#FF3D2E" />
                                                <path d="M5.55301 5.99035C5.06507 6.49115 4.40229 6.76251 3.70486 6.76251C2.27536 6.76251 1.23596 5.64251 1.23596 4.10523C1.23596 2.56091 2.27536 1.44091 3.70486 1.44091C4.39555 1.44091 5.05095 1.71195 5.54627 2.20603L5.74132 2.40091L6.59915 1.54523L6.41084 1.35035C5.69962 0.619793 4.73721 0.223633 3.70486 0.223633C1.59879 0.223633 0.015625 1.89307 0.015625 4.11195C0.015625 6.32411 1.60585 7.98683 3.70486 7.98683C4.74426 7.98683 5.70667 7.58363 6.4179 6.85307L6.60621 6.65819L5.75544 5.78875L5.55301 5.99035Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2361_7914">
                                                    <rect width="28.2" height="8" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg></span>
                                        <p className="text-[#CACACA] text-sm font-normal">Reviewed on</p>
                                        <span className="px-3 py-1 border border-[#B5B5B5] rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path opacity="0.5" d="M4.56966 12.375C4.51439 12.4265 4.47006 12.4886 4.43932 12.5576C4.40858 12.6266 4.39205 12.7011 4.39071 12.7766C4.38938 12.8521 4.40327 12.9272 4.43156 12.9972C4.45985 13.0672 4.50196 13.1309 4.55538 13.1843C4.60879 13.2377 4.67242 13.2798 4.74246 13.3081C4.8125 13.3364 4.88752 13.3503 4.96305 13.3489C5.03858 13.3476 5.11306 13.3311 5.18206 13.3003C5.25106 13.2696 5.31316 13.2253 5.36466 13.17L4.56966 12.375ZM5.36466 13.17L12.8647 5.67L12.0697 4.875L4.56966 12.375L5.36466 13.17Z" fill="white" />
                                                <path d="M5.71094 5.27246H12.4609V12.0225" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#191919] border border-[#303030] px-5 py-3 rounded-[16px]">
                                <h2 className="text-lg text-[#FFF] text-center font-semibold">
                                    4.9 Rating
                                </h2>
                                <div className="grid justify-center">
                                    <div className="px-1.5 py-1 flex gap-2 justify-between rounded-full border border-[#3F3F3F]">
                                        <span className="px-1 py-2 rounded-full bg-[#FFF]"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="8" viewBox="0 0 29 8" fill="none">
                                            <g clip-path="url(#clip0_2361_7914)">
                                                <path d="M7.34375 0H8.62696V8H7.34375V0ZM13.1182 5.448C13.1182 6.67232 12.0862 6.76992 11.7792 6.76992C11.0121 6.76992 10.8726 6.05376 10.8726 5.62176V2.56H9.58937V5.61536C9.58937 6.37376 9.82805 6.99968 10.2464 7.41696C10.6159 7.78592 11.1696 7.98752 11.7696 7.98752C12.1949 7.98752 12.7974 7.85536 13.1182 7.5632V8H14.4014V2.56H13.1182V5.448ZM16.9678 0.64H15.6846V2.56H14.7222V3.84H15.6846V8H16.9678V3.84H17.9303V2.56H16.9678V0.64ZM21.9714 6.37344C21.692 6.624 21.3231 6.76288 20.9182 6.76288C20.0257 6.76288 19.3703 6.10912 19.3703 5.21152C19.3703 4.31392 20.0049 3.68768 20.9182 3.68768C21.316 3.68768 21.692 3.81984 21.9785 4.0704L22.1732 4.23744L23.0384 3.37472L22.8219 3.17984C22.3127 2.72128 21.6368 2.464 20.9179 2.464C19.3139 2.464 18.149 3.61856 18.149 5.2048C18.149 6.78432 19.3418 7.98016 20.9179 7.98016C21.6503 7.98016 22.3333 7.72288 22.836 7.25696L23.0451 7.06208L22.1665 6.2L21.9714 6.37344ZM27.6185 3.03424C27.2489 2.6656 26.8159 2.464 26.216 2.464C25.7906 2.464 25.3087 2.59616 24.9879 2.888V0H23.7047V8H24.9879V5.0032C24.9879 3.77888 25.8599 3.6816 26.1669 3.6816C26.9339 3.6816 26.9127 4.39808 26.9127 4.82944V8H28.196V4.83616C28.196 4.07776 28.0372 3.45184 27.6185 3.03424Z" fill="black" />
                                                <path d="M20.8809 4.2998C21.1269 4.2998 21.3629 4.39731 21.5369 4.57086C21.7109 4.74441 21.8086 4.9798 21.8086 5.22524C21.8086 5.47069 21.7109 5.70608 21.5369 5.87963C21.3629 6.05318 21.1269 6.15068 20.8809 6.15068C20.6348 6.15068 20.3988 6.05318 20.2249 5.87963C20.0509 5.70608 19.9531 5.47069 19.9531 5.22524C19.9531 4.9798 20.0509 4.74441 20.2249 4.57086C20.3988 4.39731 20.6348 4.2998 20.8809 4.2998Z" fill="#FF3D2E" />
                                                <path d="M5.55301 5.99035C5.06507 6.49115 4.40229 6.76251 3.70486 6.76251C2.27536 6.76251 1.23596 5.64251 1.23596 4.10523C1.23596 2.56091 2.27536 1.44091 3.70486 1.44091C4.39555 1.44091 5.05095 1.71195 5.54627 2.20603L5.74132 2.40091L6.59915 1.54523L6.41084 1.35035C5.69962 0.619793 4.73721 0.223633 3.70486 0.223633C1.59879 0.223633 0.015625 1.89307 0.015625 4.11195C0.015625 6.32411 1.60585 7.98683 3.70486 7.98683C4.74426 7.98683 5.70667 7.58363 6.4179 6.85307L6.60621 6.65819L5.75544 5.78875L5.55301 5.99035Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2361_7914">
                                                    <rect width="28.2" height="8" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg></span>
                                        <p className="text-[#CACACA] text-sm font-normal">Reviewed on</p>
                                        <span className="px-3 py-1 border border-[#B5B5B5] rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path opacity="0.5" d="M4.56966 12.375C4.51439 12.4265 4.47006 12.4886 4.43932 12.5576C4.40858 12.6266 4.39205 12.7011 4.39071 12.7766C4.38938 12.8521 4.40327 12.9272 4.43156 12.9972C4.45985 13.0672 4.50196 13.1309 4.55538 13.1843C4.60879 13.2377 4.67242 13.2798 4.74246 13.3081C4.8125 13.3364 4.88752 13.3503 4.96305 13.3489C5.03858 13.3476 5.11306 13.3311 5.18206 13.3003C5.25106 13.2696 5.31316 13.2253 5.36466 13.17L4.56966 12.375ZM5.36466 13.17L12.8647 5.67L12.0697 4.875L4.56966 12.375L5.36466 13.17Z" fill="white" />
                                                <path d="M5.71094 5.27246H12.4609V12.0225" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#191919] border border-[#303030] px-5 py-3 rounded-[16px]">
                                <h2 className="text-lg text-[#FFF] text-center font-semibold">
                                    4.9 Rating
                                </h2>
                                <div className="grid justify-center">
                                    <div className="px-1.5 py-1 flex gap-2 justify-between rounded-full border border-[#3F3F3F]">
                                        <span className="px-1 py-2 rounded-full bg-[#FFF]"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="8" viewBox="0 0 29 8" fill="none">
                                            <g clip-path="url(#clip0_2361_7914)">
                                                <path d="M7.34375 0H8.62696V8H7.34375V0ZM13.1182 5.448C13.1182 6.67232 12.0862 6.76992 11.7792 6.76992C11.0121 6.76992 10.8726 6.05376 10.8726 5.62176V2.56H9.58937V5.61536C9.58937 6.37376 9.82805 6.99968 10.2464 7.41696C10.6159 7.78592 11.1696 7.98752 11.7696 7.98752C12.1949 7.98752 12.7974 7.85536 13.1182 7.5632V8H14.4014V2.56H13.1182V5.448ZM16.9678 0.64H15.6846V2.56H14.7222V3.84H15.6846V8H16.9678V3.84H17.9303V2.56H16.9678V0.64ZM21.9714 6.37344C21.692 6.624 21.3231 6.76288 20.9182 6.76288C20.0257 6.76288 19.3703 6.10912 19.3703 5.21152C19.3703 4.31392 20.0049 3.68768 20.9182 3.68768C21.316 3.68768 21.692 3.81984 21.9785 4.0704L22.1732 4.23744L23.0384 3.37472L22.8219 3.17984C22.3127 2.72128 21.6368 2.464 20.9179 2.464C19.3139 2.464 18.149 3.61856 18.149 5.2048C18.149 6.78432 19.3418 7.98016 20.9179 7.98016C21.6503 7.98016 22.3333 7.72288 22.836 7.25696L23.0451 7.06208L22.1665 6.2L21.9714 6.37344ZM27.6185 3.03424C27.2489 2.6656 26.8159 2.464 26.216 2.464C25.7906 2.464 25.3087 2.59616 24.9879 2.888V0H23.7047V8H24.9879V5.0032C24.9879 3.77888 25.8599 3.6816 26.1669 3.6816C26.9339 3.6816 26.9127 4.39808 26.9127 4.82944V8H28.196V4.83616C28.196 4.07776 28.0372 3.45184 27.6185 3.03424Z" fill="black" />
                                                <path d="M20.8809 4.2998C21.1269 4.2998 21.3629 4.39731 21.5369 4.57086C21.7109 4.74441 21.8086 4.9798 21.8086 5.22524C21.8086 5.47069 21.7109 5.70608 21.5369 5.87963C21.3629 6.05318 21.1269 6.15068 20.8809 6.15068C20.6348 6.15068 20.3988 6.05318 20.2249 5.87963C20.0509 5.70608 19.9531 5.47069 19.9531 5.22524C19.9531 4.9798 20.0509 4.74441 20.2249 4.57086C20.3988 4.39731 20.6348 4.2998 20.8809 4.2998Z" fill="#FF3D2E" />
                                                <path d="M5.55301 5.99035C5.06507 6.49115 4.40229 6.76251 3.70486 6.76251C2.27536 6.76251 1.23596 5.64251 1.23596 4.10523C1.23596 2.56091 2.27536 1.44091 3.70486 1.44091C4.39555 1.44091 5.05095 1.71195 5.54627 2.20603L5.74132 2.40091L6.59915 1.54523L6.41084 1.35035C5.69962 0.619793 4.73721 0.223633 3.70486 0.223633C1.59879 0.223633 0.015625 1.89307 0.015625 4.11195C0.015625 6.32411 1.60585 7.98683 3.70486 7.98683C4.74426 7.98683 5.70667 7.58363 6.4179 6.85307L6.60621 6.65819L5.75544 5.78875L5.55301 5.99035Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2361_7914">
                                                    <rect width="28.2" height="8" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg></span>
                                        <p className="text-[#CACACA] text-sm font-normal">Reviewed on</p>
                                        <span className="px-3 py-1 border border-[#B5B5B5] rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path opacity="0.5" d="M4.56966 12.375C4.51439 12.4265 4.47006 12.4886 4.43932 12.5576C4.40858 12.6266 4.39205 12.7011 4.39071 12.7766C4.38938 12.8521 4.40327 12.9272 4.43156 12.9972C4.45985 13.0672 4.50196 13.1309 4.55538 13.1843C4.60879 13.2377 4.67242 13.2798 4.74246 13.3081C4.8125 13.3364 4.88752 13.3503 4.96305 13.3489C5.03858 13.3476 5.11306 13.3311 5.18206 13.3003C5.25106 13.2696 5.31316 13.2253 5.36466 13.17L4.56966 12.375ZM5.36466 13.17L12.8647 5.67L12.0697 4.875L4.56966 12.375L5.36466 13.17Z" fill="white" />
                                                <path d="M5.71094 5.27246H12.4609V12.0225" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



