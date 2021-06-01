const path = require('path');
const webpack = require('webpack');

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				jQuery: 'jquery',
				'window.jquery': 'jquery',
				'window.jQuery': 'jquery',
				'window.$': 'jquery',
			}),
		],
		resolve: {
			extensions: ['.js', '.vue', '.json', 'scss'],
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@components': path.resolve(__dirname, './src/components'),
				'@views': path.resolve(__dirname, './src/views'),
				'@core': path.resolve(__dirname, './src/core'),
				'@scss': path.resolve(__dirname, './src/scss'),
				'@img': path.resolve(__dirname, './src/assets/images'),
			},
		},
		module: {
			rules: [
				{
					test: /\.(png|jpe?g|gif|cur)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
			],
		},
	},
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import "@scss/_variables.scss";
					@import "@scss/_mixins.scss";
				`,
			},
		},
	},
	// outputDir: path.resolve('../website'),
};
