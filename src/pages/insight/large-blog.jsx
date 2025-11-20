import DotIcon from "../../assets/icon/dot-icon";
import { BlogImage, EllipseImage } from "../../assets/images";



export default function LargeBlog() {
    return (
        <section className="bg-black py-8 md:py-20 relative" >
            <div class="absolute z-1 left-6 bottom-0">
                <img src={EllipseImage} alt="ellipse" width={1440} height={180} />
            </div>
            <div className="container">
                <div className="flex md:flex-row flex-col gap-8 md:gap-12 justify-between">
                    <img src={BlogImage} alt="blog-image" width={588} height={406} loading="lazy" />
                    <div className="">
                        <h2 className="text-[#FFF] text-[28px] md:text-[48px] pb-3 font-bold md:leading-normal leading-[40px] md:font-semibold font-[Geologica]">How Thinking Like a Product Designer Changed My Design Handoffs</h2>
                        <p className="md:text-xl font-normal text-sm pb-4 md:pb-6 md:text-[#FFF] text-[#BDBDBD] md:leading-normal leading-[21px]">Five lessons I’ve learned about deliverables that Junior Designer Me could’ve never imagined.</p>
                        <div className="flex gap-2 items-center">
                            <span className="text-sm text-[#FFF] font-normal">7 min read</span>
                            <DotIcon />
                            <span className="text-sm text-[#FFF] font-normal">Jan 23, 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}