    updateCartQuantity();
    function increasequantity(id) {
      
  const cartItem = product.find(item => item.id == id);
  
  if (cartItem && cartItem.quantity < 10) {
    cartItem.quantity++;
  
    document.getElementById(`qty-${id}`).textContent = cartItem.quantity;
    saveToCart();
    updateCartQuantity();
    
    
  }
}

function decreasequantity(id) {
  const cartItem = product.find(item => item.id == id);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;

    document.getElementById(`qty-${id}`).textContent = cartItem.quantity;
    saveToCart();
    updateCartQuantity();
    
    
  }
}

const buttonElement=document.querySelector('.js-Email-enter');
buttonElement.addEventListener('click',()=>{
  const inputElement = document.querySelector('.js-Email');
  const inputButton=document.querySelector('.js-check');
  if (inputElement.value.includes('@gmail.com')) {
    inputButton.innerHTML='Thank-you for Subscribing to our mailing list!';
    inputButton.style.color='green';
  } else {
    inputButton.innerHTML='Try Again! Incorrect Gmail address';
    inputButton.style.color='red';
  }
  
  inputElement.placeholder = 'Enter Your Email Address'; 
  inputElement.value = ''; 
  setTimeout(() => {
  document.querySelector('.js-check').remove();
},2000);   
})



const clickedProduct= JSON.parse(localStorage.getItem('selectedProduct'));
const cartItem = Cart.find(item => item.id === clickedProduct.id);
const currentQty = cartItem ? cartItem.quantity : 1;


  const html_body=
  `
            <div><img src="${clickedProduct.image}.jpeg" class="image4"></div>
            <div class="main4">
                <div style="font-size: 70px;">${clickedProduct.name}</div>
                <div class="para">RS ${clickedProduct.price} PKR </div>
                <div> <img class="stars" src="${clickedProduct.stars}.png"></div>
                <div class="quantity-wrapper">
                    <label class="para">Quantity</label>
                    <div class="quantity-selector">
                    <button onclick="decreasequantity('${clickedProduct.id}')">-</button>
                    <span id="qty-${clickedProduct.id}">${currentQty}</span>
                    <button onclick="increasequantity('${clickedProduct.id}')">+</button>
                    </div>
                </div>       
                <div>
                    <button class="cart-Button js-add" data-product-id="${clickedProduct.id}" >Add</button>
                </div> 
            </div>
    
  
   `;     


 document.querySelector('.js-main3').innerHTML=html_body;


let quant=0;
 const addButton = document.querySelector('.js-add');
addButton.addEventListener('click', () => {
  const clickedId = addButton.dataset.productId;
 
  const matchingProduct = product.find(item => item.id === clickedId);
  if (matchingProduct) {
    console.log('yayyyyyyyyyyyyyyyyyy');
    addToCart(matchingProduct);
  } else {
    console.log('nooooooooooooooooooooooooooooo');
    console.error("No matching product found");
  }
});