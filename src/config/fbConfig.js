import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDoLAr95YLCA7W0vlr1c0m8lb9nbfW9jnw",
    authDomain: "hugoisrr-marioplan.firebaseapp.com",
    databaseURL: "https://hugoisrr-marioplan.firebaseio.com",
    projectId: "hugoisrr-marioplan",
    storageBucket: "hugoisrr-marioplan.appspot.com",
    messagingSenderId: "134738195841"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
