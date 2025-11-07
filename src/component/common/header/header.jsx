import { useState } from "react";
import { Link } from "react-router-dom";
import { logoImage } from "../../../assets/images";
import ButtonArrow from "../../../assets/icon/button-arrow";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const HEADER_LINKS = [
        {
            text: "Home",
            url: "/"
        },
        {
            text: "About",
            url: "/about-us"
        },
        {
            text: "Services",
            url: "/services"
        },
        {
            text: "Work",
            url: "/work"
        },
        {
            text: "Insights",
            url: "/insights"
        },
    ];

    const SERVICE_DROPDOWN = [
        {
            text: "Product Strategy",
            url: "/product"
        },
        {
            text: "App Development",
            url: "/services/app-development"
        },
        {
            text: "UI/UX Design",
            url: "/services/ui-ux"
        },
        {
            text: "AI Solutions",
            url: "/services/ai"
        },
    ];

    return (
        <header className="bg-black py-6 sticky top-0 left-0 z-50">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link to="/">
                        <img src={logoImage} alt="logo" width={179} height={36} />
                    </Link>

                    <ul className="hidden md:flex gap-8 relative">
                        {HEADER_LINKS.map((item) => (
                            <li key={item.text} className="relative">
                                {item.text === "Services" ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsOpen((prev) => !prev)}
                                            className="text-white cursor-pointer text-lg font-normal hover:text-[#F3FE00] hover:underline decoration-2 decoration-[#F3FE00] underline-offset-4 transition-all duration-300 flex items-center gap-1"
                                        >
                                            Services
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className={`w-5 h-5 px-1 py-1 bg-[#464646] rounded-full transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>

                                        {isOpen && (
                                            <ul className="absolute left-0 top-full mt-2 w-48 bg-[#111] border border-white/10 rounded-xl shadow-lg py-2 z-50">
                                                {SERVICE_DROPDOWN.map((service) => (
                                                    <li key={service.text}>
                                                        <Link
                                                            to={service.url}
                                                            onClick={() => setIsOpen(false)}
                                                            className="block px-4 py-2 text-white text-sm hover:bg-[#F3FE00] hover:text-black transition-all duration-300"
                                                        >
                                                            {service.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.url}
                                        className="text-white text-lg font-normal hover:text-[#F3FE00] hover:underline decoration-2 decoration-[#F3FE00] underline-offset-4 transition-all duration-300"
                                    >
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex justify-end">
                        <Link
                            to="/work"
                            className="group relative flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-[#F3FE00] bg-[#F3FE00] text-[#0D0D0D] text-base font-semibold hover:bg-black hover:text-[#F3FE00] transition-all duration-300 overflow-hidden"
                        >
                            <span className="transition-all duration-300 group-hover:opacity-0">
                                Work with us
                            </span>
                            <span className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100">
                                Let’s Talk
                            </span>
                            <span className="w-5 h-5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                <ButtonArrow />
                            </span>
                        </Link>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="md:hidden text-center mt-6 bg-black border-t border-gray-800">
                        <ul className="flex flex-col gap-4 py-4 px-4">
                            {HEADER_LINKS.map((item) => (
                                <li key={item.text}>
                                    {item.text === "Services" ? (
                                        <div>
                                            <button
                                                onClick={() => setIsOpen((prev) => !prev)}
                                                className="w-full text-white text-xl font-medium hover:text-[#F3FE00] flex items-center gap-2 justify-center"
                                            >
                                                <span >Services</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className={`w-5 h-5 px-1 py-1 bg-[#464646] rounded-full transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {isOpen && (
                                                <ul className="mt-2 bg-[#111] border border-white/10 rounded-xl py-2">
                                                    {SERVICE_DROPDOWN.map((service) => (
                                                        <li key={service.text}>
                                                            <Link
                                                                to={service.url}
                                                                onClick={() => {
                                                                    setMenuOpen(false);
                                                                    setIsOpen(false);
                                                                }}
                                                                className="block px-4 py-2 text-white text-sm hover:bg-[#F3FE00] hover:text-black transition-all duration-300"
                                                            >
                                                                {service.text}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.url}
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-white text-xl font-medium hover:text-[#F3FE00] transition-all duration-300"
                                        >
                                            {item.text}
                                        </Link>
                                    )}
                                </li>
                            ))}

                            <div className="mt-6 text-center">
                                <Link
                                    to="/work"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#F3FE00] bg-[#F3FE00] text-[#0D0D0D] text-base font-semibold hover:bg-black hover:text-[#F3FE00] transition-all duration-300"
                                >
                                    Work with us
                                    <ButtonArrow />
                                </Link>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

