import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCPC3RJMbWZj2QegO95G5AqUAKYi5kEMGU",
  authDomain: "bootcamp-994bf.firebaseapp.com",
  databaseURL: "https://bootcamp-994bf.firebaseio.com",
  projectId: "bootcamp-994bf",
  storageBucket: "bootcamp-994bf.appspot.com",
  messagingSenderId: "935487728622",
  appId: "1:935487728622:web:c17f257b99ed28ff"
};
firebase.initializeApp(config);

export default firebase