updateCartQuantity();
function increase(id) {
  const cartItem = Cart.find(item => item.id == id); // Fix here
  if (cartItem && cartItem.quantity < 10) {
    cartItem.quantity++;
    document.getElementById(`qty-${id}`).textContent = cartItem.quantity;

    // Update total price shown
    const totalElement = document.querySelector(`.js-cart-item-${id}`).nextElementSibling.nextElementSibling.nextElementSibling;
    totalElement.innerHTML = `Rs ${(cartItem.quantity * cartItem.price).toFixed(2)} PKR`;
    calculatetotal();
    saveToCart();
    updateCartQuantity();
  }
}

function decrease(id) {
  const cartItem = Cart.find(item => item.id == id); // Fix here
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
    document.getElementById(`qty-${id}`).textContent = cartItem.quantity;

    // Update total price shown
    const totalElement = document.querySelector(`.js-cart-item-${id}`).nextElementSibling.nextElementSibling.nextElementSibling;
    totalElement.innerHTML = `Rs ${(cartItem.quantity * cartItem.price).toFixed(2)} PKR`;
    calculatetotal();
    saveToCart();
    updateCartQuantity();
  }
}


let cartHTML='';
Cart.forEach((carts)=>{
const cartItem1 = Cart.find(item => item.id === carts.id);
const currentQty1 = cartItem1 ? cartItem1.quantity : 1;

    cartHTML += `
        <div class="inner-div js-cart-item-${carts.id}">
            <div>
                <img src="${carts.image}.jpeg" class="cart-image">
            </div>
            <div class="inner-div2">
                <div>${carts.name}</div>
                <div style="margin-top: 14px;">Rs ${(carts.price).toFixed(2)} PKR</div>
                <div><img src="${carts.stars}.png" class="star"></div>
            </div>
        </div>
        <div class="quantity2">
           <div class="quantity-selector">
                    <button onclick="decrease('${carts.id}')">-</button>
                    <span id="qty-${carts.id}">${currentQty1}</span>
                    <button onclick="increase('${carts.id}')">+</button>
            </div>
        </div>
        <div>
            <img src="../Images/bin.jpeg" class="bin js-bin" data-delete-button="${carts.id}">
        </div>
        <div class="total">Rs ${(carts.quantity*carts.price).toFixed(2)} PKR</div>
    `;

});
document.addEventListener("DOMContentLoaded", () => {
    console.log(localStorage.getItem('cart'));

document.querySelector('.js-Checkout-main').innerHTML=cartHTML;
 document.querySelectorAll('.js-bin').forEach((link) => {
        link.addEventListener("click", () => {
            const ID = link.dataset.deleteButton;
            console.log("Clicked delete on ID:", ID);
            
            deleteProduct(ID);
        });
    });
});
function calculatetotal(){
let total=0;
Cart.forEach((cart)=>{
total+=(cart.quantity*cart.price);
})
const summaryHTML=`    
<div style="margin-left: 20px; margin-top: 30px;">Estimated Total:  Rs ${total} PKR</div>
    <div style="margin-top: 20px;"> 
    <button class="checkoutbutton">
        Checkout
    </button>
</div>
`;
document.querySelector('.js-Checkout-summary').innerHTML=summaryHTML;
}
calculatetotal();

