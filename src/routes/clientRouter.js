const express = require('express');
const clientRouter = express.Router();
const clientController = require('../controllers/clientController');

clientRouter.route('/')
    .put(clientController.addClient);
clientRouter.route('/getBalance')
    .post(clientController.getBalance);
clientRouter.route('/wallet')
    .post(clientController.rechargeWallet);

module.exports = clientRouter;