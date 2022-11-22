import Joi from 'joi';

export const cashOutSchema = Joi.object({
    amount: Joi.number().positive().required(),
    username: Joi.string().required()
});