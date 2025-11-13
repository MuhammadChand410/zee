import { useState } from "react";
import { Link } from "react-router-dom";
import DesignIcon from "../../../assets/icon/design-icon";
import NoCodeIcon from "../../../assets/icon/no-code-icon";
import BrandingIcon from "../../../assets/icon/branding-icon";

const PRODUCT_LINKS = [
    {
        id: 1,
        icon: DesignIcon,
        title: "Product Design",
        path: "product",
    },
    {
        id: 2,
        icon: BrandingIcon,
        title: "Branding Solutions",
        path: "branding",
    },
    {
        id: 3,
        icon: NoCodeIcon,
        title: "No-Code Development",
        path: "no-code",
    },
];

const PRODUCT_CARDS = [
    {
        id: 1,
        icon: DesignIcon,
        title: "Product Strategy Consulting",
        desc: "Shape your product vision with insights, market analysis, and growth strategies.",
    },
    {
        id: 2,
        icon: DesignIcon,
        title: "UX Research & Insights",
        desc: "Uncover user needs and behaviors through research that drives design decisions.",
    },
    {
        id: 3,
        icon: DesignIcon,
        title: "Product Strategy & Roadmapping",
        desc: "Align goals and deliverables into a strategic roadmap for market success.",
    },
    {
        id: 4,
        icon: DesignIcon,
        title: "Experience Architecture",
        desc: "Design intuitive structures and user flows that make products effortless.",
    },
    {
        id: 5,
        icon: DesignIcon,
        title: "UI/UX Design",
        desc: "Deliver striking, functional interfaces that enhance user satisfaction.",
    },
    {
        id: 6,
        icon: DesignIcon,
        title: "Design Systems & Guidelines",
        desc: "Develop scalable ecosystems that ensure brand consistency across platforms.",
    },
    {
        id: 7,
        icon: DesignIcon,
        title: "Prototyping & User Testing",
        desc: "Turn ideas into prototypes, validate with users, and refine before launch.",
    },
    {
        id: 8,
        icon: DesignIcon,
        title: "Interaction & Motion Design",
        desc: "Enrich experiences with animations that bring interfaces to life.",
    },
    {
        id: 9,
        icon: DesignIcon,
        title: "UX Audit & Product Optimization",
        desc: "Identify usability challenges and unlock opportunities through evaluations.",
    },

];

const BRANDING_CARDS = [
    {
        id: 1,
        icon: BrandingIcon,
        title: "Brand Identity Design",
        desc: "Craft a visual identity that defines and differentiates your brand.",
    },
    {
        id: 2,
        icon: BrandingIcon,
        title: "Logo & Collateral",
        desc: "Design logos and visual assets that communicate your brand essence.",
    },
    {
        id: 3,
        icon: BrandingIcon,
        title: "Brand Strategy",
        desc: "Develop cohesive brand positioning and messaging that connects.",
    },
    {
        id: 4,
        icon: BrandingIcon,
        title: "Logo & Collateral",
        desc: "Design logos and visual assets that communicate your brand essence.",
    },
    {
        id: 5,
        icon: BrandingIcon,
        title: "Brand Strategy",
        desc: "Develop cohesive brand positioning and messaging that connects.",
    },
];

const NOCODE_CARDS = [
    {
        id: 1,
        icon: NoCodeIcon,
        title: "No-Code App Development",
        desc: "Build modern web and mobile apps rapidly without coding complexity.",
    },
    {
        id: 2,
        icon: NoCodeIcon,
        title: "Workflow Automation",
        desc: "Streamline your business with powerful automation tools.",
    },
    {
        id: 3,
        icon: NoCodeIcon,
        title: "Integration Setup",
        desc: "Connect systems seamlessly using no-code platforms like Zapier.",
    },
    {
        id: 4,
        icon: NoCodeIcon,
        title: "Integration Setup",
        desc: "Connect systems seamlessly using no-code platforms like Zapier.",
    },
];
export default function ServiceHover() {
    const [activeTab, setActiveTab] = useState("product");

    const renderCards = () => {
        let cards = [];
        if (activeTab === "product") cards = PRODUCT_CARDS;
        if (activeTab === "branding") cards = BRANDING_CARDS;
        if (activeTab === "no-code") cards = NOCODE_CARDS;
    }
    return (
        <section className="md:py-10 py-8">
            <div className="container">
                <div className="grid grid-cols-1 md:[grid-template-columns:minmax(100px,279px)_minmax(100px,927px)] gap-4 md:gap-6">
                    <div className="md:sticky md:top-10 ">
                        {PRODUCT_LINKS.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => setActiveTab(link.path)}
                                className={`w-full cursor-pointer px-4 py-4 rounded-xl flex items-center gap-3 transition-all duration-200 ${activeTab === link.path ? "bg-[#F3FE0014]" : ""
                                    }`}>
                                <div className="flex shrink-0">
                                    <link.icon />
                                </div>
                                <h2 className="text-base font-[Inter] font-semibold text-white">
                                    {link.title}
                                </h2>
                            </button>
                        ))}
                    </div>
                    <div className="max-h-[450px] overflow-y-auto pr-2">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            {(() => {
                                let cards = [];
                                if (activeTab === "product") cards = PRODUCT_CARDS;
                                if (activeTab === "branding") cards = BRANDING_CARDS;
                                if (activeTab === "no-code") cards = NOCODE_CARDS;

                                return cards.map((card) => (
                                    <Link to='#'
                                        key={card.id}
                                        className="flex gap-3 px-5 py-3 hover:bg-[#F3FE0014] rounded-xl transition-all duration-200"
                                    >
                                        <div className="flex shrink-0">
                                            <card.icon />
                                        </div>
                                        <div>
                                            <h3 className="text-base pb-1 text-white font-semibold font-[Inter]">
                                                {card.title}
                                            </h3>
                                            <p className="text-sm font-normal leading-[24px] text-white font-[Inter]">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </Link>
                                ));
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )};

