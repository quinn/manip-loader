let webpack       = require('webpack')
,   path          = require('path')
,   ExtractPlugin = require('extract-text-webpack-plugin')
,   HtmlPlugin    = require('html-webpack-plugin')
,   output        = path.resolve('./dist')
,   production    = process.env.NODE_ENV === 'production'
,   imageTest     = /\.(tif?f|png|gif|jpe?g|svg|mp4|otf|ttf|cur)$/i
,   extractCSS    = ExtractPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader', 'sass-loader'] })

,   config = {
	devtool: production ? 'cheap-source-map' : 'inline-source-map',
	output:  { path: output, filename: '[name]-[hash].js' },
	entry:   { main: 'src/index.js' },

	resolve: {
		modules: [
			path.resolve('./src'),
			'node_modules'
		]
	},

	plugins: [
		new HtmlPlugin({})
	],

	modules: {
		loaders: [
			{ test: /\.js$/i,   loader: 'babel-loader', exclude: /node_modules|vendor/ },
			{ test: imageTest,  loader: 'url-loader',   query: { limit: 1000 } },
			{ test: /\.scss$/i, loader: extractCSS      },
		]
	}
}

if (production)
	config.plugins.push(
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.UglifyJsPlugin({ sourceMap: true, comments: false })
	)

module.exports = config
