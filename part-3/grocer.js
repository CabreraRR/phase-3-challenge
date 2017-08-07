let cartNum = 0;

window.onload= itemCount();

function itemCount() {
	document.getElementById('cart-item-count').innerHTML = "(" + cartNum + ")";
};

function addToCart(){
	cartNum ++;
	itemCount();
};