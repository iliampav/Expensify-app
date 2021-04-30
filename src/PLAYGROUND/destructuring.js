// const person = {
//     name: 'Andrew',
//     age: 21,
//     location: {
//         city: 'Curitiba',
//         temp: 92
//     }
// };

// const { name: firstName = 'anonymous', age } = person
// console.log(`${firstName} is ${age}`)

// const {city, temp: temperature} = person.location
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(`${publisherName}`)


// Array destructuring:

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '356235324'];

const [, city, state ] = address;

console.log(`You're in ${city} ${state}`)

const item = [ 'Coffee (hot)', 'R$2', 'R$4', 'R$6' ];

const [product, smallPrice, mediumPrice, largePrice] = item

console.log(`A medium ${product} cost ${mediumPrice}`)