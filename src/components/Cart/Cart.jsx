import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const Cart = ({ gadget, handleRemoveFromCart }) => {

    const { product_id, product_image, product_title, price, description } = gadget

    return (
        <div>
            <div className="max-w-6xl mx-auto w-11/12">
                <div className="card card-side bg-base-100 drop-shadow-2xl mb-5 flex items-center justify-between">
                    <div className="grid md:grid-cols-[200px_1fr]">
                        <figure className="lg:mx-auto">
                            <img className="w-full object-contain h-40 rounded-3xl p-5" src={product_image} />
                        </figure>

                        <div className="w-89.25 flex items-center justify-between">
                            <div className="space-y-2 p-5">
                                <div>
                                    <h2 className="font-semibold text-2xl md:text-[28px]">{product_title}</h2>
                                    <p className="opacity-60 text-lg">{description}</p>
                                </div>

                                <p className="font-semibold text-base opacity-80 mb-2 md:text-xl">Price: ${price}</p>
                            </div>
                            <div className="mr-2 md:hidden">
                                <button
                                    onClick={() => handleRemoveFromCart(product_id)}
                                    className="btn rounded-full px-1 py-6">
                                    <MdDeleteForever className="w-10 h-6" />
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className=" mr-5 hidden md:block">
                        <button
                            onClick={() => handleRemoveFromCart(product_id)}
                            className="btn rounded-full px-1 py-6">
                            <MdDeleteForever className="w-10 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    gadget: PropTypes.object.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;