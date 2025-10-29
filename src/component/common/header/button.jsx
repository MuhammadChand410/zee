import ButtonArrow from "../../../assets/icon/button-arrow";

export default function Button({ text, textt, startIcon, endIcon, className, onClick, type = "submint" }) {
    return (
        // <button type={type} onClick={onClick} className={`py-2.5 flex items-center justify-center px-4 cursor-pointer bg-white text-base font-semibold rounded-full text-[#030303]  ${className && className}`}>
        //     {startIcon && startIcon}
        //     {text}
        //     {endIcon && endIcon}
        // </button>
        <button type={type} onClick={onClick} className={`flex  group relative items-center justify-center gap-3 px-5 py-3 rounded-full border border-[#F3FE00] bg-[#F3FE00] text-[#0D0D0D] text-base font-semibold hover:bg-black hover:text-[#F3FE00] transition-all duration-300 overflow-hidden ${className && className}`}>
            <span className="transition-all duration-300 group-hover:opacity-0">
                {startIcon && startIcon}
                {text}
                {endIcon && endIcon}
            </span>
            <span className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100">
                {startIcon && startIcon}
                {textt}
                {endIcon && endIcon}
            </span>
            <span className="w-5 h-5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <ButtonArrow />
            </span>
        </button>
    )
}

