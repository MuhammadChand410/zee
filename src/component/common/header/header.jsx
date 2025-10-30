import { Link } from "react-router-dom";
import { useState } from "react";
import { logoImage } from "../../../assets/images";
import ButtonArrow from "../../../assets/icon/button-arrow";
import Button from "./button";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <header className="bg-black py-6 sticky top-0 left-0 z-50">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link to="/">
                        <img src={logoImage} alt="logo" width={179} height={36} />
                    </Link>

                    <ul className="hidden md:flex gap-8">
                        {HEADER_LINKS.map((item) => (
                            <li key={item.text}>
                                <Link
                                    to={item.url}
                                    className="text-white text-lg font-normal hover:text-[#F3FE00] hover:underline decoration-2 decoration-[#F3FE00] underline-offset-4 transition-all duration-300"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-end">
                        <Link to='/work' className="hidden md:flex group relative items-center justify-center gap-3 px-8 py-3 rounded-full border border-[#F3FE00] bg-[#F3FE00] text-[#0D0D0D] text-base font-semibold hover:bg-black hover:text-[#F3FE00] transition-all duration-300 overflow-hidden">
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
                    {/* <Button text='Work with us' textt='Let’s Talk' className='!sm:hidden' /> */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </nav>

                {menuOpen && (
                    <div className="md:hidden mt-8 bg-black border-t border-gray-700">
                        <ul className="flex h-screen flex-col gap-4 py-4 px-4">
                            <div className="grid sm:items-center sm:gap-8 gap-6 justify-center">
                                {HEADER_LINKS.map((item) => (
                                    <li key={item.text}>
                                        <Link
                                            to={item.url}
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-white sm:text-lg text-3xl sm:font-normal font-semibold text-center hover:text-[#F3FE00] hover:underline decoration-2 decoration-[#F3FE00] underline-offset-4 transition-all duration-300"
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                            <div className="grid justify-center">
                                <button className="w-fit flex gap-3 items-center sm:w-full mt-4 px-8 py-3 rounded-full border border-[#F3FE00] bg-[#F3FE00] text-[#0D0D0D] font-semibold hover:bg-black hover:text-[#F3FE00] transition-all duration-300">
                                    Work with us
                                    <ButtonArrow />
                                </button>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
