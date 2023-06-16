import { app } from "./firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("reg-email-input");
  const passwordInput = document.getElementById("reg-password-input");

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    console.error(error);
  }
});
