var path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: ['file-loader']
		}, {
	        test: /\.(woff|woff2|eot|ttf|otf)$/,
	        use: ['file-loader']
      	}, {
      		test: /\.(csv|tsv)$/,
      		use: 'csv-loader'
      	}, {
      		test: /\.xml$/,
      		use: 'xml-loader'
      	}]
	}
};