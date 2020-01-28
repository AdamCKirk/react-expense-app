// These are basic commands that are used for firebase. This file is not hooked up to a database so it
// wont work. These are the basics that cover sending infromation to a server and edit responses. It
// also covers area such as array handling as firebase does not support arrays and therefore a work
// around is needed.

// This is a method that updates when a child is removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

// This is a method that updates when a child is changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

// This is a method that updates when a child is added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

// This prints a single instance of expenses
database.ref('expenses')
  .once('value')
  .then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
      })
      console.log(expenses)
  });

// Check to see if an expense updates and return the array
database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expenses)
})

// This area I push objects to an expense area. By using push firebase generates a random id number
database.ref('expenses').push({
    description: 'rent',
    note: 'damn landlord',
    amout: 1200,
    createdAt: 120050
});

database.ref('expenses').push({
    description: 'gas',
    note: 'do you smell that',
    amout: 250,
    createdAt: 45000
});

database.ref('expenses').push({
    description: 'power',
    note: 'POWER!',
    amout: 100,
    createdAt: 45005
});


database.ref('notes').push({
    title: 'Lessons to Learn',
    body: 'Docker is the hot dock'
});

const firebaseNotes = {
    notes: {
        asjkasjas: {
            title: 'First note!',
            body: 'This is my note'
        },
        kajsasksa: {
            title: 'Another Note',
            body: 'This is another note'
        }
    }
}

// Firebase does not support arrays and this will be converted to an object with children starting at 0
const notes = [{
    id: 12,
    title: 'First note!',
    body: 'This is my note'
},
{
    id: '12as5',
    title: 'Another Note',
    body: 'This is another note'
}];

database.ref('notes').set(notes);

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
})

// This method allows the server to tell us if something changes
// It is called as a variable to make is easier to target this "on" method when removing
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (error) => {
    console.log('error with the data', error)
})

setTimeout(() => {
    database.ref('age').set(30)
}, 3500);

// This remove the "on" service. Pass no value to remove all "on" service on that object
// To remove specific "on" service use the exsact same method
setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(31)
}, 10500);

// This is how you fetch and read data from a database
database.ref('location')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((error) => {
        console.log('Error fetching data ', error);
    });

// Setup basic data on a database
database.ref().set({
    name: 'Adam Miller-Kirk',
    age: 31,
    stressLevel: 6,
    job: {
        title: 'Bum'
    },
    location: {
        city: 'Portishead',
        country: 'UK'
    }
}).then(() => {
    console.log('Data is saved!')
}).catch((error) => {
    console.log('This failed ', error)
});

// Update is used for multi updates in one move. It can also create new items as well
// To delete data from the server set it's value to null
// The update wont work on nested object such as objects, use quates, backslash, and object name

database.ref().update({
    stressLevel: 9,
    'job/company': 'Lockheed',
    'location/city': 'Bristol'
});

database.ref().update({
    job: 'Space Bum',
    'location/city': 'The Moon'
});

database.ref().update({
    name: 'Jen',
    age: 30,
    job: 'Nurse',
    isSingle: null
});

// Below are methods to remove data
// Passing null in set is the same as calling remove
// database.ref('isSingle').set(null);

database.ref('isSingle').remove().then(() => {
    console.log('remove succeeded')
}).catch((error) => {
    console.log('failed to remove because of: ', error)
})