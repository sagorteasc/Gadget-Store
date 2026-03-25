import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {

    const location = useLocation();

    return (
        <div>
            <div className="max-w-405 mx-auto mt-8 w-11/12">
                <NavBar className=
                    {
                        location.pathname === "/statistics" || location.pathname === "/dashboard" || location.pathname.startsWith("/product/") ?
                            "bg-base-100 rounded-none text-black"
                            : "bg-[#9538E2] rounded-t-4xl text-white"
                    }>
                </NavBar>

                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;