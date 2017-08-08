const modal = document.getElementById('myCart');
const btn = document.getElementById('cart-button');
const close = document.getElementsByClassName('close')[0];
const clear = document.getElementById('clear');
const add = document.querySelectorAll('.add');
const cart = document.getElementById('cart-item-count');
const contents = document.getElementById('list');
const total = document.getElementById('total');

let cartContents = [];
let cartNum = 0;
let cartTotal = 0;

window.onload = itemCount();

//CART AMOUNT
//This will set the amount in the cart to 0 at start and will prompt the console based on the contents
function itemCount() {
    cart.innerHTML = "(" + cartNum + ")";
    if (cartNum === 0) {
        console.log('Your cart is empty :(');
    } else {
        console.log('Your item has been added to your cart');
    }
};

//ADD TO CART
//this will add the specific item chosen to the cart
for (var i = 0; i < add.length; i++) {
	let a = add[i]
    add[i].addEventListener('click', () => {
        let item = {};
        item.name = a.previousElementSibling.previousElementSibling.innerHTML;
        item.price = a.previousElementSibling.innerHTML;
        cartContents.push(item);
        cartNum++;
        itemCount();
    });
}


//MODAL
//Modal will "open" and will print the contents of the cart and the total 
btn.addEventListener('click', () => {
    modal.style.display = "block";
    list.innerHTML = '';
    cartContents.forEach(item => {
        var el = document.createElement('li');
        el.innerHTML = '<span>' + item.name + '</span><span>' + item.price + '</span>';
        el.className = 'flex flex-row-between';
        list.appendChild(el);
        cartTotal += parseFloat(item.price.slice(1));
        total.innerHTML = 'TOTAL: $' + cartTotal.toFixed(2);
    });
})

//MODAL: CLOSE
//will "close" the Modal
close.addEventListener('click', () => {
    modal.style.display = "none";
})

//MODAL:CLEAR BUTTON
// this will empty the cart and the total amount of items inside the cart
clear.addEventListener('click', () => {
    cartContents = [];
    cartNum = 0;
    itemCount();
    modal.style.display = "none";
})