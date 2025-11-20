import { useState } from "react";
import { Link } from "react-router-dom";
import DesignIcon from "../../../assets/icon/design-icon";
import NoCodeIcon from "../../../assets/icon/no-code-icon";
import BrandingIcon from "../../../assets/icon/branding-icon";
import { ExperinceIcon, GuidelineIcon, IntrectionIcon, ProductIcon, ResearchIcon, RoadmapIcon, TestingIcon, UiUxIcon, UxAuditIcon } from "../../../assets/icon/define-icon";

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
        icon: ProductIcon,
        title: "Product Strategy Consulting",
        desc: "Shape your product vision with insights, market analysis, and growth strategies.",
        path:'/product'
    },
    {
        id: 2,
        icon: ResearchIcon,
        title: "UX Research & Insights",
        desc: "Uncover user needs and behaviors through research that drives design decisions.",
        path:'/uxsearch'
    },
    {
        id: 3,
        icon: RoadmapIcon,
        title: "Product Strategy & Roadmapping",
        desc: "Align goals and deliverables into a strategic roadmap for market success.",
        path:'/roadmap'
    },
    {
        id: 4,
        icon: ExperinceIcon,
        title: "Experience Architecture",
        desc: "Design intuitive structures and user flows that make products effortless.",
        path:'/experience'
    },
    {
        id: 5,
        icon: UiUxIcon,
        title: "UI/UX Design",
        desc: "Deliver striking, functional interfaces that enhance user satisfaction.",
        path:'/uiuxdesign'
    },
    {
        id: 6,
        icon: GuidelineIcon,
        title: "Design Systems & Guidelines",
        desc: "Develop scalable ecosystems that ensure brand consistency across platforms.",
        path:'/designguideline'
    },
    {
        id: 7,
        icon: TestingIcon,
        title: "Prototyping & User Testing",
        desc: "Turn ideas into prototypes, validate with users, and refine before launch.",
        path:'/prototyping/testing'
    },
    {
        id: 8,
        icon: IntrectionIcon,
        title: "Interaction & Motion Design",
        desc: "Enrich experiences with animations that bring interfaces to life.",
        path:'/interaction/design'
    },
    {
        id: 9,
        icon: UxAuditIcon,
        title: "UX Audit & Product Optimization",
        desc: "Identify usability challenges and unlock opportunities through evaluations.",
        path:'/uxaudit'
    },

];

const BRANDING_CARDS = [
    {
        id: 1,
        icon: ProductIcon,
        title: "Brand Identity Design",
        desc: "Craft brand visuals — logo, typography, and color ,reflecting your purpose.",
        path:'/brand/identity'
    },
    {
        id: 2,
        icon: ResearchIcon,
        title: "Brand Strategy & Positioning",
        desc: "Define how your brand communicates and connects across touchpoints.",
        path:'/brand/positioning'
    },
    {
        id: 3,
        icon: RoadmapIcon,
        title: "Creative Direction",
        desc: "Develop cohesive visual direction aligning design, story, and values.",
        path:'/creatve/direction'
    },
    {
        id: 4,
        icon: ExperinceIcon,
        title: "Visual Communication Design",
        desc: "Deliver cohesive assets from social to campaigns , reinforcing consistency.",
        path:'/visual/design'
    },
    {
        id: 5,
        icon: UiUxIcon,
        title: "Rebranding & Evolution",
        desc: "Transform existing identities into modern, future-ready brand systems.",
        path:'/rebranding/evolution'
    },
];

const NOCODE_CARDS = [
    {
        id: 1,
        icon: ProductIcon,
        title: "Webflow Development",
        desc: "Build responsive, pixel-perfect websites with seamless no-code performance.",
        path:'/webflow/development'
    },
    {
        id: 2,
        icon: ResearchIcon,
        title: "Framer Development",
        desc: "Create fast, interactive sites with motion and creative precision.",
        path:'/framer/development'
    },
    {
        id: 3,
        icon: RoadmapIcon,
        title: "Bubble App Development",
        desc: "Turn complex ideas into scalable, powerful no-code web apps.",
        path:'/bubble/development'
    },
    {
        id: 4,
        icon: ExperinceIcon,
        title: "Figma Sites",
        desc: "Bring Figma designs to life with unmatched pixel-perfect accuracy.",
        path:'/figma/sites'
    },
     {
        id: 5,
        icon: UiUxIcon,
        title: "Platform Maintenance & Support",
        desc: "Keep platforms stable with regular updates and performance care.",
        path:'/platform/support'
    },
];
export default function ServiceHover({ onClose }) {
    const [activeTab, setActiveTab] = useState("product");

    const renderCards = () => {
        let cards = [];
        if (activeTab === "product") cards = PRODUCT_CARDS;
        if (activeTab === "branding") cards = BRANDING_CARDS;
        if (activeTab === "no-code") cards = NOCODE_CARDS;
    }
    return (
        <section className="md:py-10 py-8 bg-[#090909]">
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
                                    <Link to={card.path}
                                        key={card.id}
                                         onClick={onClose}
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

