const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('This is my resolved data');
    // }, 1500);
    reject('Something went wrong')
});

console.log('before')

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error:', error)
});

// This is valid code however it maybe confusing by removing the catch method
promise.then((data) => {
    console.log('2', data);
}, (error) => {
    console.log('error:', error)
});

console.log('after')