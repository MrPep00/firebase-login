const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    // Registration successful
    console.log(userCredential.user);
  } catch (error) {
    // Registration failed
    console.error(error);
  }
});