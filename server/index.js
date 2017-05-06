import express from 'express';

const app = express();

app.get('/*', (req, res) => {
	res.send('Hello!');
});

app.listen(3000, () => {
	console.log('Server unning on port 3000...');
});