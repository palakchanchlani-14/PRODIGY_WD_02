let timer;
let seconds = 0, minutes = 0, hours = 0;
const display = document.getElementById("display");
const lapsContainer = document.getElementById("laps");


function startStopwatch() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) { seconds = 0; minutes++; }
      if (minutes === 60) { minutes = 0; hours++; }
      display.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  stopStopwatch();
  seconds = minutes = hours = 0;
  display.innerText = "00:00:00";
  lapsContainer.innerHTML = ""; // Clear laps
}

function addLap() {
  if (timer) {
    const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const lapItem = document.createElement("li");
    lapItem.innerText = lapTime;
    lapsContainer.appendChild(lapItem);
  }
}

// Event Listeners
document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
document.getElementById("lap").addEventListener("click", addLap);

document.addEventListener("keydown", (event) => {
    if (event.key === "s") startStopwatch(); // 's' se Start
    if (event.key === "p") stopStopwatch(); // 'p' se Pause
    if (event.key === "r") resetStopwatch(); // 'r' se Reset
    if (event.key === "l") addLap(); // 'l' se Lap
  });
  