import { useEffect, useRef, useState } from "react";
import { ProcessFive, ProcessFour, ProcessOne, ProcessSix, ProcessThree, ProcessTwo } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function Advantage() {
    const ADVANTAGE_CARD = [
        {
            id: 1,
            title: "01 Discovery",
            sub: "Research & Domain Analysis",
            desc: "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience",
            image: ProcessOne,
        },
        {
            id: 2,
            title: "02 Flows",
            sub: "User Journey Map Sitemap",
            desc: "Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.",
            image: ProcessTwo,
        },
        {
            id: 3,
            title: "03 Wireframes",
            sub: "Low - Fidelity Design",
            desc: "Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.",
            image: ProcessThree,
        },
        {
            id: 4,
            title: "04 Mockups",
            sub: "High - Fidelity Design",
            desc: "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
            image: ProcessFour,
        },
        {
            id: 5,
            title: "05 Prototyping",
            sub: "Interaction Design",
            desc: "UX Designers create clickable prototypes for your product using tools like Invision to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.",
            image: ProcessFive,
        },
        {
            id: 6,
            title: "06 Testing",
            sub: "Usability Testing",
            desc: "UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.",
            image: ProcessSix,
        },
    ];

    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const cards = section.querySelectorAll(".adv-card");
            let newActiveIndex = 0;

            cards.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.45 && rect.bottom > 0) {
                    newActiveIndex = i;
                }
            });

            setActiveIndex(newActiveIndex);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const totalCards = ADVANTAGE_CARD.length - 1;
        const newProgress = (activeIndex / totalCards) * 100;
        setProgress(newProgress);
    }, [activeIndex]);

    return (
        <section ref={sectionRef} className="bg-black sm:py-20 py-8 relative">
            <div className="container">
                <div className="grid sm:gap-16 gap-8">
                    <div className="flex justify-center">
                        <HeroContant
                            subheading="OUR PROCESS, YOUR ADVANTAGE"
                            classNameSub="!pb-4"
                            heading="From Idea To Execution"
                            classNamehead="!pb-4 !leading-[40px]"
                            desc="We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
                            classNameDesc="!max-w-[596px]"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 sm:gap-20 relative">
                        <div className="relative">
                            <div className="absolute left-[30px] top-0 w-[2px] h-full" style={{
                                background: "linear-gradient(270deg, rgba(255, 255, 255, 0.20) 86.27%, rgba(255, 255, 255, 0.00) 88.15%)",
                            }}></div>

                            <div
                                className="absolute left-[30px] w-[2px] bg-[#F3FE00] transition-all duration-700 ease-in-out"
                                style={{ height: `${progress}%`, top: 0 }}
                            ></div>

                            <div className="grid sm:gap-24 gap-10 pl-12">
                                {ADVANTAGE_CARD.map((card, index) => (
                                    <div
                                        key={card.id}
                                        className={`adv-card relative grid gap-4 transition-all duration-500 ${index === activeIndex ? "opacity-100" : "opacity-60"
                                            }`}
                                    >
                                        <div
                                            className={`absolute -left-[50px] top-0 flex items-center justify-center w-[30px] h-[30px] rounded-full text-base font-semibold transition-all duration-500 ${index === activeIndex
                                                ? " text-white scale-110"
                                                : ""
                                                }`}
                                        >
                                            {String(card.id).padStart(2, "0")}
                                        </div>

                                        <div className="grid gap-1.5">
                                            <h2
                                                className={`sm:text-xl text-base font-bold ${index === activeIndex
                                                    ? "text-white"
                                                    : "text-[#8F8F8F]"
                                                    }`}
                                            >
                                                {card.title}
                                            </h2>
                                            <p className="text-sm sm:text-base font-medium text-white/60">
                                                {card.sub}
                                            </p>
                                        </div>
                                        <p className={'sm:text-base font-medium text-white/60 sm:leading-[24px] leading-[21px] '}>
                                            {card.desc}
                                        </p>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="sticky top-24 w-full">
                                <div className="relative w-full h-[250px] sm:h-[350px] rounded-2xl overflow-hidden">
                                    {ADVANTAGE_CARD.map((card, index) => (
                                        <img
                                            key={card.id}
                                            src={card.image}
                                            alt={card.title}
                                            className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-700 ease-in-out ${index === activeIndex
                                                ? "opacity-100 translate-y-0 scale-100"
                                                : "opacity-0 translate-y-5 scale-95"
                                                }`}
                                        />
                                    ))}
                                    <div className="absolute inset-0 bg-black/25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


