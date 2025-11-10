import ContactUs from "./contact-us";
import ConsultingService from "./cunsulting-service";
import ImpactProduct from "./impact-product";
import ProcessCard from "./process-card";
import ProductHero from "./product-hero";

export default function Product(){
    return(
        <>
        <ProductHero/>
        <ImpactProduct />
        <ProcessCard/>
        <ConsultingService/>
        <ContactUs/>
        </>
    )
}