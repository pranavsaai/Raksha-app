document.querySelector('.add-contact-btn').addEventListener('click', function() {
  const container = document.querySelector('.container');
  
  const newFormGroup = document.createElement('div');
  newFormGroup.className = 'form-group';
  
  const newLabel = document.createElement('label');
  newLabel.textContent = `👤 PERSON ${document.querySelectorAll('.form-group').length + 1}`;
  
  const newNameInput = document.createElement('input');
  newNameInput.type = 'text';
  newNameInput.className = 'input-field';
  newNameInput.placeholder = 'Name';
  
  const newPhoneInput = document.createElement('input');
  newPhoneInput.type = 'tel';
  newPhoneInput.className = 'input-field';
  newPhoneInput.placeholder = 'Phone no.';
  
  newFormGroup.appendChild(newLabel);
  newFormGroup.appendChild(newNameInput);
  newFormGroup.appendChild(newPhoneInput);
  
  const addContactBtn = document.querySelector('.add-contact-btn');
  container.insertBefore(newFormGroup, addContactBtn);
});

document.querySelector('.save-btn').addEventListener('click', function() {
  const formGroups = document.querySelectorAll('.form-group');
  let allFieldsFilled = true;

  formGroups.forEach(function(group) {
      const nameInput = group.querySelector('input[type="text"]');
      const phoneInput = group.querySelector('input[type="tel"]');
      
      if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
          allFieldsFilled = false;
      }
  });

  if (allFieldsFilled) {
      // All required fields are filled, navigate to the Safe System page
      window.location.href = 'safesys.html';
  } else {
      // Show an alert or some feedback to the user
      alert('Please fill in all required fields before proceeding.');
  }
});
