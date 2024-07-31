import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "basic-auth-v1.firebaseapp.com",
  projectId: "basic-auth-v1",
  storageBucket: "basic-auth-v1.appspot.com",
  messagingSenderId: "986080463461",
  appId: "1:986080463461:web:cf2f3d2f10551063cf948c",
  measurementId: "G-QCR6RRB5FX"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
