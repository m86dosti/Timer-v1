function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM";
    // Convert hours to 12-hour format
    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }
    // Pad single digit minutes and seconds with leading zeros
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    // Display the time
    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("time").innerHTML = timeString;
  }
  // Update time every second
  setInterval(updateTime, 1000);  
  // Initial call to display time immediately
  updateTime();
  