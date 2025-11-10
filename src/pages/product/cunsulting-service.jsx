import React, { useState } from "react";


import { ConsultingImage, ConsultingOper } from "../../assets/images";
const FAQS = [
    {
        id: 1,
        question: 'We Align Product Goals With Market Reality',
        answer: 'We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why.'
    },
    {
        id: 2,
        question: 'We Turn Vision Into Actionable Roadmaps',
        answer: 'We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why.'
    },
    {
        id: 3,
        question: 'We Build Scalable Systems for Future Growth',
        answer: 'We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why.'
    },
]
export default function ConsultingService() {
    const [open, setOpen] = useState(0)
    const handleClick = (index) => {
        setOpen(prev => prev === index ? null : index)
    }
    return (
        <section className="md:py-20 py-8 bg-[#0B0B0B]">
            <div className="container">
                <div className="flex md:flex-row flex-col md:gap-12 gap-8">
                    <div className=" max-w-[660px]">
                        <h2 className="md:text-[40px] pb-4 text-[28px] text-[#FFFFFF] font-bold font-[Geologica] leading-[48px]">Why Are Our Product Strategy Consulting Services the Right Choice for You?</h2>
                        <div className="flex flex-col gap-4">
                            {FAQS.map((faq, index) => (
                                <div key={faq.id} className="flex  gap-3 px-3 py-3 bg-[#121212] rounded-lg" >
                                    <svg className="flex shrink-0" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" fill="#F3FE00" />
                                        <path d="M12.1641 18.0003C12.1641 15.6595 12.1641 14.4895 12.7257 13.6487C12.969 13.2845 13.2816 12.9719 13.6457 12.7287C14.4866 12.167 15.6557 12.167 17.9974 12.167C20.3391 12.167 21.5082 12.167 22.3491 12.7287C22.7132 12.9719 23.0258 13.2845 23.2691 13.6487C23.8307 14.4895 23.8307 15.6587 23.8307 18.0003C23.8307 20.342 23.8307 21.5112 23.2691 22.352C23.0258 22.7161 22.7132 23.0287 22.3491 23.272C21.5082 23.8337 20.3391 23.8337 17.9974 23.8337C15.6557 23.8337 14.4866 23.8337 13.6457 23.272C13.2816 23.0287 12.969 22.7161 12.7257 22.352C12.1641 21.5112 12.1641 20.342 12.1641 18.0003Z" stroke="black" stroke-width="1.5" />
                                        <path d="M18.709 15.5L16.3281 18H19.6615L17.2806 20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <div className="pt-1.5 ">
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
                    {/* <div>
                    <div className=" relative top-0 bottom-20 left-0 right-0 z-[10">
                        <img src={ConsultingOper} alt="consulting-oper" width={286} height={120} />
                    </div>

                    <div>
                        <img src={ConsultingImage} className="w-full" alt="consulting-image" width={502} height={405} loading="lazy" />
                    </div>
                    </div> */}
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
                            className="absolute top-40 md:top-50 left-0 z-10"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}