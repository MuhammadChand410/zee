import ContactUs from "../../component/common/header/contact-us";
import AdmainHero from "./admain-hero";
import AdminFrame from "./admin-frame";
import AdminScrolling from "./admin-scrolling";


export default function AdmainPage(){
    return(
        <>
        <AdmainHero />
        <AdminFrame/>
        <AdminScrolling/>
        <ContactUs/>
        </>
    )
}