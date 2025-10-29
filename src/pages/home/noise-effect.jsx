import ButtonArrow from "../../assets/icon/button-arrow";
import { NoiseImage, NoiseStar } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function NoiseEffect() {
    return (
        <section className=" bg-cover bg-center flex items-center justify-center h-[640px]" style={{
            backgroundImage: `url(${NoiseImage})`
        }}>
            <div className="container">
                <div className="flex sm:flex-row flex-col gap-8 sm:gap-15 ">
                    <div className="grid items-center">
                        <div className="sm:py-10 py-8">
                            <HeroContant heading='Design That Thinks. Interfaces That Feel.' classNamehead='sm:!text-[70px] !text-[28px]  !leading-[42px] sm:!leading-[96px] !text-start' desc='At ZeeFrames, we craft AI-ready design systems for modern software responsive, scalable, and human-centered.' classNameDesc='sm:!text-[18px] !text-start !text-base !leading-[25px] sm:!leading-[30px]' />
                        </div>
                        <div className="w-[198px] group">
                            <button
                                className="relative w-fit flex items-center justify-center gap-3 px-2 py-3 rounded-full border border-[#F3FE00] bg-[#F3FE00] text-[#0D0D0D] text-base font-semibold  hover:text-[#F3FE00] transition-all duration-500 overflow-hidden whiteSpace-nowrap hover:bg-black"
                            >
                                <span className="flex items-center justify-center w-[180px] group-hover:w-[90px] transition-all duration-500 ease-in-out">
                                    <span className="absolute transition-opacity duration-300 group-hover:opacity-0">
                                        See AI in Action
                                    </span>

                                    <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        Let’s Talk
                                    </span>

                                    <span className="absolute right-5 w-5 h-5 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                                        <ButtonArrow />
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={NoiseStar} alt="star" width={430} height={430} />
                    </div>
                </div>
            </div>
        </section>
    )
}