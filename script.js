function updateCartCount() {
    // Create or update cart count element
    let cartCount = document.querySelector(".cart-count");
    if (!cartCount) {
        cartCount = document.createElement("span");
        cartCount.className = "cart-count";
        document.querySelector("a[href=#cart]").appendChild(cartCount);
    }
    cartCount.textContent = cart.length;
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
