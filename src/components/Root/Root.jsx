import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {


    return (
        <div>
            <div className="max-w-405 mx-auto mt-8 w-11/12">
                <NavBar className="bg-[#9538E2] rounded-t-4xl text-white"></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;