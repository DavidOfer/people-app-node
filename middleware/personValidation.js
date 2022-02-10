const { body } = require('express-validator')
const Person = require('../models/Person');
module.exports = [
    body('idNumber')
    .isLength({min:8,max:10})
    .custom((value, { req }) => {
        return Person.findOne({ idNumber: value }).then(userDoc => {
            if (userDoc) {
                return Promise.reject(
                    'A person with that id number already exists'
                );
            }
        });
    }),
    body('firstName').isAlpha().withMessage('first name must contain only characters')
        .isLength({ min: 2, max: 20 }).withMessage('First name must be 2 to 20 characters long'),

    body('lastName').isAlpha().withMessage('Last name must contain only characters')
        .isLength({ min: 2, max: 20 }).withMessage('Last name must be 2 to 20 characters long'),

    body('gender').custom((value,{req})=>{
        if(!(value==='male' || value==='female'))
        {
            throw new Error('gender must be male or female')
        }
        return true;
    }),
    body('birthDate').isAfter("01/01/1900").isBefore(new Date().toDateString())

]
