const { request, response } = require('express');
 class mensajeriaController {

    constructor() {
    }

    async sendEmail(req = request, res = response) {
        try {
            console.log(req.body)
            const message = "Correo Enviado a " + req.body.email
            res.status(200).send({message});
        } catch (error) {
            res.status(404).send({ "error": error.message })
        }
    }
}

module.exports = mensajeriaController;