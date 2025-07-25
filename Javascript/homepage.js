
updateCartQuantity();
let homepage = '';

product.forEach(item => {
    // console.log(item.id);
    homepage += `
    <a href="product.html" class="js-product-link" data-product-id="${item.id}">
    <div class="main js-main"> 
        <div>     
            <img src="${item.image}.jpeg" class="image">
        </div>
        <div class="main2">  
            <p>${item.name}</p>
            <img class="image1" src="${item.stars}.png">
            <p style="margin-top: 0;">Rs ${item.price.toFixed(2)} PKR</p>
        </div>
    </div>
    </a>`;
});

// Make sure this container exists in your HTML
document.querySelector(".js-container").innerHTML = homepage;
    
document.querySelectorAll(".js-product-link").forEach((link) => {
  link.addEventListener("click", (event)=> {
     event.preventDefault();
    const clickedId = link.dataset.productId;
    const clickedProduct = product.find(p => p.id === clickedId);
   localStorage.setItem('selectedProduct', JSON.stringify(clickedProduct));
    window.location.href = 'product.html';

  });
});