import { TeamImage } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function OurTeam() {
    const TeamMember = ({ image, name, role, className = "" }) => (
        <div className={className}>
            <img
                src={image}
                className="w-full pb-4 object-cover"
                alt="team-member"
                width={310}
                height={360}
                loading="lazy"
            />
            <div className="flex justify-between">
                <h2 className="text-base text-[#FFF] font-normal">{name}</h2>
                <p className="text-base font-normal text-[#EFEFEF]">{role}</p>
            </div>
        </div>
    );
    return (
        <section className=" ">
            <div className="sticky pt-8 sm:pt-20 top-4 z-[-1] bg-black">
                <div className="grid justify-center">
                    <div className="max-w-[436px] pb-8 sm:pb-20">
                        <HeroContant subheading={`OUR TEAM`} classNameSub={`!pb-4`} heading={`Meet the people behind the magic`} classNamehead={`sm:!leading-[54px] !leading-[40px] !pb-4`} desc={`Rest assured. Your project is in good hands.`}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                {/* <div className={`grid gap-6 md:gap-18 pb-8 sm:pb-20`}>
                    <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-8">
                        <div className="pl-[0px] md:pl-[290px]">
                            <img
                                src={TeamImage} className="w-full pb-4" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                        <div className=" pl-[0px] md:pl-[290px] mt-[0px] md:mt-[120px] grid gap-4">
                            <img
                                src={TeamImage} className="w-full" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 md:gap-8">
                        <div className="">
                            <img
                                src={TeamImage} className="w-full pb-4" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                        <div className="pl-[0px] md:pl-[290px] mt-[0px] md:mt-[120px] grid gap-4">
                            <img
                                src={TeamImage} className="w-full" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6 md:gap-8">
                        <div className="pl-[0px] md:pl-[260px]">
                            <img
                                src={TeamImage} className="w-full pb-4" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                        <div className="pl-[0px] md:pl-[290px] mt-[0px] md:mt-[120px] grid gap-4">
                            <img
                                src={TeamImage} className="w-full" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-8">
                        <div className="">
                            <img
                                src={TeamImage} className="w-full pb-4" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                        <div className="mt-[0px] md:mt-[250px] grid gap-4">
                            <img
                                src={TeamImage} className="w-full" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                        <div className="mt-[0px] md:mt-[100px]">
                            <img
                                src={TeamImage} className="w-full pb-4" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-8">
                        <div className="mt-[0px] md:mt-[200px] grid gap-4">
                            <img
                                src={TeamImage} className="w-full" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                        <div className="mt-[0px] md:mt-[100px]">
                            <img
                                src={TeamImage} className="w-full pb-4" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                        <div className="">
                            <img
                                src={TeamImage} className="w-full pb-4" alt="team-image" width={310} height={360} loading="lazy"
                            />
                            <div className="flex justify-between">
                                <h2 className="text-base text-[#FFF] font-normal">Muhammad Baber</h2>
                                <p className="text-base font-normal text-[#EFEFEF]">Design Director</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="grid gap-6 md:gap-18 pb-8 sm:pb-20">

                    <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-8">
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="pl-[0px] md:pl-[290px]" />
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="pl-[0px] md:pl-[290px] mt-[0px] md:mt-[100px]" />
                    </div>


                    <div className="flex md:flex-row flex-col gap-6 md:gap-8">
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" />
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="pl-[0px] md:pl-[220px] mt-[0px] md:mt-[100px]" />
                    </div>


                    <div className="flex md:flex-row flex-col gap-6 md:gap-8">
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="pl-[0px] md:pl-[105px]" />
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="pl-[0px] md:pl-[320px] mt-[0px] md:mt-[100px]" />
                    </div>


                    <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-8">
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" />
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="mt-[0px] pr-[0px] md:pr-[110px] md:mt-[300px]" />
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="mt-[0px] md:mt-[100px]" />
                    </div>


                    <div className="flex md:flex-row flex-col justify-between gap-6 md:gap-8">
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="mt-[0px] md:mt-[200px]" />
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" className="mt-[0px] md:mt-[100px]" />
                        <TeamMember image={TeamImage} name="Muhammad Baber" role="Design Director" />
                    </div>
                </div>
            </div>
        </section>
    );
}