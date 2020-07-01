import firebase from 'firebase'

var config = {
  apiKey: "***************",
  authDomain: "*************",
  databaseURL: "***************",
  projectId: "************",
  storageBucket: "************",
  messagingSenderId: "**************",
  appId: "************"
};
firebase.initializeApp(config);

export default firebase
