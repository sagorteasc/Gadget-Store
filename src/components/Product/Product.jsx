import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Product = ({ allData }) => {

    const { product_id, product_image, product_title, price } = allData;

    return (
        <div>
            <div className="card bg-[#eeeaea88] text-black w-full h-full shadow-sm">
                <figure className="px-5 pt-5">
                    <img
                        src={product_image}
                        className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body">
                    <h2 className="font-semibold text-xl">{product_title}</h2>
                    <p className="text-[#09080F60] font-medium text-xl">Price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/product/${product_id}`}><button className="btn text-[#9538E2] font-semibold text-lg border border-[#9538E2] rounded-4xl bg-white shadow-none">View Details</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    allData: PropTypes.object.isRequired
}

export default Product;