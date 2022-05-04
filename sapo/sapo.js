function decide() {
  let option = Math.floor(Math.random() * 2);
  let result = document.getElementById(`option-${option}`).value;
  document.getElementById('result').innerHTML = result;
}
