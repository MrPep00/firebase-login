const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    // Login successful
    console.log(userCredential.user);
  } catch (error) {
    // Login failed
    console.error(error);
  }
});