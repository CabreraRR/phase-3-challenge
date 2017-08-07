const modal = document.getElementById('myCart');
const btn = document.getElementById('cart-button');
const span = document.getElementsByClassName('close')[0];
const clear = document.getElementById('clear');
const item = document.getElementById('add');

let test = [];

let cartNum = 0;
let cartContents = [ ];


window.onload = itemCount();

function itemCount() {
    document.getElementById('cart-item-count').innerHTML = "(" + cartNum + ")";
};

function addToCart() {
    itemCount();
};

item.onclick = function() {
	test += item.previousElementSibling.previousElementSibling.innerHTML;
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

clear.onclick = function() {

}