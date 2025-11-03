const Joi = require('joi');

const schema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  amount: Joi.number().positive().required(),
  description: Joi.string().allow(''),
  category: Joi.string().required(),
  date: Joi.date().required()
});

module.exports = (data) => schema.validate(data);
