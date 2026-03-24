import PropTypes from "prop-types";
import { use } from "react";
import { NavLink } from "react-router-dom";
import Product from "../Product/Product";

const AllProducts = ({ productsPromise }) => {

    const productsData = use(productsPromise);

    return (
        <div>
            <h3 className="font-bold text-4xl text-center mb-10">Explore Cutting-Edge Gadgets</h3>
            <div className="grid grid-cols-1 gap-2 w-full lg:grid-cols-[0.15fr_1fr]">
                <div className="flex flex-col gap-2">
                    <button className="btn btn-primary"><NavLink to={"/"}>All</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/phones"}>Phones</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/iPhones"}>Iphones</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/laptops"}>Laptops</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/earbuds"}>Earbuds</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/tablets"}>Tablets</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/smartWatches"}>Smart Watches</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/accessories"}>Accessories</NavLink></button>
                </div>
                <div className="grid grid-cols-1 gap-5 mb-16 md:grid-cols-2 lg:grid-cols-3">
                    {
                        productsData.map(allData => <Product
                            key={allData.product_id}
                            allData={allData}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

AllProducts.propTypes = {
    productsPromise: PropTypes.instanceOf(Promise).isRequired
}

export default AllProducts;