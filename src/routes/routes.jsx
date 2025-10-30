import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Home from "../pages/home";
import AboutUs from "../pages/about";
import Services from "../pages/services";
import Work from "../pages/work";
import Insights from "../pages/insight";

export default function MyRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layouts />}>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about-us" element={<AboutUs/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/work" element={<Work/>}/>
                        <Route path="/insights" element={<Insights />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}