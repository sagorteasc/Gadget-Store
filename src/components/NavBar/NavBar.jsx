import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ className }) => {

    const navList = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/statistics"}>Statistics</Link></li>
        <li><Link to={""}>Dashboard</Link></li>
    </>

    return (
        <div>
            <div className={`navbar ${className}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navList}
                        </ul>
                    </div>
                    <h3 className="font-bold text-xl hidden lg:flex">Gadget Store</h3>
                </div>
                <div className="navbar-center">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navList}
                        </ul>
                    </div>
                    <h3 className="font-bold text-xl flex lg:hidden">Gadget Store</h3>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <FaRegHeart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;