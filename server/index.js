import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
	console.log('Server running on port 3000...');
});