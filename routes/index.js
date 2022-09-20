const routes = require('express').Router();

routes.get('/', (req, res) =>{
    res.send('Mason Hunt');
});

module.exports = routes;