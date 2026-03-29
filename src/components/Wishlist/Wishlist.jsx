import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const Wishlist = ({ gadget, handleRemoveFromWishlist, handleAddToCartFromWishlist }) => {

    const { product_id, product_image, product_title, description, price } = gadget;

    return (
        <div>
            <div className="max-w-6xl mx-auto w-11/12">
                <div className="card card-side bg-base-100 drop-shadow-2xl mb-5 flex flex-col items-center justify-between lg:flex-row">
                    <div className="grid w-full md:grid-cols-[200px_1fr]">
                        <figure className="lg:mx-auto">
                            <img className="w-full object-contain h-40 rounded-3xl p-5" src={product_image} />
                        </figure>

                        <div className="space-y-2 p-5">
                            <div>
                                <h2 className="font-semibold text-2xl md:text-[28px]">{product_title}</h2>
                                <p className="opacity-60 text-lg">{description}</p>
                            </div>

                            <p className="font-semibold text-base opacity-80 mb-2 md:text-xl">Price: ${price}</p>
                        </div>

                    </div>

                    <div className="flex w-full mr-5 mb-3 justify-end items-center lg:w-auto lg:mb-0">

                        <button
                            onClick={() => handleAddToCartFromWishlist(product_id)}
                            className="btn rounded-4xl mr-2"
                        >
                            Add To Cart
                        </button>

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
    handleRemoveFromWishlist: PropTypes.func.isRequired,
    handleAddToCartFromWishlist: PropTypes.func.isRequired,
}

export default Wishlist;