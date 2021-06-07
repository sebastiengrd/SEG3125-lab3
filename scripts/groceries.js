	// Array of products, each product is an object with different fieldset
	// A set of ingredients should be added to products		 

	var products = [{
	        name: "organic brocoli",
	        vegetarian: true,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 1.99,
	        organic: true

	    },
	    {
	        name: "bread",
	        vegetarian: true,
	        glutenFree: false,
	        nutFree: true,
	        lactoseFree: true,
	        price: 2.35,
	        organic: true
	    },
	    {
	        name: "salmon",
	        vegetarian: false,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 13.99,
	        organic: true
	    },
	    {
	        name: "milk",
	        vegetarian: false,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: false,
	        price: 6.67,
	        organic: true
	    },
	    {
	        name: "organic nut butter",
	        vegetarian: true,
	        glutenFree: false,
	        nutFree: false,
	        lactoseFree: true,
	        price: 12.95,
	        organic: true
	    },
	    {
	        name: "water bottle",
	        vegetarian: true,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 0.99,
	        organic: true
	    },
	    {
	        name: "organic salad",
	        vegetarian: true,
	        glutenFree: true,
	        nutFree: false,
	        lactoseFree: true,
	        price: 3.99,
	        organic: true
	    },
	    {
	        name: "tomato",
	        vegetarian: true,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 1.00,
	        organic: false
	    },
	    {
	        name: "bacon",
	        vegetarian: false,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 13.99,
	        organic: true
	    },
	    {
	        name: "chicken wings",
	        vegetarian: false,
	        glutenFree: true,
	        nutFree: true,
	        lactoseFree: true,
	        price: 11.66,
	        organic: true
	    }

	];



	// given restrictions provided, make a reduced list of products
	// prices should be included in this list, as well as a sort based on price

	function restrictListProducts(prods, restriction, onlyOrganic) {
	    let product_names = [];

	    for (let i = 0; i < prods.length; i += 1) {
	        if (onlyOrganic && !prods[i].organic) {
	            continue
	        }

	        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction == "NutFree") && (prods[i].nutFree == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)) {
	            product_names.push(prods[i].name);
	        } else if (restriction == "None") {
	            product_names.push(prods[i].name);
	        }
	    }


	    return product_names;
	}

	// Calculate the total price of items, with received parameter being a list of products
	function getTotalPrice(chosenProducts) {
	    totalPrice = 0;
	    for (let i = 0; i < products.length; i += 1) {
	        if (chosenProducts.indexOf(products[i].name) > -1) {
	            totalPrice += products[i].price;
	        }
	    }
	    return totalPrice;
	}