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
         {
            id: 6,
            thumbnail: ImageOne
        },
        {
            id: 7,
            thumbnail: ImageWho
        },
        {
            id: 8,
            thumbnail: ImageTwo
        },
        {
            id: 9,
            thumbnail: ImageThree
        },
        {
            id: 10,
            thumbnail: ImageFour
        },
    ]
    return (
        <section className="bg-black pt-8 sm:pt-20">
            <div className="">
                <div className="grid gap-8 sm:gap-16">
                    <div className="flex justify-center">
                        <HeroContant subheading={`OUR CULTURE`} classNameSub={`!pb-4`} heading={`Behind The Scenes`} classNamehead={`!pb-4`} desc={`We believe in clear communication, proactive problem solving, and full transparency..`} />
                    </div>
                    <div className="main-animate max-w-full overflow-hidden">
                        <div className="slider">
                            <div className="slide-trackk flex gap-2">
                                {IMAGE_WHO.map((card) => (
                                    <div
                                        key={card.id}
                                        className="slidee relative overflow-hidden" style={{ filter: 'grayscale(100%)' }}
                                    >
                                        <img
                                            src={card.thumbnail}
                                            alt="image-who"
                                            width={282}
                                            height={360}
                                            loading="lazy"
                                            className="slide-img w-[282px] h-[360px] object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}