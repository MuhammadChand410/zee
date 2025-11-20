import { NoiseImage, NoiseStar } from "../../assets/images";
import Button from "../../component/common/header/button";
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
                        <div className="group w-[190px]">
                            <Button text='See AI in Action' textt='Let’s Talk' className='!w-[190px] group-hover:!w-[120px]' />
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