#!/usr/local/bin/node --harmony

// Example sans workers

var ml = require('../ugrid-ml.js');
var tl = require('./test-lib.js');
var fs = require('fs');

var name = 'map';
var M = 5;  // taille du vecteur a
var a = ml.randn(M);

b = a.map(tl.doubles);

var json = {
	name: name,
	inputs: {a: a},
	output: b
}

fs.writeFile(name + '.json', JSON.stringify(json, null, '\t'));
