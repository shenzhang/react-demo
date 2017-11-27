const express = require('express');
const fs = require('fs');
const sleep = require('sleep')
const morgan = require('morgan')

const stubData = require('./stub-data')

const app = express();

app.set('port', (process.env.PORT || 4000));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
}

app.use(morgan('combined'));

app.use('/api/*', (req, res, next) => {
    sleep.sleep(1);
    res.header('Content-Type', 'application/json; charset=utf-8');

    next();
});

app.get('/api/customers', (req, res) => {
    res.json({
        data: stubData.customers
    });
});

app.get('/api/customers/:id', (req, res) => {
    const id = req.params.id;
    const customers = stubData.customers.filter(customer => customer.id === id);

    if (customers.length == 0) {
        res.status(404).end();
    } else {
        res.json({ data: customers[0] });
    }
});

app.listen(app.get('port'), () => {
    console.log(`Server started at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});