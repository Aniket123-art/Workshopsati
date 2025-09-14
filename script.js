
// Login form handler
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login button clicked!");
  });
}

// Signup form handler
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Sign Up button clicked!\nEmail: " + email);
  });
}
