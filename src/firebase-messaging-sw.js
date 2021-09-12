// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

firebase.initializeApp({
  // apiKey: "AIzaSyD9hQzPe5z0sMiZwTqDI9Tn_Z7F4lDWElo",
  // authDomain: "angular-fire-ba00e.firebaseapp.com",
  // projectId: "angular-fire-ba00e",
  // storageBucket: "angular-fire-ba00e.appspot.com",
  // messagingSenderId: "850121223897",
  // appId: "1:850121223897:web:975a9750059f579e9e98c8",
  // measurementId: "G-X2Z2CW6B4G"

  apiKey: 'AIzaSyCJG9CA0uSbCypRMEfpbFZS6M02we5lAEA',
  authDomain: 'food-16c2a.firebaseapp.com',
  projectId: 'food-16c2a',
  storageBucket: 'food-16c2a.appspot.com',
  messagingSenderId: '336365027359',
  appId: '1:336365027359:web:b4eda528a70b8ba424952a',
  measurementId: 'G-PKDCXDGVMP'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

