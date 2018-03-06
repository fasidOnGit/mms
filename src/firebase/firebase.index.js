import * as firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyB3NW_91hOjWICKFGHElSXrxdgvspKCBNI",
    authDomain: "mms-db-5ae10.firebaseapp.com",
    databaseURL: "https://mms-db-5ae10.firebaseio.com",
    projectId: "mms-db-5ae10",
    storageBucket: "mms-db-5ae10.appspot.com",
    messagingSenderId: "703342301090"
  };
  let firebaseObject ={};
  
  const firebaseApp = firebase.initializeApp(config);
  
  firebaseObject.db = firebaseApp.database();
  
  firebaseObject.auth = firebaseApp.auth();

  firebaseObject.storageKey ="";

  firebaseObject.isAuthenticated = () =>{
      return !!this.auth.currentUser || !!localStorage.getItem(this.storageKey);
  };


  export default firebaseObject;