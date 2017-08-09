const {
    Client
} = require('pg');
const client = new Client({
    database: 'grocery_store'
});

if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength, padString) {
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0, targetLength);
        }
    };
}

client.connect();


const productList = function(section) {
    try {
        client.query(`SELECT products.name, products.section 
        	FROM products WHERE products.section = '${section}'`).then(result => {
            console.log('+--------------------+---------------+');
            console.log('| PRODUCT NAME       | SECTION       |');
            console.log('+--------------------+---------------+');
            result.rows.forEach((product) => {
                console.log(`| ${product.name}`.padEnd(21) + `| ${product.section}`.padEnd(16) + `|`);
            })
            console.log('+--------------------+---------------+');
            client.end();
        });
    } catch (e) {
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

// const shopperOrders = function(id){
// 	try{
// 		client.query();
// 	} catch(e){
// 		console.error(e);
// 	}
// }

module.exports = {
    productList
    // realShoppers
    // shoppingOrders
}