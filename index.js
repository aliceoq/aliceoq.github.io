const DEFAULT_FOCUS = 1500;
const DEFAULT_BREAK = 300;

var count = DEFAULT_FOCUS;
var isFocus = true;
var isCounting = false;
var timer;

function intToHourFormat(number) {
  let min = parseInt(number / 60);
  let seconds = (number - parseInt(number / 60) * 60) % 60;

  min < 10 ? (min = '0' + min) : min;
  seconds < 10 ? (seconds = '0' + seconds) : seconds;

  return min + ':' + seconds;
}

function counter() {
  count -= 1;
  document.getElementById('timer').innerHTML = intToHourFormat(count);

  if (count === 0) {
    pause();
    isFocus = !isFocus;
    isFocus ? (count = DEFAULT_FOCUS) : (count = DEFAULT_BREAK);
  }
}

function start() {
  if (isCounting) return;

  isCounting = true;
  count -= 1;
  document.getElementById('timer').innerHTML = intToHourFormat(count);

  if (count > 0) timer = window.setInterval(counter, 1000);
}

function reset() {
  pause();
  isFocus ? (count = DEFAULT_FOCUS) : (count = DEFAULT_BREAK);
  document.getElementById('timer').innerHTML = intToHourFormat(count);
}

function pause() {
  window.clearInterval(timer);
  isCounting = false;
}

document.getElementById('timer').innerHTML = intToHourFormat(count);
