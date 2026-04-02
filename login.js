import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8BpFarVkUJKvN28ffcmt36P8HZTiY_Nk",
  authDomain: "studyhub-54c42.firebaseapp.com",
  projectId: "studyhub-54c42",
  appId: "1:864814141143:web:2adb719a05402e21f4aa92",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("Login clicked 🔥");

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        alert("Login Success ✅");
        console.log(userCredential.user);

        // redirect
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  });

});