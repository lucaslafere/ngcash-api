import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const complexityOptions = {
    min: 8,
    upperCase: 1,
    numeric: 1,
    requirementCount: 2,
  };
export const createUserSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: passwordComplexity(complexityOptions).required
  });
  export const signInSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });