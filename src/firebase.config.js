import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAQFBsf0mrD0hcnIqqnI_5s2URxw1f61s0",
    authDomain: "restuarant-app-f4ff0.firebaseapp.com",
    databaseURL: "https://restuarant-app-f4ff0-default-rtdb.firebaseio.com",
    projectId: "restuarant-app-f4ff0",
    storageBucket: "restuarant-app-f4ff0.appspot.com",
    messagingSenderId: "550909140511",
    appId: "1:550909140511:web:9281da1e8fa260dbc17f2a"
  };
  
  // Initialize Firebase
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)

  const storage = getStorage(app)

  export {app, firestore, storage}