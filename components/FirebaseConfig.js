import Firebase from 'firebase'
(function() {
//import Firebase from 'firebase'
  //INITIALIZE FIREBASE
  var config = {
      apiKey: "AIzaSyAMRWbLLJjss9zxi7y4ZSqJ-GPwJe6zd2k",
      authDomain: "explore-utah27.firebaseapp.com",
      databaseURL: "https://explore-utah27.firebaseio.com",
      projectId: "explore-utah27",
      storageBucket: "explore-utah27.appspot.com",
      messagingSenderId: "871693138938"
    };
    const firebaseApp = Firebase.initializeApp(config);
    const db = firebaseApp.database()

  } ());
