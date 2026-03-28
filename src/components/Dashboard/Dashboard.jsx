import { useEffect, useState } from "react";
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getCartDataFromLocalStorage, removeCartDataFromLocalStorage, getWishlistDataFromLocalStorage, removeWishlistDataFromLocalStorage } from "../../utilities/addToDb";

const Dashboard = () => {


    const gadgetsData = useLoaderData();

    const [isActive, setIsActive] = useState({
        status: "Cart"
    });

    const [addToCart, setAddToCart] = useState([]);
    const [addToWishlist, setAddToWishlist] = useState([]);

    useEffect(() => {
        setAddToCart(getCartDataFromLocalStorage());
        setAddToWishlist(getWishlistDataFromLocalStorage());
    }, []);

    // set the data into the cart/wishlist
    const storeCartItem = gadgetsData.filter(gadget => addToCart.includes(gadget.product_id));
    const storeWishlistItem = gadgetsData.filter(gadget => addToWishlist.includes(gadget.product_id));

    // updated cart after removing data
    const handleRemoveFromCart = (id) => {
        removeCartDataFromLocalStorage(id);

        const updatedData = addToCart.filter(gadgetId => gadgetId !== id);
        setAddToCart(updatedData);
    }

    // updated cart after removing data
    const handleRemoveFromWishlist = (id) => {
        removeWishlistDataFromLocalStorage(id);

        const updatedData = addToWishlist.filter(gadgetId => gadgetId !== id);
        setAddToWishlist(updatedData);
    }

    const handleIsActiveButton = (status) => {
        status === 'Cart' ?
            setIsActive(
                {
                    status: "Cart"
                }
            )
            : setIsActive(
                {
                    status: "Wishlist"
                }
            )
    }

    return (
        <div>
            <div className="bg-[#9538E2] max-w-405 mx-auto rounded-b-4xl mb-10">
                <div className="w-9/12 text-center mx-auto p-10 text-white">
                    <h3 className="font-bold text-3xl pb-2">Dashboard</h3>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className='flex justify-center items-center gap-3 pb-5 category-btn'>
                    <button
                        onClick={() => handleIsActiveButton("Cart")}
                        className=
                        {
                            isActive.status === 'Cart' ?
                                "btn bg-white text-[#9538E2] shadow-none px-8 rounded-4xl"
                                : "btn bg-transparent text-white shadow-none px-8 rounded-4xl"
                        }
                    >Cart
                    </button>

                    <button
                        onClick={() => handleIsActiveButton("Wishlist")}
                        className=
                        {
                            isActive.status === 'Wishlist' ?
                                "btn bg-white text-[#9538E2] shadow-none px-8 rounded-4xl"
                                : "btn bg-transparent text-white shadow-none px-8 rounded-4xl"
                        }
                    >Wishlist
                    </button>
                </div>
            </div>
            <div>
                <Tabs>
                    <TabPanel>
                        {
                            isActive.status === "Cart" ?
                                storeCartItem.map(gadget =>
                                    <Cart
                                        key={gadget.product_id}
                                        gadget={gadget}
                                        handleRemoveFromCart={handleRemoveFromCart}
                                    >
                                    </Cart>)
                                :
                                storeWishlistItem.map(gadget =>
                                    <Wishlist
                                        key={gadget.product_id}
                                        gadget={gadget}
                                        handleRemoveFromWishlist={handleRemoveFromWishlist}
                                    ></Wishlist>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;