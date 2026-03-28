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
        alert("Product Already Exist");
        return;
    }
    cartGadgets.push(id);
    const cartGadgetsStr = JSON.stringify(cartGadgets);
    localStorage.setItem("cart-items", cartGadgetsStr);
    alert(id + ' item added');
}

// remove cart item from local storage
const removeCartDataFromLocalStorage = (id) => {
    const cartGadgets = getCartDataFromLocalStorage();
    const remainGadgets = cartGadgets.filter(gadgetId => gadgetId !== id);
    const updatedGadgets = JSON.stringify(remainGadgets);
    localStorage.setItem("cart-items", updatedGadgets);
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
        alert("Product Already Exist In Wishlist");
    }
    else {
        wishlistGadgets.push(id);
        const wishlistGadgetsStr = JSON.stringify(wishlistGadgets);
        localStorage.setItem("wishlist-items", wishlistGadgetsStr);
        alert("Item Added In The Wishlist");
    }
}

// remove wishlist item from local storage
const removeWishlistDataFromLocalStorage = (id) => {
    const wishlistGadgets = getWishlistDataFromLocalStorage();
    const remainGadgets = wishlistGadgets.filter(gadgetId => gadgetId !== id);
    const updatedGadgets = JSON.stringify(remainGadgets);
    localStorage.setItem("wishlist-items", updatedGadgets);
}

export { getCartDataFromLocalStorage, storeCartDataInLocalStorage, removeCartDataFromLocalStorage, getWishlistDataFromLocalStorage, storeWishlistDataInLocalStorage, removeWishlistDataFromLocalStorage }