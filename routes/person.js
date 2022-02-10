const express = require('express');
const personController = require('../controllers/person');
const personValidation = require('../middleware/personValidation');

const personRouter = express.Router();



personRouter.get('/person', personController.getPersons);

personRouter.get('/person/:id', personController.getPerson);

personRouter.post('/person',
    personValidation
    , personController.postPerson);

personRouter.patch('/person/:id', personController.patchPerson);


module.exports = personRouter;