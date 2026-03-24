import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Earbuds = () => {

    const phonesData = useLoaderData();
    const filterData = phonesData.filter(category => category.category === 'Earbuds');

    return (
        <div>
            <Banner></Banner>
            <h3 className="font-bold text-4xl text-center mb-10 mt-96">Explore Cutting-Edge Gadgets</h3>
            <div className="max-w-6xl mx-auto w-full">
                <div>
                    <div className="grid grid-cols-1 gap-2 w-full lg:grid-cols-[0.15fr_1fr]">
                        <div className="flex flex-col gap-2">
                            <button className="btn bg-white text-black"><NavLink to={"/"}>All</NavLink></button>
                            <button className="btn bg-white text-black"><NavLink to={"/phones"}>Phones</NavLink></button>
                            <button className="btn bg-white text-black"><NavLink to={"/iPhones"}>Iphones</NavLink></button>
                            <button className="btn bg-white text-black"><NavLink to={"/laptops"}>Laptops</NavLink></button>
                            <button className="btn btn-primary"><NavLink to={"/earbuds"}>Earbuds</NavLink></button>
                            <button className="btn bg-white text-black"><NavLink to={"/tablets"}>Tablets</NavLink></button>
                            <button className="btn bg-white text-black"><NavLink to={"/smartWatches"}>Smart Watches</NavLink></button>
                            <button className="btn bg-white text-black"><NavLink to={"/accessories"}>Accessories</NavLink></button>
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
    );
};

export default Earbuds;