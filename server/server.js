const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 4000));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
}

const data = {
    data: [
        {
            id: '123',
            brand: '阿迪达斯',
            name: 'ZHANG San',
            age: 32,
            address: 'Chengdu, Sichuan, China'
        },
        {
            id: '456',
            brand: '耐克',
            name: 'LI Si',
            age: 33,
            address: 'Chengdu, Sichuan, China'
        }
    ]
};

app.get('/api/customers', (req, res) => {
    // const param = req.query.q;

    // if (!param) {
    //     res.json({
    //         error: 'Missing required parameter `q`',
    //     });
    //     return;
    // }

    res.json(data);
});

app.get('/api/brands/{brand}/customers', (req, res) => {
    res.json(data);
});

app.listen(app.get('port'), () => {
    console.log(`Server started at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});