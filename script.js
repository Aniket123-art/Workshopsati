// Get the form
    const form = document.getElementById("loginForm");

    // Add submit event
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stop actual form submission
      alert("Login button clicked!");
    });