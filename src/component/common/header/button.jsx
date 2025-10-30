import ButtonArrow from "../../../assets/icon/button-arrow";

export default function Button({ text, textt, startIcon, endIcon, className, onClick, type = "submint" }) {
    return (
        // <button type={type} onClick={onClick} className={`py-2.5 flex items-center justify-center px-4 cursor-pointer bg-white text-base font-semibold rounded-full text-[#030303]  ${className && className}`}>
        //     {startIcon && startIcon}
        //     {text}
        //     {endIcon && endIcon}
        // </button>
        <>
            
                <button type={type} onClick={onClick}
                    className={`relative px-3 flex items-center justify-center w-[230px] group-hover:w-[120px] h-[48px] rounded-full border border-[#F3FE00]
                                                            bg-[#F3FE00] text-[#0D0D0D] text-base font-semibold 
                                                            hover:bg-black hover:text-[#F3FE00] transition-all duration-500 overflow-hidden ${className && className}`}
                >
                    <div className="flex items-center justify-center gap-2 transition-all duration-500 group-hover:opacity-0">
                        <span className="text-base font-semibold">
                            {startIcon && startIcon}
                            {text}
                            {endIcon && endIcon}
                        </span>
                        <span className="w-5 h-5 flex justify-center items-center">
                            <ButtonArrow />
                        </span>
                    </div>
                    <div className="absolute px-2 inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <span>
                            {startIcon && startIcon}
                            {textt}
                            {endIcon && endIcon}
                        </span>
                    </div>
                </button>
            
        </>
    )
}

