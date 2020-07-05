// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDYf17nawwy-ce9L6pMYE6YjIgI3sHG7jc",
    authDomain: "angularpwa-8ce24.firebaseapp.com",
    databaseURL: "https://angularpwa-8ce24.firebaseio.com",
    projectId: "angularpwa-8ce24",
    storageBucket: "angularpwa-8ce24.appspot.com",
    messagingSenderId: "889258940680",
    appId: "1:889258940680:web:9e97181e6aeb6d65d9b4bd"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();