import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDftlN5Er0Jdm1m5IT7j1c5h0OXz84zDyg",
  authDomain: "netflix-clone-deb8e.firebaseapp.com",
  projectId: "netflix-clone-deb8e",
  storageBucket: "netflix-clone-deb8e.appspot.com",
  messagingSenderId: "504621720451",
  appId: "1:504621720451:web:c2f5b2e130d4dd02b04cb6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth };