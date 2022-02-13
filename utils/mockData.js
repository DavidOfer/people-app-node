const Person = require('../models/Person');

function randomDate(start, end) {
    return new Date(+start + Math.random() * (end - start));
}
function getRandomIdNumber(min = 1000000, max = 100000000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const mockData = () => {
    const people = [];
    const Ids = [];
    for (let i = 0; i < 1000; i++) {
        let id = getRandomIdNumber();
        while (Ids.includes(id)) {
            id = getRandomIdNumber();
        }
        Ids.push(id);
        const person = new Person({
            idNumber: id,
            firstName: 'User' + i,
            lastName: Math.random().toFixed(4),
            birthDate: randomDate(new Date(1900, 0, 0), new Date()),
            gender: getRandomInt(2) > 0 ? 'male' : 'female'
        })
        people.push(person);
    }
    Person.insertMany(people)
}
module.exports = mockData;