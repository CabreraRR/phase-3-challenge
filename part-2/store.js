const command = process.argv[2];
const arg = process.argv[3];
const {productList} = require('./database/database');

console.log('grocer');

if (command === 'product-list'){
	productList(arg);
}

if (command === 'shopper-orders'){
	shopperOrders(arg);
}

if (command === 'real-shoppers'){
	realShoppers();
}
