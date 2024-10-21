import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  var firebaseConfig = {
    apiKey: "AIzaSyD9-wiUrzzOC_ru8sBoxSsmAKsWzBQDuvs",
    authDomain: "pawsindie-cd14.firebaseapp.com",
    projectId: "pawsindie-cd14",
    storageBucket: "pawsindie-cd14.appspot.com",
    messagingSenderId: "1002560556627",
    appId: "1:1002560556627:web:3a6709764dd9516afd00a6",
    measurementId: "G-NZN3KYEB71"
};
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD9-wiUrzzOC_ru8sBoxSsmAKsWzBQDuvs",
    authDomain: "pawsindie-cd14.firebaseapp.com",
    projectId: "pawsindie-cd14",
    storageBucket: "pawsindie-cd14.appspot.com",
    messagingSenderId: "1002560556627",
    appId: "1:1002560556627:web:3a6709764dd9516afd00a6",
    measurementId: "G-NZN3KYEB71"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

