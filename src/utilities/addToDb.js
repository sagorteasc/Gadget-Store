import { toast } from 'react-toastify';

// Cart

// get data from local storage
const getCartDataFromLocalStorage = () => {
    const cartGadgets = localStorage.getItem("cart-items");
    if (cartGadgets) {
        const cartGadgetsInt = JSON.parse(cartGadgets);
        return cartGadgetsInt;
    }
    else {
        return [];
    }
}

// store item in local storage
const storeCartDataInLocalStorage = (id) => {
    const cartGadgets = getCartDataFromLocalStorage();
    if (cartGadgets.includes(id)) {
        toast.error("Product Already Exist In The Cart");
        return;
    }
    cartGadgets.push(id);
    const cartGadgetsStr = JSON.stringify(cartGadgets);
    localStorage.setItem("cart-items", cartGadgetsStr);
    toast.success("Product Added In The Cart");
}

// remove cart item from local storage
const removeCartDataFromLocalStorage = (id) => {
    const cartGadgets = getCartDataFromLocalStorage();
    const remainGadgets = cartGadgets.filter(gadgetId => gadgetId !== id);
    const remainGadgetsStr = JSON.stringify(remainGadgets);
    localStorage.setItem("cart-items", remainGadgetsStr);
    toast.warn("Product Removed From The Cart");
}

// remove all cart items from local storage
const removeAllCartDataFromLocalStorage = () => {
    localStorage.removeItem("cart-items");
}

// Wishlist

// get wishlist item from local storage
const getWishlistDataFromLocalStorage = () => {
    const wishlistGadgets = localStorage.getItem("wishlist-items");

    if (wishlistGadgets) {
        const wishlistGadgetsInt = JSON.parse(wishlistGadgets);
        return wishlistGadgetsInt;
    }
    else {
        return [];
    }
}

// store wishlist item in local storage
const storeWishlistDataInLocalStorage = (id) => {
    const wishlistGadgets = getWishlistDataFromLocalStorage();

    if (wishlistGadgets.includes(id)) {
        toast.error("Product Already Exist In The Wishlist");
    }
    else {
        wishlistGadgets.push(id);
        const wishlistGadgetsStr = JSON.stringify(wishlistGadgets);
        localStorage.setItem("wishlist-items", wishlistGadgetsStr);
        toast.success("Product Added In The Wishlist");
    }
}

// remove wishlist item from local storage
const removeWishlistDataFromLocalStorage = (id) => {
    const wishlistGadgets = getWishlistDataFromLocalStorage();
    const remainGadgets = wishlistGadgets.filter(gadgetId => gadgetId !== id);
    const remainGadgetsStr = JSON.stringify(remainGadgets);
    localStorage.setItem("wishlist-items", remainGadgetsStr);
    toast.warn("Product Removed From The Wishlist");
}

// add to cart from the wishlist and remove from wishlist
const addToCartFromWishlist = (id) => {

    // remove from wishlist
    const wishlistGadgets = getWishlistDataFromLocalStorage();
    const remainGadgets = wishlistGadgets.filter(gadgetId => gadgetId !== id);
    const remainGadgetsStr = JSON.stringify(remainGadgets);
    localStorage.setItem("wishlist-items", remainGadgetsStr);

    // add to cart
    const cartGadgets = getCartDataFromLocalStorage();

    if (cartGadgets.includes(id)) {
        toast.error("Product Already Exist In The Cart");
        return;
    }
    else {
        cartGadgets.push(id);
        const cartGadgetsStr = JSON.stringify(cartGadgets);
        localStorage.setItem("cart-items", cartGadgetsStr);
        toast.success("Product Removed From Wishlist and Added To The Cart");
    }
}

export { getCartDataFromLocalStorage, storeCartDataInLocalStorage, removeCartDataFromLocalStorage, getWishlistDataFromLocalStorage, storeWishlistDataInLocalStorage, removeWishlistDataFromLocalStorage, addToCartFromWishlist, removeAllCartDataFromLocalStorage }