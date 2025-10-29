

import { Outlet } from "react-router-dom";
import Footer from "../component/common/footer/footer";
import Header from "../component/common/header/header";

export default function Layouts() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}