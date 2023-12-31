let timerInterval;
let timeLeft = 60; // 1 minute in seconds
const defaultHeight = '60vh';

function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer

    timerInterval = setInterval(function () {
        updateTimerDisplay();
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            timeLeft = 0;
            resetTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const innerDiv = document.getElementById('timer');
    const percentage = (timeLeft / 60) * 100; // Calculate percentage remaining
    innerDiv.style.height = percentage + '%';
}

function resetTimerDisplay() {
    const innerDiv = document.getElementById('timer');
    innerDiv.style.height = defaultHeight;
}

function myfunc() {
    clearInterval(timerInterval); // Clear the timer when needed
    timeLeft = 60; // Reset the timer to 1 minute
    resetTimerDisplay(); // Reset the height immediately
}
