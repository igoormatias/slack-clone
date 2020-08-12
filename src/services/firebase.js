import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDc8OudqvEhHHbZDfL1heaB8OtFryGA9n0",
    authDomain: "slack-clone-1d131.firebaseapp.com",
    databaseURL: "https://slack-clone-1d131.firebaseio.com",
    projectId: "slack-clone-1d131",
    storageBucket: "slack-clone-1d131.appspot.com",
    messagingSenderId: "96032147797",
    appId: "1:96032147797:web:c61d53e99a5d87507f87dc",
    measurementId: "G-LN6FB07G0D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;