// Timer variables
let timer;
let remainingTime;

// PIN validation variables
const correctPIN = "1234"; // Replace with your desired PIN

// Initially, disable the Continue button
const continueButton = document.getElementById('continue-button');
continueButton.disabled = true; // Ensure the button is disabled initially

// Timer functionality
document.getElementById('start-timer').addEventListener('click', function() {
    const minutes = parseInt(document.getElementById('minute-input').value, 10) || 0;
    const seconds = parseInt(document.getElementById('second-input').value, 10) || 0;
    remainingTime = (minutes * 60) + seconds;

    if (remainingTime > 0) {
        startTimer();
    } else {
        alert('Please enter a valid time to start the timer.');
    }
});

function startTimer() {
    clearInterval(timer); // Clear any existing timers
    timer = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            // Allow continue button to be clicked
            continueButton.disabled = false;
            return;
        }
        remainingTime--;
        displayTime();
    }, 1000); // Timer decrements every second
}

function displayTime() {
    const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
    const seconds = String(remainingTime % 60).padStart(2, '0');
    document.getElementById("time-display").textContent = `${minutes}:${seconds}`;
}

// Show the PIN input modal
document.getElementById('pin-button').addEventListener('click', function() {
    document.getElementById('pin-modal').style.display = 'block';
});

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('pin-modal').style.display = 'none';
});

// Handle PIN submission
document.getElementById('submit-pin').addEventListener('click', function() {
    const enteredPIN = document.getElementById('pin-input').value;
    if (enteredPIN === correctPIN) {
        clearInterval(timer); // Stop the timer
        document.getElementById('pin-modal').style.display = 'none'; // Close the modal
        alert('The SOS alert has stopped!');
        // Enable the Continue button
        continueButton.disabled = false;
    } else {
        alert('Incorrect PIN. Please try again.');
    }
});

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('pin-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Redirect to the Scan System page when "Continue" is clicked
continueButton.addEventListener('click', function() {
    window.location.href = 'scansys.html'; // Redirect to the Scan System page
});
