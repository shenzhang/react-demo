const express = require('express');
const fs = require('fs');
const sleep = require('sleep')
const middleware = require('./middleware')
const router = require('./router')

const app = express();

app.set('port', (process.env.PORT || 4000));

middleware(app);

router(app);

app.listen(app.get('port'), () => {
    console.log(`Server started at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});