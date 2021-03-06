// Chiel Kunkels (@chielkunkels)
'use strict';

// required modules
var editorBase = require('./base');

// exposed
var editor = Object.merge({}, editorBase, {
	type: 'style',
	modes: {
		'css': 'text/css',
		'less': 'text/x-less'
	}
});

exports = module.exports = editor;

