import React, { useState } from "react";


import { ConsultingImage, ConsultingOper } from "../../assets/images";
import FaqIcon from "../../assets/icon/faq-icon";
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
                                    <FaqIcon />
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