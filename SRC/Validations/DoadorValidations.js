const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../validations/cpfValidations");

const doadorValidationRules = () => {
  return [
    body("doacao").notEmpty().withMessage("INFORME O VALOR DA DOAÇÃO:"),
    body("doacao").isFloat({min:10,max:Infinity}).withMessage("VALOR INVÁLIDO DE DOAÇÃO!"),
    body("cpf").notEmpty().withMessage("CPF OBRIGATÓRIO"),
    body("cpf")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF É INVÁLIDO!");
      return true;
    })
    .withMessage("CPF INVÁLIDO!!"),
    body("nome").notEmpty().withMessage("OBRIGATÓRIO INSERIR NOME!!"),
    body("nomeInstituicao").notEmpty().withMessage("INFORME O NOME DA INSTITUIÇÃO:"),
  ];
};

module.exports = {
  doadorValidationRules,
};