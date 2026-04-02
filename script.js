import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
//import { Auth, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD8BpFarVkUJKvN28ffcmt36P8HZTiY_Nk",
  authDomain: "studyhub-54c42.firebaseapp.com",
  projectId: "studyhub-54c42",
  appId: "1:864814141143:web:2adb719a05402e21f4aa92",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ SIGNUP BUTTON

const email = document.getElementById("signupEmail");
  const password = document.getElementById("signupPassword");
  const submit = document.getElementById("signupbutton");

  submit.addEventListener("click", function (event) {
    event.preventDefault();
console.log(email.value)
   

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        alert("Signup Success ✅");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  });

