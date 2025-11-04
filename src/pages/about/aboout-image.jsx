import { ImageFull } from "../../assets/images";

export default function AboutImage() {
    return (
        <section className="sticky top-0 z-[-1]">
            <img src={ImageFull} alt="image-full" width={1440} height={677} loading="lazy" />
        </section>
    )
}