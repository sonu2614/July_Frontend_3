// // Timer data structure
class Timer {
    constructor(hours, minutes, seconds) {
        this.duration = (hours * 3600) + (minutes * 60) + seconds;
        this.remainingTime = this.duration;
        this.timerInterval = null;
        this.timerElement = null;
    }
    updateDisplay() {
        if (this.timerElement) {
            this.timerElement.innerText = formatTime(this.remainingTime);
        }
    }
}

// Array to store active timers
let activeTimers = [];

// DOM Elements
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const addTimerBtn = document.getElementById('add-timer-btn');
const activeTimersContainer = document.getElementById('active-timers');

// Function to display active timers
function displayTimers() {
    activeTimersContainer.innerHTML = "";
    activeTimers.forEach((timer, index) => {
        const timerDiv = document.createElement('div');
        timerDiv.className = 'timer';
        timerDiv.innerHTML = `
            <span>Timer ${index + 1}: ${formatTime(timer.remainingTime)}</span>
            <button class="delete-timer-btn" data-index="${index}">Delete</button>`;
            activeTimersContainer.appendChild(timerDiv);
            timer.timerElement = timerDiv.querySelector('span');
        });
        // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-timer-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDeleteTimer);
    });
}

// Function to format time (HH:MM:SS)
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Function to add a new timer
function addTimer() {
    const hours = parseInt(hoursInput.value);
    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);
    if (hours < 0 || minutes < 0 || seconds < 0) {
        alert('Please enter positive values for hours, minutes, and seconds.');
        return;
    }

    const newTimer = new Timer(hours, minutes, seconds);
    activeTimers.push(newTimer);

    // Clear the input fields
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    displayTimers();

    // Start the countdown for the newly added timer
    newTimer.timerInterval = setInterval(() => {
        newTimer.remainingTime--;
        if (newTimer.remainingTime <= 0) {
        clearInterval(newTimer.timerInterval);
        displayTimers();
        newTimer.timerElement.innerText = "Time is up!";
    } else {
        newTimer.updateDisplay();
    }
    }, 1000);
}

// Function to handle delete timer
function handleDeleteTimer(event) {
    const index = event.target.getAttribute('data-index');
    activeTimers.splice(index, 1);
    displayTimers();
}

// Add event listeners
addTimerBtn.addEventListener('click', addTimer);

// Initial display of active timers
displayTimers();
