import { promises } from "dns";

(function() {

const firebaseConfig = {
    apiKey: "AIzaSyDOkMZhrYawyPP_98WA-voUhtGqQK3e27Q",
    authDomain: "juji-firebase.firebaseapp.com",
    databaseURL: "https://juji-firebase.firebaseio.com",
    projectId: "juji-firebase",
    storageBucket: "juji-firebase.appspot.com",
    messagingSenderId: "921852905449",
    appId: "1:921852905449:web:1750eca92719f9b3562d78",
    measurementId: "G-PXBL48GJQG"
  };

  firebaseConfig.initializeApp(config);

  //Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');

  //Add login event
  btnLogin.addEventListener('click'), e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  }

}());