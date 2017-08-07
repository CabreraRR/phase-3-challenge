const modal = document.getElementById('myCart');
const btn = document.getElementById('cart-button');
const span = document.getElementsByClassName('close')[0];
const clear = document.getElementById('clear');
const add = document.getElementById('add');
const cart = document.getElementById('cart-item-count');
const contents = document.getElementById('list');

let cartContents = [];
let cartNum = 0;

test = "test"
window.onload = itemCount();


function itemCount() {
    cart.innerHTML = "(" + cartNum + ")";
    if (cartNum === 0) {
        console.log('Your cart is empty :(');
    } else {
        console.log('Your item has been added to your cart');
    }
};



add.onclick = function() {
    let item = {};
    cartContents.push(item);
    cartNum++;
    itemCount();
}

function printCart() {
	createli();
};

btn.onclick = function() {
    modal.style.display = "block";

}
span.onclick = function() {
    modal.style.display = "none";
}

clear.onclick = function() {
    cartContents = [];
    cartNum = 0;
    itemCount();
}