import { useEffect, useState } from "react";
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getCartDataFromLocalStorage, removeCartDataFromLocalStorage, getWishlistDataFromLocalStorage, removeWishlistDataFromLocalStorage, addToCartFromWishlist } from "../../utilities/addToDb";

const Dashboard = () => {

    const gadgetsData = useLoaderData();

    const [isActive, setIsActive] = useState({
        status: "Cart"
    });

    const [addToCart, setAddToCart] = useState([]);
    const [addToWishlist, setAddToWishlist] = useState([]);
    const [sort, setSort] = useState('');
    const [sortByPages, setSortByPages] = useState([]);

    useEffect(() => {
        setAddToCart(getCartDataFromLocalStorage());
        setAddToWishlist(getWishlistDataFromLocalStorage());
    }, []);

    // set the data into the cart/wishlist
    const storeCartItems = gadgetsData.filter(gadget => addToCart.includes(gadget.product_id));
    const storeWishlistItems = gadgetsData.filter(gadget => addToWishlist.includes(gadget.product_id));

    // total price of the items in the cart
    const initialValue = 0;
    const totalCartPrice = storeCartItems.reduce((acc, current) => acc + parseInt(current.price), initialValue);

    // updated cart after removing data
    const handleRemoveFromCart = (id) => {
        removeCartDataFromLocalStorage(id);

        const updatedData = addToCart.filter(gadgetId => gadgetId !== id);
        setAddToCart(updatedData);
    }

    // updated wishlist after removing data
    const handleRemoveFromWishlist = (id) => {
        removeWishlistDataFromLocalStorage(id);

        const updatedData = addToWishlist.filter(gadgetId => gadgetId !== id);
        setAddToWishlist(updatedData);
    }

    // updated cart after adding data from wishlist
    const handleAddToCartFromWishlist = (id) => {
        addToCartFromWishlist(id);

        // remove from the wishlist
        const updatedData = addToWishlist.filter(gadgetId => gadgetId !== id);
        setAddToWishlist(updatedData);

        // add to cart
        const updatedStoreToCart = [...addToCart, id];
        setAddToCart(updatedStoreToCart);
    }

    // sort data in cart in descending order according to price
    const handleSortByPrice = (sortType) => {
        setSort(sortType);

        const sortByPages = storeCartItems.sort((a, b) => b.price - a.price);
        setSortByPages(sortByPages);
    }

    // hanble state of the button
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

            {
                isActive.status === "Cart" ?
                    <div className="max-w-6xl mx-auto w-11/12 flex justify-center items-center gap-4 mb-10 md:justify-end">
                        <h3 className="font-bold text-2xl">Total Cost: ${totalCartPrice}</h3>
                        <button
                            onClick={handleSortByPrice}
                            className="btn text-[#9538E2] bg-transparent border-[#8332C5] border text-lg font-semibold rounded-4xl">
                            Sort by Price
                        </button>

                        <button className="btn bg-linear-to-br from-[#9538E2] to-[#cf54cb] text-white text-lg font-medium rounded-4xl">Purchase</button>
                    </div>
                    : ""
            }

            <div>
                <Tabs>
                    <TabPanel>
                        {
                            isActive.status === "Cart" ?
                                (storeCartItems.length === 0 ?
                                    <div className="bg-slate-200 p-10 rounded-md flex justify-center items-center h-40">
                                        <h3 className="font-bold text-center text-3xl">No Product In The Cart</h3>
                                    </div>

                                    : sort ?
                                        sortByPages.map(gadget =>
                                            <Cart
                                                key={gadget.product_id}
                                                gadget={gadget}
                                                handleRemoveFromCart={handleRemoveFromCart}
                                            >
                                            </Cart>)
                                        : storeCartItems.map(gadget =>
                                            <Cart
                                                key={gadget.product_id}
                                                gadget={gadget}
                                                handleRemoveFromCart={handleRemoveFromCart}
                                            >
                                            </Cart>)
                                )
                                :
                                (storeWishlistItems.length === 0 ?
                                    <div className="bg-slate-200 p-10 rounded-md flex justify-center items-center h-40">
                                        <h3 className="font-bold text-center text-3xl">No Product In The Wishlist</h3>
                                    </div>

                                    : storeWishlistItems.map(gadget =>
                                        <Wishlist
                                            key={gadget.product_id}
                                            gadget={gadget}
                                            handleRemoveFromWishlist={handleRemoveFromWishlist}
                                            handleAddToCartFromWishlist={handleAddToCartFromWishlist}
                                        ></Wishlist>)
                                )
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Dashboard;