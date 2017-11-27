const stubData = require('./stub-data')

const search = (app) => {
  app.get('/api/customers', (req, res) => {
    res.json({
        data: stubData.customers
    });
  });
};

const detail = (app) => {
  app.get('/api/customers/:id', (req, res) => {
    const id = req.params.id;
    const customers = stubData.customers.filter(customer => customer.id === id);
  
    if (customers.length == 0) {
        res.status(404).end();
    } else {
        res.json({ data: customers[0] });
    }
  });
}

module.exports = (app) => {
  search(app);
  detail(app);
}