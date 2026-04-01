import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Accessories = () => {

    const phonesData = useLoaderData();
    const filterData = phonesData.filter(category => category.category === 'Accessories');

    return (
        <div>
            <div>
                <Banner></Banner>
                <h3 className="font-bold text-4xl text-center mb-10 mt-10 md:mt-96">Explore Cutting-Edge Gadgets</h3>
                <div className="max-w-6xl mx-auto w-full">
                    <div>
                        <div className="grid gap-3 w-full lg:grid-cols-[0.15fr_1fr]">
                            <div className="flex flex-wrap justify-center mx-auto gap-2 lg:mx-0 lg:flex-col lg:justify-normal">
                                <NavLink className={({ isActive }) => isActive ? "btn btn-primary" : "btn"} to={"/"}>All</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn btn-primary" : "btn"} to={"/phones"}>Phones</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn btn-primary" : "btn"} to={"/iPhones"}>Iphones</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn btn-primary" : "btn"} to={"/laptops"}>Laptops</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn btn-primary" : "btn"} to={"/earbuds"}>Earbuds</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn btn-primary" : "btn"} to={"/tablets"}>Tablets</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn btn-primary" : "btn"} to={"/smartWatches"}>Smart Watches</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "btn btn-primary" : "btn"} to={"/accessories"}>Accessories</NavLink>
                            </div>
                            <div className="grid grid-cols-1 gap-5 mb-16 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    filterData.length === 0 ?
                                        <div className="flex justify-center items-center h-40 col-span-full">
                                            <h3 className="font-bold text-3xl">No Product Available</h3>
                                        </div>
                                        : (filterData.map(allData => <Product
                                            key={allData.product_id}
                                            allData={allData}
                                        ></Product>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;