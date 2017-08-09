const command = process.argv[2];
const arg = process.argv[3];
const {
	productList,
	realShoppers,
	shopperOrders
} = require('./database/database');



if (command === 'product-list'){
	productList(arg);
}

if (command === 'shopper-orders'){
	shopperOrders(arg);
}

if (command === 'real-shoppers'){
	realShoppers();
}
