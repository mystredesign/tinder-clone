import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAwBAKp1qBh7TMWe9nTGFBeibpap3G4_o",
  authDomain: "tinder-clone-755f4.firebaseapp.com",
  databaseURL: "https://tinder-clone-755f4.firebaseio.com",
  projectId: "tinder-clone-755f4",
  storageBucket: "tinder-clone-755f4.appspot.com",
  messagingSenderId: "793788798046",
  appId: "1:793788798046:web:fcfe61f0fd2a52097010cf",
  measurementId: "G-MN0GFV1340"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

export default database;
