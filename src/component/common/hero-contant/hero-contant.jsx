
export default function HeroContant({ subheading, heading, desc, classNameSub, classNamemax, classNamehead, classNameDesc, }) {
    return (
        <div className={`max-w-[750px] ${classNamemax && classNamemax}`}>
            {subheading &&
                <h2 className={`text-[#F3FE00] text:sm sm:text-base font-normal text-center pb-2 sm:pb-4 ${classNameSub && classNameSub}`}>{subheading && subheading}</h2>
            }
            <h3 className={`text-[28px] sm:text-[40px] font-[Geologica] font-bold leading-[20px] text-center sm:leading-[40px] text-white pb-2 sm:pb-4 ${classNamehead && classNamehead}`}>{heading && heading}</h3>
            <p className={`text-sm font-normal leading-[16px] text-center sm:leading-[21px] text-[#BDBDBD] ${classNameDesc && classNameDesc}`}>{desc && desc}</p>
        </div>
    )
}