const app = require('./app')

const port = process.env.PORT;

app.listen(port, () => {
    console.log('server is up on port ' + port);
});

const Person = require('./models/Person');


// function randomDate(start, end) {
//     return new Date(+start + Math.random() * (end - start));
// }
// function getRandomIdNumber(min=1000000, max=100000000) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }
// const people = [];
// const Ids=[];
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// for (let i = 0; i < 1000; i++) {
//     let id = getRandomIdNumber();
//     while(Ids.includes(id))
//     {
//         id=getRandomIdNumber();
//     }
//     Ids.push(id);
//     const person = new Person({
//         idNumber: id,
//         firstName: 'User' + i,
//         lastName: Math.random(),
//         birthDate: randomDate(new Date(1900, 0, 0), new Date()),
//         gender: getRandomInt(2) > 0 ? 'male' : 'female'
//     })
//     people.push(person);
// }
// Person.insertMany(people)








// const person = new Person({
//     idNumber:12345,
//     firstName:'Ofer',
//     lastName:'Test',
//     birthDate:'1/1/11',
//     gender:'male'
// })

// person.save().then(result=>{
//     console.log(result)
// })
// .catch(err=>{
//     console.log(err)
// })