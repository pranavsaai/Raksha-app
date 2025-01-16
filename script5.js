document.querySelector('.upload-photo').addEventListener('click', () => {
  alert('Upload Photo clicked');
});

document.querySelector('.upload-surrounding').addEventListener('click', () => {
  alert('Upload Surrounding Videos/Images clicked');
});

document.querySelector('.confirm').addEventListener('click', () => {
  // Redirect to the map HTML page
  window.location.href = 'map.html'; // Replace 'map.html' with the actual filename of your map HTML file
});
