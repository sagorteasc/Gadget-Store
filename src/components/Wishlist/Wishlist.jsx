import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const Wishlist = ({ gadget, handleRemoveFromWishlist }) => {

    const { product_id, product_image, product_title, description, price } = gadget;

    return (
        <div>
            <div className="max-w-6xl mx-auto w-11/12">
                <div className="card card-side bg-base-100 drop-shadow-2xl mb-5 flex items-center justify-between">
                    <div className="grid grid-cols-[200px_1fr]">
                        <figure className="lg:mx-auto">
                            <img className="w-full h-40 rounded-3xl p-5" src={product_image} />
                        </figure>
                        <div className="p-5 space-y-2">
                            <div>
                                <h2 className="font-semibold text-[28px]">{product_title}</h2>
                                <p className="opacity-60 text-lg">{description}</p>
                            </div>

                            <p className="font-semibold text-xl opacity-80 mb-2">Price: ${price}</p>
                        </div>
                    </div>

                    <div className="mr-5">
                        <button
                            onClick={() => handleRemoveFromWishlist(product_id)}
                            className="btn rounded-full px-1 py-6">
                            <MdDeleteForever className="w-10 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Wishlist.propTypes = {
    gadget: PropTypes.object.isRequired,
    handleRemoveFromWishlist: PropTypes.func.isRequired
}

export default Wishlist;