#!/usr/bin/env node

var uc = new require('ugrid').Context();

var data = [['hello', 1], ['hello', 1], ['world', 1]]
var nPartitions = 1;

var a = uc.parallelize(data, nPartitions).groupByKey().persist();

a.collect().toArray(function(err, res) {
		console.log('First ok!')
		console.log(res);
		a.collect().toArray(function(err, res) {
				console.log('Second ok !')
				console.log(res);
				uc.end();
			});
	})

// test du persist

