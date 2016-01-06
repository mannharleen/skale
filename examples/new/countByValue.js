#!/usr/bin/env node

// var uc = new require('ugrid').Context();

// var data = [['hello', 1], ['hello', 1], ['world', 1]]
// var nPartitions = 2;

// uc.parallelize(data, nPartitions).
// 	countByValue().toArray(function(err, res) {
// 		console.log('Success !')
// 		console.log(res);
// 		uc.end();
// 	})

var uc = new require('ugrid').Context();

var data = [[1, 1], [1, 1], [2, 3], [2, 4], [3, 5]];

var nPartitions = 1;

function valueFlatMapper(e) {
	var i, out = [];
	for (i = e; i <= 5; i++) out.push(i);
	return out;
}

uc.parallelize(data, nPartitions).flatMapValues(valueFlatMapper).countByValue().toArray(function(err, res) {
	console.log('Success !')
	console.log(res);
	uc.end();
});
