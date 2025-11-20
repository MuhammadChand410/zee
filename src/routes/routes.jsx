import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/layouts";
import Home from "../pages/home";
import AboutUs from "../pages/about";
import Work from "../pages/work";
import Insights from "../pages/insight";
import ScrollToTop from "./scroll-to-top";
import AdmainPage from "../pages/admin";

import ProductStrategy from "../pages/product-design/product";
import UxSearch from "../pages/product-design/ux-search";
import ProductRoadmap from "../pages/product-design/roadmap";
import ExperienceArchitecture from "../pages/product-design/experance-achivement";
import UiUxDesign from "../pages/product-design/ui-ux";
import DesignGuideline from "../pages/product-design/design-guideline";
import PrototypingTesting from "../pages/product-design/prototyping-testing";
import InteractionDesign from "../pages/product-design/Interaction-design";
import UxAudit from "../pages/product-design/ux-audit";
import BrandIdentity from "../pages/brading-solution/brand-identity";
import BrandPositioning from "../pages/brading-solution/brand-positioning";
import CreativeDirection from "../pages/brading-solution/creative-direction";
import VisualDesign from "../pages/brading-solution/visual-design";
import RebrandingEvolution from "../pages/brading-solution/rebranding-evolution";
import WebflowDevelopment from "../pages/no-code-development/webflow-development";
import FramerDevelopment from "../pages/no-code-development/framer-development";
import BubbleDevelopment from "../pages/no-code-development/bubble-development";
import FigmaSites from "../pages/no-code-development/figma-sites";
import PlatformSupport from "../pages/no-code-development/platform-support";


export default function MyRoutes() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layouts />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/insights" element={<Insights />} />
                        <Route path="/dashboard" element={<AdmainPage />} />
                        <Route path="/product" element={<ProductStrategy />} />
                        <Route path="/uxsearch" element={<UxSearch />} />
                        <Route path="/roadmap" element={<ProductRoadmap/>}/>
                        <Route path="/experience" element={<ExperienceArchitecture/>}/>
                        <Route path="/uiuxdesign" element={<UiUxDesign/>}/>
                        <Route path="/designguideline" element={<DesignGuideline/>}/>
                        <Route path="/prototyping/testing" element={<PrototypingTesting/>}/>
                        <Route path="/interaction/design" element={<InteractionDesign/>}/>
                        <Route path="/uxaudit" element={<UxAudit/>}/>
                        <Route path="/brand/identity" element={<BrandIdentity/>}/>
                        <Route path="/brand/positioning" element={<BrandPositioning/>}/>
                        <Route path="/creatve/direction" element={<CreativeDirection/>}/>
                        <Route path="/visual/design" element={<VisualDesign/>}/>
                        <Route path="/rebranding/evolution" element={<RebrandingEvolution/>}/>
                        <Route path="/webflow/development" element={<WebflowDevelopment/>}/>
                        <Route path="/framer/development" element={<FramerDevelopment/>}/>
                        <Route path="/bubble/development" element={<BubbleDevelopment/>}/>
                        <Route path="/figma/sites" element={<FigmaSites/>}/>
                        <Route path="/platform/support" element={<PlatformSupport/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}