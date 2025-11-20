import HeroContant from "../../component/common/hero-contant/hero-contant";
import ShareIcon from "../../assets/icon/share-icon";
import DashboardDot from "../../assets/icon/dashbord-dot";
import { DashboardHeroImage } from "../../assets/images";

export default function AdmainHero() {
    return (
        <section className="py-8 md:py-25 bg-black">
            <div className="container">
                <div className="grid md:gap-16 gap-8">
                    <div className="grid gap-6 md:gap-10">
                        <HeroContant classNamemax={`!max-w-full`} subheading={`Posted by: Admin`} classNameSub={`!text-[#CDCDCD] !text-start md:!text-lg !text-base !pb-6`} heading={`How Thinking Like a Product Designer Changed My Design Handoffs`} classNamehead={`md:!text-[48px] !text-[32px] !text-start !font-semibold md:!leading-[120%] leading-[44px] md:!pb-5 !pb-4`} desc={`Five lessons I’ve learned about deliverables that Junior Designer Me could’ve never imagined.`} classNameDesc={`!text-start !text-[#CDCDCD] !leading-[24px] !text-xl`} />
                        <div className="flex justify-between items-center py-4.5" style={{
                            borderTop: "1px solid #252525",
                            borderBottom: " 1px solid #252525"
                        }}>
                            <div className="flex gap-2 items-center">
                                <time className="text-[#CDCDCD] text-lg font-normal">7 min read</time>
                                <DashboardDot />
                                <time className="text-[#CDCDCD] text-lg font-normal">Jan 23, 2025</time>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-[#252525] rounded-[29px]">
                                <ShareIcon />
                                <p className="text-sm text-[#CDCDCD] font-normal">Share</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={DashboardHeroImage} alt="dashboard-image" width={1210} height={539} loading="lazy" />
                    </div>
                </div>
            </div>
        </section >
    )
}