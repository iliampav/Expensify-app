import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { firebase, database as default };




  //child_remove

  // database.ref('expenses').on('child_removed', (snapshot) => {
  //     console.log(snapshot.key, snapshot.val())
  // });

  // //child_changed

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // //child_added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // })

  // database.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenses = [];
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });

  //     console.log(expenses)
  //   });

  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });

  //     console.log(expenses)
  //   });

  // database.ref('expenses').push({
  //   description: 'Dog Clean',
  //   note: 'Fast and clean',
  //   amount: 332342,
  //   createAt: 5656578
  // })

  // database.ref('notes/-MYLZhNQa_KZsgBDpH8z').update({

  // })

  // database.ref('notes').push({
  //     title: 'Course topicts',
  //     body: 'This is my second note'
  //   })

  // const firebaseNotes = {
  //   notes: {
  //     1: {
  //       title: 'First Note',
  //       body: 'This is my note'
  //     },
  //     21: {
  //       title: '21st Note',
  //       body: 'This is my note'
  //     }
  //   }
  // }

  // database.ref().on('value', (snapshot) => {
  //   const value = snapshot.val()
  //   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`)
  // })

  // setTimeout(() => {
  //   database.ref('job/title').set('Software Developer')
  // }, 3000)

//   const onValueChange = database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     }, (e) => {
//         console.log('Error with data fectching ' + e)
//     });

//     setTimeout(() => {
//         database.ref('age').set(30)
//     }, 5000)

//   database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data' + e);
//     });
//   database.ref().set({
//       name: 'Iliam Pavkovic',
//       age: 26,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Montreal',
//           country: 'Canada'
//       }      
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((e) => {
//     console.log(' it fails: ' + e)
//   })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database
//     .ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data was removed')
//     })
//     .catch((e) => {
//         console.log('data was not removed' + e)
//     })