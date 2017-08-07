const modal = document.getElementById('myCart');
const btn = document.getElementById('cart-button');
const span = document.getElementsByClassName('close')[0];
const clear = document.getElementById('clear');
const add = document.getElementById('add');
const cart = document.getElementById('cart-item-count');



let cartContents =[];
let cartNum = 0;

window.onload = itemCount();



function itemCount() {
    cart.innerHTML = "(" + cartNum + ")";
    if (cartNum === 0){
    	console.log('Your cart is empty :(');
    } else {
    	console.log('Your item has been added to your cart');
    }
};

add.onclick = function() {
	let item = {};
	item.name = add.previousElementSibling.previousElementSibling.innerHTML;
	item.price = add.previousElementSibling.innerHTML;
	cartContents.push(item);
	cartNum ++
	itemCount();
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

clear.onclick = function() {

}