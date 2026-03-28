import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {


    return (
        <div>
            <div className="max-w-405 mx-auto mt-8 w-11/12">
                <NavBar></NavBar>
                <Outlet></Outlet>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;