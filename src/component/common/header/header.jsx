import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoImage } from "../../../assets/images";
import ButtonArrow from "../../../assets/icon/button-arrow";
import ServiceHover from "./service-hover";

const HEADER_LINKS = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about-us" },
    { text: "Services", url: "/services" },
    { text: "Work", url: "/work" },
    { text: "Insights", url: "/insights" },
];

export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className="bg-[#0D0D0D] py-[22px] sticky top-0 left-0 z-[100]">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between relative">
                    <Link to="/" className="flex-shrink-0">
                        <img src={logoImage} alt="logo" width={179} height={36} />
                    </Link>

                    <ul className="hidden md:flex gap-8 relative">
                        {HEADER_LINKS.map((item) => (
                            <li key={item.text} className="relative ">
                                {item.text === "Services" ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
                                        onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)} >
                                        <button
                                            onClick={() => window.innerWidth < 768 && setIsOpen((prev) => !prev)}
                                            className="text-white text-lg font-normal cursor-pointer hover:text-[#F3FE00] hover:underline decoration-2 decoration-[#F3FE00] underline-offset-4 flex items-center gap-1 transition-all duration-300">
                                            Services
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className={`w-5 h-5 px-1 py-1 bg-[#464646] rounded-full transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {isOpen && (
                                        

                                            <div className="flex justify-center">
                                                <div className="absolute top-[30px] w-screen bg-[#090909] z-[90] border-t border-[#1a1a1a] animate-fadeIn" >
                                                    <ServiceHover onClose={() => setIsOpen(false)}/>
                                                </div>
                                            </div>
                                    
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.url}
                                        className="text-white text-lg font-normal hover:text-[#F3FE00] hover:underline decoration-2 decoration-[#F3FE00] underline-offset-4 transition-all duration-300" >
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            to="/work"
                            className="group relative flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-[#F3FE00] bg-[#F3FE00] text-[#0D0D0D] text-base font-semibold hover:bg-black hover:text-[#F3FE00] transition-all duration-300 overflow-hidden" >
                            <span className="transition-all duration-300 group-hover:opacity-0">Work with us</span>
                            <span className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100">Let’s Talk</span>
                            <span className="w-5 h-5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                <ButtonArrow />
                            </span>
                        </Link>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer text-white focus:outline-none" aria-label="theme toggler">
                        {menuOpen ? (
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="md:hidden mt-4 bg-[#0D0D0D] border-t border-gray-800 z-50">
                        <ul className="flex flex-col gap-4 py-4 px-4">
                            {HEADER_LINKS.map((item) => (
                                <li key={item.text} className="relative">
                                    {item.text === "Services" ? (
                                        <div>
                                            <button
                                                onClick={() => setIsOpen((prev) => !prev)}
                                                className="w-full text-white text-lg font-medium flex items-center justify-between px-4 py-2 hover:text-[#F3FE00] transition-all duration-300" >
                                                Services
                                                <svg
                                                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor" >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {isOpen && (
                                                <ul className="mt-2 bg-[#111] border border-white/10 rounded-xl py-2">
                                                    <ServiceHover />
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.url}
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-white text-lg font-medium px-4 py-2 hover:text-[#F3FE00] transition-all duration-300" >
                                            {item.text}
                                        </Link>
                                    )}
                                </li>
                            ))}

                            <li className="mt-4">
                                <Link
                                    to="/work"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#F3FE00] bg-[#F3FE00] text-[#0D0D0D] text-base font-semibold hover:bg-black hover:text-[#F3FE00] transition-all duration-300 w-full justify-center" >
                                    Work with us
                                    <ButtonArrow />
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>

    );
}


