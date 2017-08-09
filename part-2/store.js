const command = process.argv[2];
const arg = process.argv[3];
const pg = require('pg');
const productList = require('./commands/product-list');
const shopperOrders = require('./commands/shopper-orders');
const realShoppers = require('./commands/real-shoppers');

console.log('grocer');

if (command === 'product-list'){
	productList(arg);
}
if (command === 'shopper-orders'){
	console.log(arg);
}
if (command === 'real-shoppers'){
	realShoppers();
}
