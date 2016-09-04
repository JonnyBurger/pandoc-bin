'use strict';
const execa = require('execa');

module.exports = (args, options) => {
	return new Promise((resolve, reject) => {
		execa('./bin/pandoc', args, options)
		.then(result => {
			if (result.stderr.length) {
				return reject(result.stderr);
			}
			return resolve(result.stdout);
		})
		.catch(err => reject(err));
	});
};
