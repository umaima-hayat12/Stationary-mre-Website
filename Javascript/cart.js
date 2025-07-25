
let Cart=JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(matchingProduct) {
    console.log(matchingProduct);
    
    let found = false;

    Cart.forEach((item) => {
        if (item.id === matchingProduct.id) {
            item.quantity++;
            found = true;
        }
    });

    if (!found) {
        Cart.push({
            id: matchingProduct.id,
            image: matchingProduct.image,
            name: matchingProduct.name,
            price: matchingProduct.price,
            stars: matchingProduct.stars,
            quantity: matchingProduct.quantity
        });
    }

    console.log(Cart);
    saveToCart();
    updateCartQuantity();
}

function saveToCart(){
    localStorage.setItem('cart',JSON.stringify(Cart));
}
function updateCartQuantity(){
    let totalquantity=0;
    Cart.forEach(product=>{
            totalquantity+=product.quantity;
    });
  
        const quantity1 = document.querySelector('.js-quantity1');
        if (quantity1) quantity1.innerHTML = totalquantity;

        const quantity2 = document.querySelector('.js-quantity2');
        if (quantity2) quantity2.innerHTML = totalquantity;
  
        const quantity3 = document.querySelector('.js-quantity3');
        if (quantity3) quantity3.innerHTML = totalquantity;
       
}
function deleteProduct(id) {
    // Remove from cart array
    const cart= Cart.find(product => product.id == id);
    if(cart.quantity>1){
        cart.quantity--;
    }
    else{
        Cart = Cart.filter(product => product.id !== id);
    }
    
    
    // Save updated cart to localStorage
    saveToCart();

    // Remove from DOM
    const productDiv = document.querySelector(`.js-cart-item-${id}`);
    
    if (productDiv) {
        productDiv.remove();
    }
    location.reload();
    updateCartQuantity();

}


