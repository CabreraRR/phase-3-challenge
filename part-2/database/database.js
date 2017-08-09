const {
	Client
} = require('pg');
const client = new Client({
	database: 'grocery_store'
});
client.connect();


const productList = function(section){
	try{
		client.query(`SELECT products.name, products.section FROM products WHERE products.section = ${section}`);
		console.
	}catch(e){
		console.error(e);
	}
}


const realShoppers = function(){
	try{
		client.query();
	} catch(e){
		console.error(e);
	}
}

const shopperOrders = function(id){
	try{
		client.query();
	} catch(e){
		console.error(e);
	}
}
module.exports={
	productList
	realShoppers
	shoppingOrders
}