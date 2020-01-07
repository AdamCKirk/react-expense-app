// ------------- Object Deconstructuring

// const person = {
//     name: 'Adam',
//     age: 31,
//     location: {
//         city: 'Portishead',
//         temp: 8
//     }
// };


// const {name: firstName = 'anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;


// console.log(`${firstName} is ${age}`)

// const { temp: temperature, city } = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     book: 'C#',
//     author: 'Adam Kirk',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName);



// -------------- Array Deconstructuring

//const address = ['8 Brock End', 'Portishead', 'North Somerset', 'BS20 8AS'];
const address = [];
const [, street = 1, city = 'London'] = address;
console.log(`You are in ${street} in ${city}`)

const item = ['coffee (hot)', '£2.00', '£2.50', '£2.75' ]
const [coffee, ,mPrice] = item
console.log(`A medium ${coffee} costs ${mPrice}`)