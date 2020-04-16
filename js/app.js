import { promises } from "dns";

(function() {

//initialize Firebase

const config = {
    apiKey: "AIzaSyDOkMZhrYawyPP_98WA-voUhtGqQK3e27Q",
    authDomain: "juji-firebase.firebaseapp.com",
    databaseURL: "https://juji-firebase.firebaseio.com",
    projectId: "juji-firebase",
    storageBucket: "juji-firebase.appspot.com",
    messagingSenderId: "921852905449",
    appId: "1:921852905449:web:1750eca92719f9b3562d78",
    measurementId: "G-PXBL48GJQG"
  };

firebase.initializeApp(config);

//Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');

//Add login event
    btnLogin.addEventListener('click', e => {
// Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
//Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

//Add signup event
btnLogin.addEventListener('click', e => {
    // Get email and pass
    // TODO: check for real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
        .catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});

//Add realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    } else {
        console.log('not logged in');
    }
    
});
