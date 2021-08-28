import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA0Qznm4b958e7FYli1mP0BQVul8iZSSxE",
  authDomain: "vue-algoweb.firebaseapp.com",
  projectId: "vue-algoweb",
  storageBucket: "vue-algoweb.appspot.com",
  messagingSenderId: "640559063909",
  appId: "1:640559063909:web:1c11da38048d30ba80778c",
  measurementId: "G-Z1PJ9E65FE"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();