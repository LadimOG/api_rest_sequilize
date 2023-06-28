const joi = require("joi");

const productValidator = (body) => {
  const productShema = joi.object({
    title: joi.string().min(3).max(40).trim().required(),
    price: joi.number().required(),
    description: joi.string().min(4).max(200),
  });

  return productShema.validate(body);
};
module.exports = productValidator;
