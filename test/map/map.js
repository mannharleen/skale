#!/usr/local/bin/node --harmony

var co = require('co');
var UgridClient = require('../../lib/ugrid-client.js');
var UgridContext = require('../../lib/ugrid-context.js');

var M = 5;
var a = ml.randn(M);

function doubles(n) {
	return n * 2;
}

var grid = new UgridClient({host: 'localhost', port: 12346, data: {type: 'master'}});

co(function *() {
	yield grid.connect();
	var res = yield grid.send('devices', {type: "worker"});
	var ugrid = new UgridContext(grid, res.devices);
	
	var res = yield ugrid.parallelize(a).map(doubles, []).collect();

	console.log('distributed map result')
	console.log(res);

	console.log('\nlocal map result')
	console.log(json.output);

	grid.disconnect();
})();

