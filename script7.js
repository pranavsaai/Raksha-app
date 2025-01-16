document.querySelector('.disable-btn').addEventListener('click', () => {
  const pin = document.getElementById('pin').value;
  const correctPin = "123456"; // Set the correct PIN here

  if (pin === correctPin) {
      // Redirect to the end page if the PIN is correct
      window.location.href = "end.html"; // Make sure 'end.html' exists
  } else {
      alert('Incorrect PIN. Please try again.');
  }
});
