const express = require('express');
const errorHandler = require('api-error-handler')

const app = express();

app.set('port', (process.env.PORT || 4001));

app.use((req, res, next) => {
	console.log('begin use');
	next();
	console.log('end use');
});

app.get('/hello', (req, res, next) => {
	console.log('begin hello');
	next('route');
	console.log('end hello');
}, (req, res, next) => {
	console.log('begin another hello');
	next();
	console.log('end another hello');
});

app.get('/hel*', (req, res, next) => {
	console.log('begin hel*');
	next();
	console.log('end hel*');
});

app.use(errorHandler());

app.listen(app.get('port'), () => {
	console.log(`Server started at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});