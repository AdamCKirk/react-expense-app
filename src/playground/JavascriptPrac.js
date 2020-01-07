import React from 'react';
import ReactDOM from 'react-dom';

// Random Number Generator from 1 to 100
const randomNumber = () => {
    const number = Math.floor(Math.random()*101)
    return number
}

//console.log(randomNumber())


// Fizzbuzz challenge

// for (let i=1; i <= 100; i++){
//     if (i % 3 == 0){
//         if (i % 15 == 0){
//             console.log('Fizzbuzz')
//         } else {
//             console.log('Fizz')
//         }
//     } else if (i % 5 == 0){
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }


// Takes an array and does something to each item and returns a new array
const names = ['Adam', 'Jen', 'Zachary']
const surNames = ['Kirk', 'Miller', 'Miller-Kirk']

const fullName = names.map((i) => {
    return i + ' Miller-Kirk'
})

const ImageTest = (
    <div>
        <p>Hello World</p>
    </div>
)

console.log(names)
console.log(fullName)


// Merge Arrays and add new items
const otherFullNames = [...names, 'Dan']

console.log(otherFullNames)



ReactDOM.render(<ImageTest />, document.getElementById('app'))