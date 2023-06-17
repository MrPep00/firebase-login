import { app } from "./firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");

  const email = emailInput.value;
  const password = passwordInput.value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Login successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
});
