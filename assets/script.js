// Countdown function
function countdown(seconds, callback) {
    if (seconds < 0) {
      callback();
    } else {
      document.getElementById('countdown').innerHTML = seconds;
      setTimeout(function() {
        countdown(seconds - 1, callback);
      }, 1000);
    }
  }
  
  // Callback function to display "Happy Developers Day"
  function displayMessage() {
    document.getElementById('countdown').innerHTML = '';//Happy Developers Day
    var hiddenElement = document.querySelector('.hidden');
    if (hiddenElement) {
      hiddenElement.style.display = "block";
    }
  }
  
  // Start the countdown
  countdown(10, displayMessage);
  