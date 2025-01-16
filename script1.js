// Function to check if all fields are filled
function areFieldsFilled() {
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  return name && dob && city && state;
}

// Function to navigate to the dashboard
function goToDashboard() {
  if (areFieldsFilled()) {
      window.location.href = "welcome.html";
  } else {
      alert("Please fill in all the details.");
  }
}

// Event listeners for gender buttons
document.getElementById('male').addEventListener('click', function() {
  document.getElementById('male').classList.add('selected');
  document.getElementById('female').classList.remove('selected');
  goToDashboard();
});

document.getElementById('female').addEventListener('click', function() {
  document.getElementById('female').classList.add('selected');
  document.getElementById('male').classList.remove('selected');
  goToDashboard();
});
