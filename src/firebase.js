import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIteaxOsp1XYKFwsyFywKWlKC-BI7941A",
  authDomain: "slack-clone-68cb2.firebaseapp.com",
  projectId: "slack-clone-68cb2",
  storageBucket: "slack-clone-68cb2.appspot.com",
  messagingSenderId: "413591901747",
  appId: "1:413591901747:web:ae1463c23136d651677546",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
