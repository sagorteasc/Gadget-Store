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

// remove item from local storage
const removeCartDataFromLocalStorage = (id) => {
    const cartGadgets = getCartDataFromLocalStorage();
    const removeGadget = cartGadgets.filter(gadgetId => gadgetId !== id);
    const removeGadgetStr = JSON.stringify(removeGadget);
    localStorage.setItem("cart-items", removeGadgetStr);
}

export { getCartDataFromLocalStorage, storeCartDataInLocalStorage, removeCartDataFromLocalStorage }