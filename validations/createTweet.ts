import { body } from 'express-validator';

export const createTweetValidations = [
  body('text', 'Type tweet text')
    .isString()
    .isLength({
      max: 280,
    })
    .withMessage('Maximum tweet length is 280 characters'),
];
