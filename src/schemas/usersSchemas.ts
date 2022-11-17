import joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const complexityOptions = {
    min: 8,
    upperCase: 1,
    numeric: 1,
    requirementCount: 2,
  };
export const createUserSchema = joi.object({
    username: joi.string().min(3).required(),
    password: passwordComplexity(complexityOptions).required
  });

