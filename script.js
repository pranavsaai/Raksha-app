document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const phone = document.getElementById('phone').value;
  const otp = document.getElementById('otp').value;
  const errorElement = document.getElementById('error');

  // Simple OTP verification logic for demonstration
  if (phone === "1234567890" && otp === "1234") {
      // Redirect to the specific HTML page
      window.location.href = "dashboard.html";
  } else {
      // Display an error message
      errorElement.textContent = "Invalid phone number or OTP!";
  }
});
