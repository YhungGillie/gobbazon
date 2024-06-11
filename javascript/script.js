
document.addEventListener('DOMContentLoaded', () => {

const 
cartCount = 
document.getElementById('cart-count');

const 
addToCartButtons = 
document.querySelectorAll('.add-to-cart');



addToCartButtons.forEach(button => {

button.addEventListener('click', (event) => {

const 
product = 
event.target.closest('.product');

const 
productId = 
product.dataset.id;

const 
productPrice = 
parseFloat(product.dataset.price);

let 
cart = 
JSON.parse(localStorage.getItem('cart'))
|| [];



const 
existingProduct = 
cart.find(item => 
item.id 
=== productId);

if (existingProduct) {

existingProduct.quantity
+= 
1;

} else {

cart.push({
id:
productId, 
price: 
productPrice, quantity:
1 });

}



localStorage.setItem('cart',
JSON.stringify(cart));

updateCartCount();

});

});



function 
updateCartCount() {

const 
cart = 
JSON.parse(localStorage.getItem('cart'))
|| [];

const 
totalCount = 
cart.reduce((total,
item) => total 
+ item.quantity,
0);

cartCount.textContent
= 
totalCount;

}



updateCartCount();

});