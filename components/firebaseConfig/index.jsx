import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRk6CjfHj-eZh02dmi6-mYgKOEs8FOHC0",
  authDomain: "dsmb-b.firebaseapp.com",
  projectId: "dsmb-b",
  storageBucket: "dsmb-b.appspot.com",
  messagingSenderId: "162266837303",
  appId: "1:162266837303:web:6adcac05b38b53bee72ab2",
  measurementId: "G-J6DF0S4BY1"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app