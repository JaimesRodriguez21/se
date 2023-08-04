const { Router } = require('express');

const mensajeriaController = require('../controllers/mensajeriaController')
const routes = Router();
const mensajeria = new mensajeriaController();
routes.post('/send-mensaje', mensajeria.sendEmail);
module.exports = routes 