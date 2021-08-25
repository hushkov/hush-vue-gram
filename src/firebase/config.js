import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBojU9XzOOnBYM3MenSMfhstt1XGVFXFfo',
  authDomain: 'hushvuegram.firebaseapp.com',
  projectId: 'hushvuegram',
  storageBucket: 'hushvuegram.appspot.com',
  messagingSenderId: '706951655427',
  appId: '1:706951655427:web:70e9df4572f3f90bcc5e36',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
