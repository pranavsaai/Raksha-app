// JavaScript for handling the PIN input and Disable button click
document.querySelector('.disable-btn').addEventListener('click', () => {
  const pin = document.getElementById('pin').value;
  if (pin) {
      alert('App disabled with PIN: ' + pin);
  } else {
      alert('Please enter your PIN.');
  }
});
