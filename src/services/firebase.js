const firebase = require('firebase');
// Configs
const firebaseConfig = {
    apiKey: 'AIzaSyA9Emqit4MA1TF4tMHNJK6LYJ9BEwKz_0o',
    authDomain: 'airin-technical.firebaseapp.com',
    databaseURL: 'https://airin-technical.firebaseio.com',
    projectId: 'airin-technical',
    storageBucket: 'airin-technical.appspot.com',
    messagingSenderId: '938977789916',
    appId: '1:938977789916:web:b0a4b81132161d46'
};


// Init a new firebase app
firebase.initializeApp(firebaseConfig);

// Connect to the firebaseStore
const db = firebase.firestore();

export const questionsRef = db.collection('questions');
export const answersRef = db.collection('answers');

