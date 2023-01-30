const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@root': path.resolve(__dirname, './'),
		},
		target: process.env.NODE_ENV === 'development' ? 'browserslist' : 'electron-main',
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
