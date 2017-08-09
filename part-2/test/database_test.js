const assert = require('chai').assert;
const expect = require('chai').expect;
const {
    productList,
    realShoppers,
    shopperOrders
} = require('../database/database');




//productList test
	//expected input
		//will test result for "dairy" as a parameter. first row of data expected start with a "| Butter"
		//will test result for "bread" as a parameter. first row of data expected start with a "| Bagels"
	//unexpected input
		//will test result for "" as a parameter. expected not return any data just an empty table
		//will test result for "sundries" as a parameter. expected not return any data just an empty table


//realShoppers test
	//will test the response and check the first row of data for accuracy. first row expected start with a "| Ohno"


//shoppingOrders test
	//expected input
		//will test result for "1" as a parameter. first row of data expected start with a "| 1"
		//will test result for "3" as a parameter. first row of data expected start with a "| 10"
		//will test result for "5" as a parameter. expected not return any data just an empty table
	//unexpected input
		//will test result for "50" as a parameter. expected not return any data just an empty table
		//will test result for "Jim" as a parameter. error thrown

