import { Link } from "react-router-dom";
import { Europe, Flag, SaudiArabia, Stripe, Zeeframe } from "../../../assets/images";
import BeIcon from "../../../assets/icon/be-icon";
import ChromeIcon from "../../../assets/icon/chrome-icon";
import LinkdeenIcon from "../../../assets/icon/linkdeen-icon";
import InstagramIcon from "../../../assets/icon/instagram-icon";
import FacebookIcon from "../../../assets/icon/facebook-icon";
import TwitterIcon from "../../../assets/icon/twitter-icon";

const FOOTER_LINKS = [
    {
        title: 'Company',
        links: [
            {
                text: 'Home',
                path: '/home'
            },
            {
                text: 'About',
                path: '/about'
            },
            {
                text: 'Services',
                path: '/services'
            },
            {
                text: 'Work',
                path: '/work'
            },
            {
                text: 'Insights',
                path: '/insights'
            },
        ]
    },
    {
        title: 'Services',
        links: [
            {
                text: 'UX UI Design',
                path: '/design'
            },
            {
                text: 'UX Research',
                path: '/research'
            },
            {
                text: 'Design System',
                path: '/system'
            },
            {
                text: 'Web App Design',
                path: '/webapp'
            },
            {
                text: 'Mobile App Design',
                path: '/mobileapp'
            },
        ]
    },
    {
        title: 'Reviews',
        links: [
            {
                text: 'Clutch (4.8)',
                path: '/cluth'
            },
            {
                text: 'Good Firms (4.9)',
                path: '/firms'
            },
            {
                text: 'Webflow (4.7)',
                path: '/webflow'
            },
            {
                text: 'Dribbble (4.8)',
                path: 'dribbble'
            },
        ]
    }
];
const FOOTER_CARDS = [
    {
        id: 1,
        thumbnail: Stripe,
        title: 'North America',
        desc: '1832 Norfolk st Houston Texas 77098',
        span: '+1 (480) 920-1123',
        path: 'tel:+1 (480) 920-1123'
    },
    {
        id: 2,
        thumbnail: Europe,
        title: 'Europe',
        desc: 'West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom',
        span: '+44 (746) 0766-922',
        path: 'tel:+44 (746) 0766-922'
    },
    {
        id: 3,
        thumbnail: SaudiArabia,
        title: 'Middle East',
        desc: '8640 Umat Al Karim, 4006, Al Majd District, Yanbu Al Bahr 46431',
        span: '+966 (56) 592-3840',
        path: 'tel:+966 (56) 592-3840'
    },
    {
        id: 4,
        thumbnail: Flag,
        title: 'Asia',
        desc: '144/2, Block B, Bankers Society Near DHA Phase 4, Lahore, 54792',
        span: '042-37888403',
        path: 'tel:042-37888403'
    },
]
const FOOTER_ICON = [
    {
        id: 1,
        icon: BeIcon,
        path: "https://www.behance.net",
    },
    {
        id: 2,
        icon: ChromeIcon,
        path: "https://www.google.com",
    },
    {
        id: 3,
        icon: LinkdeenIcon,
        path: "https://www.linkedin.com",
    },
    {
        id: 4,
        icon: InstagramIcon,
        path: "https://www.instagram.com",
    },
    {
        id: 5,
        icon: FacebookIcon,
        path: "https://www.facebook.com",
    },
    {
        id: 6,
        icon: TwitterIcon,
        path: "https://twitter.com",
    },
];
export default function Footer() {
    return (
        <>
            <footer className="py-8 border-t border-[#2A2A2A] bg-[#0B0B0B]">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8">
                        <img src={Zeeframe} alt="zeeframe" width={1241} height={181} />
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                            <div className="max-w-[446px]">
                                <p className="text-[#BDBDBD] w-full sm:max-w-[393px] text-lg font-normal leading-[27px]">
                                    We transform ideas into user-centered digital experiences for businesses worldwide,
                                    from Fortune 500s to startups, using Figma, Webflow, and no-code solutions.
                                </p>
                            </div>
                            {/* <div className="sm:flex flex-col sm:flex-row grid sm:grid-cols-1 grid-cols-2">
                                {FOOTER_LINKS.map((card) => (
                                    <div key={card.title} className="max-w-[216px] w-full">
                                        <h2 className="text-base text-white font-semibold pb-5">{card.title}</h2>
                                        <ul className="grid gap-3.5 ">
                                            {card.links.map((linkItem) => (
                                                <li key={linkItem.text}>
                                                    <Link
                                                        to={linkItem.path}
                                                        className="text-[#8F8F8F] text-[15px] font-normal hover:text-white transition"
                                                    >
                                                        {linkItem.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div> */}
                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 sm:flex sm:flex-row  sm:gap-10">
                                {FOOTER_LINKS.map((card) => (
                                    <div
                                        key={card.title}
                                        className="max-w-[216px] w-full sm:w-[216px] flex-shrink-0"
                                    >
                                        <h2 className="text-base text-white font-semibold pb-5">
                                            {card.title}
                                        </h2>
                                        <ul className="grid gap-3.5">
                                            {card.links.map((linkItem) => (
                                                <li key={linkItem.text}>
                                                    <Link
                                                        to={linkItem.path}
                                                        className="text-[#8F8F8F] text-[15px] font-normal hover:text-white transition"
                                                    >
                                                        {linkItem.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="px-6 py-6 bg-[#1A1A1A]">
                            <div className="px-5 py-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 ">
                                    {FOOTER_CARDS.map((card =>
                                        <div className="grid gap-3" key={card.id}>
                                            <img src={card.thumbnail} alt="card-image" width={34} height={24} />
                                            <div className="grid gap-1.5">
                                                <h2 className="text-xl text-white font-medium">{card.title}</h2>
                                                <p className="text-[#8E8E8E] text-sm font-normal">{card.desc}</p>
                                                <Link to={card.path} className="text-[#E1E1E1] text-base font-medium">{card.span}</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="py-3 flex sm:flex-row flex-col gap-5 justify-between items-center">
                            <p className="text-xs font-normal text-white/70">© ZeeFrames (Private) Limited. All Rights Reserved.</p>
                            <div className="flex items-center gap-4">
                                {FOOTER_ICON.map((card =>
                                    <Link
                                        key={card.id}
                                        to={card.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition hover:opacity-80"
                                    >
                                        <card.icon />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="floating_btn">
                <a target="_blank" href="https://wa.me/">
                    <div className="contact_icon">
                        <i className="fa fa-whatsapp my-float"></i>
                    </div>
                </a>
            </div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>

        </>
    );
}
