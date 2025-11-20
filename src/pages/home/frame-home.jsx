import ClutchIcon from "../../assets/icon/clutch-icon";
import StarIcon from "../../assets/icon/star-icon";
import HeroContant from "../../component/common/hero-contant/hero-contant";
import { useState } from "react";
import Button from "../../component/common/header/button";
const FAQS = [
    {
        id: 1,
        question: 'What is UI UX design, and why is it important?',
        answer: 'UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.'
    },
    {
        id: 2,
        question: 'What is the UX design process, and how long does it take?',
        answer: 'UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.'
    },
    {
        id: 3,
        question: 'What types of UX design services do you offer?',
        answer: 'UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.'
    },
    {
        id: 4,
        question: 'How does ZeeFrames UI UX Design differ from other design solutions?',
        answer: 'UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.'
    },
    {
        id: 5,
        question: 'Are there any customer reviews or case studies available for ZeeFrames UI UX Design?',
        answer: 'UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.'
    },

]

const STAR_ICON = [
    {
        id: 1,
        icon: StarIcon,
    },
    {
        id: 2,
        icon: StarIcon,
    },
    {
        id: 3,
        icon: StarIcon,
    },
    {
        id: 4,
        icon: StarIcon,
    },
    {
        id: 5,
        icon: StarIcon,
    },

]
export default function FrameHome() {

    const [open, setOpen] = useState(0)
    const handleClick = (index) => {
        setOpen(prev => prev === index ? null : index)
    }
    return (
        <section className="bg-[#0B0B0B] sm:py-20 py-8">
            <div className="container">
                <div className="flex sm:flex-row flex-col gap-12">
                    <div className="">
                        <HeroContant subheading='FAQS' classNameSub='!text-start !pb-8' heading='Got Question?' classNamehead='!text-start !pb-3' desc='We begin with meaningful conversations that drive design decisions.' classNameDesc='!text-start !pb-8' />
                        <div className="flex sm:flex-row flex-col gap-8">
                            <div className="group w-[190px]">
                                <Button text='Book a free call' textt=' Let’s Talk' className='!w-[190px] group-hover:!w-[120px] !rounded-full !border hover:!border-[#F3FE00] !border-[#FFF] !bg-[#FFF] hover:!text-[#F3FE00] !text-[#0D0D0D] hover:!bg-black' />
                            </div>
                            <div className="flex gap-4">
                                <ClutchIcon />
                                <div className="grid gap-2">
                                    <div className="flex gap-1.5" >
                                        {STAR_ICON.map((card =>
                                            <div className="flex shrink-0" key={card.id}>
                                                <card.icon />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[#D3D3D3] text-sm font-normal w-[130px]">Rating 5,20 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {FAQS.map((faq, index) => (
                            <div
                                key={faq.id}
                                className={`border rounded-[12px] px-4 py-5  transition-all duration-300
                                              ${open === index ? "border-[#F3FE00]" : "border-[#3C3C3C]"} `}>
                                <button
                                    onClick={() => handleClick(index)}
                                    className={`flex items-center justify-between w-full font-bold cursor-pointer`}>
                                    <span className="text-[#FFF] text-start text-base font-medium">{faq.question}</span>
                                    <div className={`px-1 py-1 rounded-[6px] transition-all duration-300 ${open === index ? "bg-yellow-300" : "bg-[#2B2A2A]"
                                        }`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="transition-all duration-300 "
                                        >
                                            {open !== index && (
                                                <path
                                                    d="M8 2.66699V13.3337"
                                                    stroke="#6D6D6D"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            )}
                                            <path
                                                d="M2.66663 8H13.3333"
                                                stroke="#6D6D6D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <div className={` overflow-hidden transition-all duration-300 ${open === index ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                    <p className="text-[#E7E7E7]">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}