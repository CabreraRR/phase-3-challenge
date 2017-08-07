let cartNum = cart.length;
let cart = [ ];

window.onload = itemCount();

function itemCount() {
    document.getElementById('cart-item-count').innerHTML = "(" + cartNum + ")";
};

function addToCart() {
    itemCount();
};

// cart modal
var modal = document.getElementById('myCart');
var btn = document.getElementById('cart-button');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};