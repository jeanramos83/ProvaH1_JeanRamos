const { Router, request } = require('express');
const Service = require('../Services/Service');
const { validate } = require('../validations/validations');
const { doadorValidationsRules } = require('../Validations/DoadorValidations.js');


const routes = Router();


routes.post('/', doadorValidationsRules(), validate, (request, response) => {

    const { name, nameinstituicao, valorDoacao, cpf  } = request.body;
    const novoDoador = {name, nameinstituicao, valorDoacao, cpf };
    const DoadorRetorno = Service.regrasCredito(novoDoador);
    return response.status(201).json({ DoadorRetorno });

    });


    module.exports = routes;