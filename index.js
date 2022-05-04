function select(number) {
  if (number === 1) {
    document.getElementsByClassName('main-container')[0].style.display = 'none';
    document.getElementsByClassName('pomodoro-container')[0].style.display =
      'flex';
    document.getElementsByClassName('sapo-container')[0].style.display = 'none';
  } else if (number === 2) {
    document.getElementsByClassName('main-container')[0].style.display = 'none';
    document.getElementsByClassName('pomodoro-container')[0].style.display =
      'none';
    document.getElementsByClassName('sapo-container')[0].style.display = 'flex';
  } else {
    document.getElementsByClassName('main-container')[0].style.display = 'flex';
    document.getElementsByClassName('pomodoro-container')[0].style.display =
      'none';
    document.getElementsByClassName('sapo-container')[0].style.display = 'none';
  }
}
