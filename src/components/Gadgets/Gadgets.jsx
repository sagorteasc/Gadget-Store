import PropTypes from "prop-types";
import { use } from "react";
import Gadget from "../Gadget/Gadget";
import { NavLink } from "react-router-dom";

const Gadgets = ({ gadgetsPromise }) => {

    const gadgetsData = use(gadgetsPromise);

    return (
        <div>
            <h3 className="font-bold text-4xl text-center mb-10">Explore Cutting-Edge Gadgets</h3>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-[100px_1fr]">
                <div className="flex flex-col gap-2">
                    <button className="btn btn-primary"><NavLink to={"/"}>All</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/"}>Phones</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/"}>Iphones</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/"}>Laptops</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/"}>Earbuds</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/"}>Tablets</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/"}>Smart Watches</NavLink></button>
                    <button className="btn bg-white text-black"><NavLink to={"/"}>Accessories</NavLink></button>
                </div>
                <div className="grid grid-cols-1 gap-5 mb-16 md:grid-cols-2 lg:grid-cols-3">
                    {
                        gadgetsData.map(gadgetData => <Gadget
                            key={gadgetData.product_id}
                            gadgetData={gadgetData}
                        ></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

Gadgets.propTypes = {
    gadgetsPromise: PropTypes.instanceOf(Promise).isRequired
}

export default Gadgets;