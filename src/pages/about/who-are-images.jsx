import { ImageFour, ImageOne, ImageThree, ImageTwo, ImageWho } from "../../assets/images";
import HeroContant from "../../component/common/hero-contant/hero-contant";

export default function WhoAreSection() {
    const IMAGE_WHO = [
        {
            id: 1,
            thumbnail: ImageOne
        },
        {
            id: 2,
            thumbnail: ImageWho
        },
        {
            id: 3,
            thumbnail: ImageTwo
        },
        {
            id: 4,
            thumbnail: ImageThree
        },
        {
            id: 5,
            thumbnail: ImageFour
        },
    ]
    return (
        <section className="bg-black pt-8 sm:pt-20">
            <div className="">
                <div className="grid gap-8 sm:gap-16">
                    <div className="flex justify-center">
                        <HeroContant subheading={`our culture`} heading={`Behind The Scenes`} desc={`We believe in clear communication, proactive problem solving, and full transparency..`} />
                    </div>
                    {/* <div className="flex gap-2">
                        {IMAGE_WHO.map((card =>
                            <div key={card.id}>
                                <img src={card.thumbnail} alt="image-who" width={282} height={360} loading="lazy" />
                            </div>
                        ))}
                    </div> */}
                    <div className="flex gap-2">
                        {IMAGE_WHO.map((card) => (
                            <div
                                key={card.id}
                                className="relative overflow-hidden"
                            >
                                <img
                                    src={card.thumbnail}
                                    alt="image-who"
                                    width={282}
                                    height={360}
                                    loading="lazy"
                                    className="w-[282px] h-[360px] object-cover"
                                />
                                <div className="absolute inset-0 bg-[#00000080]"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}