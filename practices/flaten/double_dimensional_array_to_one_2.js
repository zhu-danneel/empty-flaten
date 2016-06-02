'use strict';

function double_to_one(collection) {
	var temp = collection.join(",").split(",");
 	var i = 0;
 	for (i = 0; i < temp.length; i++)
 	{
 		temp[i] = parseInt(temp[i]);
 	}
 	var num =[0,0,0,0,0,0,0,0,0,0];
 	var c = new Array();
 	for (i = 0; i < temp.length; i++)
 	{
 		if (num[temp[i]] == 0)
 		{
 			c.push(temp[i]);
 			num[temp[i]]++;
 		}
 	}
	return c;
}

module.exports = double_to_one;
