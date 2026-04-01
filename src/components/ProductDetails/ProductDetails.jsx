import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { storeCartDataInLocalStorage, storeWishlistDataInLocalStorage } from "../../utilities/addToDb";

const ProductDetails = () => {

    // add to cart
    const handleStoreToCart = (id) => {
        storeCartDataInLocalStorage(id);
    }

    // add to wishlist
    const handleStoreToWishlist = (id) => {
        storeWishlistDataInLocalStorage(id);
    }

    // back to home
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate("/");
    }

    const { product_id } = useParams();
    const productIdNumber = parseInt(product_id);
    const gadgetsData = useLoaderData();
    const gadgetData = gadgetsData.find(gadgetDetail => gadgetDetail.product_id === productIdNumber);
    const { product_id: gadget_id, product_image, product_title, price, availability, description, Specification, rating } = gadgetData;

    return (
        <div>
            <div className="relative pb-5 mb-180 md:mb-110">
                <div className="bg-[#9538E2] max-w-405 mx-auto rounded-b-4xl">
                    <div className="w-9/12 text-center mx-auto pt-5 pb-20 text-white">
                        <h3 className="font-bold text-3xl">Product Details</h3>
                        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto w-11/12 absolute top-2/3 left-1/2 -translate-x-1/2">
                    <div className="card h-195 grid grid-cols-1 card-side bg-base-100 drop-shadow-2xl md:grid-cols-2 md:h-120">
                        <figure className="md:ml-5 lg:mx-auto">
                            <img className="w-full rounded-3xl p-5 object-contain h-70 md:h-100 lg:h-96" src={product_image} />
                        </figure>
                        <div className="flex flex-col justify-center p-5 space-y-2 md:px-5">
                            <div>
                                <h2 className="font-semibold text-[28px]">{product_title}</h2>
                                <p className="font-semibold text-xl opacity-80 mb-2">Price: ${price}</p>

                                <p>
                                    {
                                        availability ?
                                            <button
                                                className="text-[#309C08] bg-[#309C0810] border border-[#309C08] font-medium text-sm rounded-4xl px-3 py-1">
                                                In Stock
                                            </button>
                                            : <button
                                                className="text-[#9c0808] bg-[#9c080810] border border-[#9c0808] font-medium text-sm rounded-4xl px-3 py-1">
                                                Out Of Stock
                                            </button>
                                    }
                                </p>
                            </div>

                            <p className="opacity-60 text-lg">{description}</p>

                            <div>
                                <h4 className="font-bold text-lg">Specification:</h4>

                                <ul className="opacity-60 ml-10 text-lg">
                                    {
                                        Specification.map((detail, idx) => <li className="list-decimal" key={idx}>{detail}</li>)
                                    }
                                </ul>
                            </div>

                            <h4 className="font-bold text-lg">Rating ⭐</h4>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <Rating
                                        initialValue={Number(rating)}
                                        readonly={true}
                                        size={25}
                                        fillColor="#F9C004"
                                        emptyColor="#ddd"
                                        allowFraction={true}
                                        iconsCount={5}
                                        SVGstyle={{ display: "inline-block" }}
                                    />
                                </div>
                                <button className="bg-[#09080F25] font-medium text-sm opacity-80 px-3 py-1 rounded-4xl">{rating}</button>
                            </div>

                            {
                                availability ?
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => handleStoreToCart(gadget_id)}
                                            className="btn bg-[#9538E2] text-white flex items-center rounded-4xl">
                                            Add To Cart
                                            <IoCartOutline />
                                        </button>

                                        <button
                                            onClick={() => handleStoreToWishlist(gadget_id)}
                                            className="btn py-3 rounded-full"
                                        >
                                            <CiHeart />
                                        </button>

                                        <button
                                            onClick={handleBackToHome}
                                            className="btn py-3 rounded-full"
                                        >
                                            <IoHome />
                                        </button>
                                    </div>
                                    : <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => handleStoreToCart(gadget_id)}
                                            className="btn btn-disabled bg-[#9538E2] text-white flex items-center rounded-4xl">
                                            Add To Cart
                                            <IoCartOutline />
                                        </button>

                                        <button
                                            onClick={() => handleStoreToWishlist(gadget_id)}
                                            className="btn btn-disabled py-3 rounded-full"
                                        >
                                            <CiHeart />
                                        </button>

                                        <button
                                            onClick={handleBackToHome}
                                            className="btn py-3 rounded-full"
                                        >
                                            <IoHome />
                                        </button>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;