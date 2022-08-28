import { body } from 'express-validator';

export const registerValidations = [
  body('email', 'Type E-Mail')
    .isEmail()
    .withMessage('Wrong E-Mail')
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage('The allowed number of characters is from 10 to 40.'),
  body('fullname', 'Name')
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage('The allowed number of characters is from 2 to 40.'),
  body('username', 'Type Username')
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage('The allowed number of characters is from 2 to 40.'),
  body('password', 'Type Password')
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage('The minimum number of characters is 6.')
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Passwords do not match');
      } else {
        return value;
      }
    }),
];
