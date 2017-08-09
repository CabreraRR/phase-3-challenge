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

module.exports = {
    productList: function(section) {
        client.connect();
        try {
            client.query(`SELECT products.name, products.section FROM products 
        	WHERE products.section = '${section}'`).then(result => {
                console.log('+--------------------+--------------------+');
                console.log('| PRODUCT NAME       | SECTION            |');
                console.log('+--------------------+--------------------+');
                result.rows.forEach((product) => {
                    console.log(`| ${product.name}`.padEnd(21) + `| ${product.section}`.padEnd(21) + `|`);
                });
                console.log('+--------------------+--------------------+');
                client.end();
            });
        } catch (e) {
            console.error(e);
            client.end();
        }
    },
    realShoppers: function() {
        client.connect();
        try {
            client.query(`SELECT name, COUNT(cust_id) AS a FROM shoppers
        	JOIN orders ON shoppers.id = orders.cust_id
        	GROUP BY name
        	ORDER BY a ASC;`).then(result => {
                console.log('+--------------------+--------------------+');
                console.log('| SHOPPER NAME       | # OF ORDERS        |');
                console.log('+--------------------+--------------------+');
                result.rows.forEach((shopper) => {
                    console.log(`| ${shopper.name}`.padEnd(21) + `| ${shopper.a}`.padEnd(21) + `|`);
                });
                console.log('+--------------------+--------------------+');
                client.end();
            });
        } catch (e) {
            console.error(e);
            client.end();
        }
    },
    shopperOrders: function(id) {
        client.connect();
        try {
            client.query(`SELECT o.id, p.price FROM orders AS o
			JOIN products AS p on o.cart = p.id
			WHERE o.cust_id = ${id};`).then(result => {
                console.log('+--------------------+--------------------+');
                console.log('| ORDER ID.          | TOTAL              |');
                console.log('+--------------------+--------------------+');
                result.rows.forEach((order) => {
                    console.log(`| ${order.id}`.padEnd(21) + `|   $ ${order.price}`.padEnd(21) + `|`);
                });
                console.log('+--------------------+--------------------+');
                client.end();
            });
        } catch (e) {
            console.error(e);
            client.end();
        }
    }
}