const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let startTime;
let savedSeconds = 0;
let stopwatch;

start.onclick = () => {
  start.disabled = true;
  startTime = Date.now();
  stopwatch = setInterval(displayTime, 500);
}

stop.onclick = () => {
  start.disabled = false;
  if (startTime) {
    savedSeconds += getSeconds();
    clearInterval(stopwatch);
  }
}

reset.onclick = () => {
  startTime = false;
  savedSeconds = 0;
  clock.textContent = '00:00:00';
  start.disabled = false;
  clearInterval(stopwatch);
}

function getSeconds() {
  return Math.floor((Date.now() - startTime) / 1000);
}

function displayTime() {
  let seconds = savedSeconds + getSeconds();

  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
  seconds = seconds % 3600;

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  seconds = String(seconds % 60).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
