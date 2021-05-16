const express = require('express');
const paymentRouter = express.Router();
const paymentController = require('../controllers/paymentController');

paymentRouter.route('/')
    .put(paymentController.generatePay)
    .post(paymentController.confirmPayment);

module.exports = paymentRouter;