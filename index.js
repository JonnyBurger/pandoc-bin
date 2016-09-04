'use strict';
const execa = require('execa');

const getBinaryName = () => {
	if (process.platform === 'darwin') {
		return 'pandoc-osx';
	}
	if (process.platform === 'linux') {
		return 'pandoc-linux';
	}
	throw new Error('Module is only supported on macOS and Linux');
};

module.exports = (args, options) => {
	return new Promise((resolve, reject) => {
		execa(`./bin/${getBinaryName()}`, args, options)
		.then(result => {
			if (result.stderr.length) {
				return reject(result.stderr);
			}
			return resolve(result.stdout);
		})
		.catch(err => reject(err));
	});
};
