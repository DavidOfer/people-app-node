const Person = require('../models/Person')
const { validationResult } = require('express-validator');

exports.getPersons = async (req, res, next) => {
    const perPage = req.query.perPage || 10;
    const currentPage = req.query.page || 0;
    const sortBy = req.query.sortBy || 'idNumber';
    console.log(sortBy)
    const order = req.query.order === 'desc' ? -1 : 1;
    const sort = {}
    sort[sortBy] = order;
    console.log(sort)
    console.log(perPage)
    try {
        // await new Promise(resolve => setTimeout(resolve, 1000))
        const count = await Person.find().countDocuments()
        const result = await Person.find().sort(sort).skip((currentPage) * perPage).limit(perPage)
        res.send({ count, result })
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        // res.status(400).send(err)
    }
}

exports.getPerson = async (req, res, next) => {
    try {
        const result = await Person.findById(req.params.id);
        if (!result) {
            const error = new Error('Could not find person');
            error.statusCode = 404;
            throw error;
        }
        res.send(result);
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
        // res.status(400).send(err)
    }
}

exports.postPerson = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const person = new Person(req.body);
        const result = await person.save();
        res.send(result);
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.patchPerson = async (req, res, next) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstName', 'lastName', 'idNumber', 'birthDate', 'gender'];
    const isUpdatesValid = updates.every((update) => allowedUpdates.includes(update));
    if (!isUpdatesValid) {
        return res.status(400).send({ error: 'invalid updates requested' });
    }
    try {
        const person = await Person.findById(req.params.id);
        if (!person) {
            return res.status(400).send({ error: 'person does not exist' });
        }
        updates.forEach(update => {
            person[update] = req.body[update];
        })
        await person.save()
        res.send(person);
    }
    catch (err) {
        res.status(400).send(err)
    }
}