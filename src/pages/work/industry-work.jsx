import { Link } from "react-router-dom";
import { ArriveImage, ConvatImage, FankeeImage, LeadImage, OlventImage, SuccessFive, SuccessFour, SuccessImage, SuccessSix, SuccessThree, SuccessTwo, ZuusImage } from "../../assets/images";
const SUCCESS_IMAGE = [
    {
        id: 1,
        thumbnail: SuccessImage,
        title: 'Bloom Money',
        desc: 'Empowering communities with financial solutions.',
    },
    {
        id: 2,
        thumbnail: SuccessTwo,
        title: 'Alfan',
        desc: 'The Platform for Content Creators',
    },
    {
        id: 3,
        thumbnail: SuccessThree,
        title: 'Earpoin',
        desc: 'The Best Place ToFind Productivity Tools',
    },
    {
        id: 4,
        thumbnail: SuccessFour,
        title: 'Finnecta',
        desc: 'Wallet application to streamline digital transactions',
    },
    {
        id: 5,
        thumbnail: SuccessFive,
        title: 'Trivo',
        desc: 'Clearbit, a business intelligence platform',
    },
    {
        id: 6,
        thumbnail: SuccessSix,
        title: 'Fastgo',
        desc: 'Fastgo’s scooter rental app to drive adoption',
    },
    {
        id: 7,
        thumbnail: ConvatImage,
        title: 'Cnvrt',
        desc: 'Social Ties, progress tracking and customizations',
    },
    {
        id: 8,
        thumbnail: FankeeImage,
        title: 'Fankee',
        desc: 'Whenever passion meets expertise',
    },
    {
        id: 9,
        thumbnail: OlventImage,
        title: 'Olvent',
        desc: 'CGMA is a provider of online digital art education',
    },
    {
        id: 10,
        thumbnail: ArriveImage,
        title: 'Arrive',
        desc: 'The Quickee media platform originates from Ghana',
    },
    {
        id: 11,
        thumbnail: ZuusImage,
        title: 'Zuus AI',
        desc: 'An AI-powered tool for automated ',
    },
    {
        id: 12,
        thumbnail: LeadImage,
        title: 'Your Lead',
        desc: 'Construction Lead Generation Platform',
    },
]
export default function IndustryWork() {
    const INDUSTRIY_WORK = [
        {
            id: 1,
            text: "All Niches"
        },
        {
            id: 2,
            text: "AI"
        },
        {
            id: 3,
            text: "Enterprise"
        },
        {
            id: 4,
            text: "Fin-Tech"
        },
        {
            id: 5,
            text: "SaaS"

        },
        {
            id: 6,
            text: "Crypto & Web3"
        },
        {
            id: 7,
            text: "Automotive"
        },
        {
            id: 8,
            text: "Ed-Tech"
        },
        {
            id: 9,
            text: "Mar-Tech"
        },
        {
            id: 10,
            text: "IT/Consulting"
        },
        {
            id: 11,
            text: "Health Tech"
        },
        {
            id: 12,
            text: "E-Commerce"
        },
        {
            id: 13,
            text: "Construction Tech"
        },
        {
            id: 14,
            text: "Legal Tech"
        },
        {
            id: 15,
            text: "Freight & Logistics"
        },
        {
            id: 16,
            text: "Social Media"
        },
    ];

    return (
        <section className="md:py-25 py-8 bg-[#090909]">
            <div className="container">
                <div className="grid gap-8">
                    <div className="pb-8">
                        <h2 className="text-base font-normal text-[#F2F2F2] pb-6">
                            CHOOSE YOUR INDUSTRY
                        </h2>
                        <div className="flex flex-wrap gap-4 max-w-[1240px] mx-auto">
                            {INDUSTRIY_WORK.map((card) => (
                                <label
                                    key={card.id}
                                    htmlFor={`service-${card.id}`}
                                    className="chack px-6 py-3 border border-[#3A3A3A] bg-[#111111] rounded-3xl text-base font-medium text-[#FFFFFF] cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        id={`service-${card.id}`}
                                        name="service"
                                        className="box"
                                    />
                                    {card.text}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="text-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                            {SUCCESS_IMAGE.map((card) => (
                                <div className={`${card.id % 2 === 0 ? 'sm:mt-30' : ''}`} key={card.id}>
                                    <div className="grid gap-6">
                                        <img src={card.thumbnail} alt="success-image" width={600} height={685} loading="lazy" />
                                        <div className="grid gap-2 sm:gap-2.5">
                                            <h2 className="text-sm font-normal text-[#FFFFFF]">{card.title}</h2>
                                            <div className="flex gap-2 justify-between items-center">
                                                <p className="md:text-[22px] text-lg font-medium text-[#FFFFFF] md:leading-normal leading-[29px]">{card.desc}</p>
                                                <Link to='#' className="px-2 w-fit py-2 rounded-full border border-[#3A3A3A]">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73129 1.5C1.53238 1.5 1.34161 1.42098 1.20096 1.28033C1.06031 1.13968 0.981292 0.948912 0.981292 0.75C0.981292 0.551088 1.06031 0.360322 1.20096 0.21967C1.34161 0.0790175 1.53238 0 1.73129 0H10.7313C10.9302 0 11.121 0.0790175 11.2616 0.21967C11.4023 0.360322 11.4813 0.551088 11.4813 0.75V9.75C11.4813 9.94891 11.4023 10.1397 11.2616 10.2803C11.121 10.421 10.9302 10.5 10.7313 10.5C10.5324 10.5 10.3416 10.421 10.201 10.2803C10.0603 10.1397 9.98129 9.94891 9.98129 9.75V2.56L1.26129 11.28C1.11912 11.4125 0.93107 11.4846 0.736769 11.4812C0.542468 11.4777 0.357083 11.399 0.21967 11.2616C0.0822568 11.1242 0.00354506 10.9388 0.000116847 10.7445C-0.00331137 10.5502 0.0688116 10.3622 0.201292 10.22L8.92129 1.5H1.73129Z" fill="white" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
