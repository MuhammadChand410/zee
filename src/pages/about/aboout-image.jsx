import { ImageFull } from "../../assets/images";

export default function AboutImage(){
    return(
        <section>
            <img src={ImageFull} alt="image-full" width={1440} height={677} loading="lazy" />
        </section>
    )
}