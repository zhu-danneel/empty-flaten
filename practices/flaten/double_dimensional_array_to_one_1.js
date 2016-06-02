'use strict';

function double_to_one(collection) {
 	var c = collection.join(",").split(",");
 	var i = 0;
 	for (i = 0; i < c.length; i++)
 	{
 		c[i] = parseInt(c[i]);
 	}
	return c;
}

module.exports = double_to_one;
