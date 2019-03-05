import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyC-o57eWOUGHCbeI4qyfZQUopedb7pM2h8",
    authDomain: "todo-ninja-cbf56.firebaseapp.com",
    databaseURL: "https://todo-ninja-cbf56.firebaseio.com",
    projectId: "todo-ninja-cbf56",
    storageBucket: "todo-ninja-cbf56.appspot.com",
    messagingSenderId: "823540218632"
  };
  firebase.initializeApp(config)
  const db = firebase.firestore()

  db.settings({ timestampsInSnapshots: true })

  export default db;