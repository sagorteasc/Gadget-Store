import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {

    const location = useLocation();

    return (
        <div>
            <div className="max-w-405 mx-auto mt-8 w-11/12">
                <NavBar className={location.pathname === "/dashboard" || location.pathname === "/statistics" ? "bg-base-100 rounded-none" : "bg-[#9538E2] rounded-t-4xl"}></NavBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;