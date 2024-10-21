// This file is loaded by the login.html file
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

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
firebase.initializeApp(firebaseConfig);

// Sign in with Google
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // User is signed in
      const user = result.user;
      console.log("User signed in with Google:", user);
      const userName = user.displayName || user.email; // Use displayName for Google, email for Email/Password
      const userNameDisplay = document.getElementById('userNameDisplay');
      userNameDisplay.textContent = `Welcome, ${userName}!`;
    })
    .catch((error) => {
      // Handle Errors
      console.error("Error signing in with Google:", error);
    });
}

// Sign in with Email/Password
function signInWithEmailAndPassword(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User signed in with Email/Password:", user);
      const userName = user.displayName || user.email; // Use displayName for Google, email for Email/Password
      const userNameDisplay = document.getElementById('userNameDisplay');
      userNameDisplay.textContent = `Welcome, ${userName}!`;
    })
    .catch((error) => {
      // Handle Errors
      console.error("Error signing in with Email/Password:", error);
    });
}

// Example: Sign in with Google
const googleSignInButton = document.getElementById('googleSignInButton');
googleSignInButton.addEventListener('click', signInWithGoogle);

// Example: Sign in with Email/Password
const emailSignInButton = document.getElementById('emailSignInButton');
emailSignInButton.addEventListener('click', () => {
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  signInWithEmailAndPassword(email, password);
});