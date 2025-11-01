export default function ButtonHero({ text, textt, startIcon, endIcon, className, onClick, type = "submint" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`group relative flex items-center justify-center gap-3 px-4 md:px-8 py-3 rounded-full border border-[#FFF] bg-[#FFF] text-black text-base font-semibold hover:bg-black hover:text-[#FFF] transition-all duration-300 overflow-hidden ${className || ""}`}
        >
            <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full">
                {text}
            </span>

            <span className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100 translate-x-full group-hover:translate-x-0">
                {textt}
            </span>

            {(startIcon || endIcon) && (
                <span className="w-5 h-5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    {endIcon || startIcon}
                </span>
            )}
        </button>
    )
}