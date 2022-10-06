import {
  gameField,
  winnerField,
  paperBtn,
  rockBtn,
  scissorsBtn,
  resetBtn
} from './variables.js';
import {computerChoice, showScore} from './functions.js';
import '../scss/style.scss';
import '../scss/main.scss';
import '../scss/header.scss';
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;
rockBtn.addEventListener('click', (event) => {
  game(event);
});
paperBtn.addEventListener('click', (event) => {
  game(event);
});
scissorsBtn.addEventListener('click', (event) => {
  game(event);
});
resetBtn.addEventListener('click', () => {
  roundCounter = 1;
  playerScore = 0;
  computerScore = 0;
  gameField.innerHTML = '';
  winnerField.classList.add('disabled');
  showScore(playerScore, computerScore);
});
let game = (btn) => {
  let playerWin = false;
  let computerWin = false;
  // eslint-disable-next-line no-magic-numbers
  if (playerScore < 3 && computerScore < 3) {
    let player = btn.target.innerHTML;
    let computer = computerChoice();
    let result;
    switch (player) {
      case 'Rock':
        if (computer === 'Paper') {
          computerScore += 1;
          computerWin = true;
        }
        if (computer === 'Scissors') {
          playerScore += 1;
          playerWin = true;
        }
        break;
      case 'Paper':
        if (computer === 'Scissors') {
          computerScore += 1;
          computerWin = true;
        }
        if (computer === 'Rock') {
          playerScore += 1;
          playerWin = true;
        }
        break;
      case 'Scissors':
        if (computer === 'Rock') {
          computerScore += 1;
          computerWin = true;
        }
        if (computer === 'Paper') {
          playerScore += 1;
          playerWin = true;
        }
        break;
      default:
        alert('ERROR');
    }
    if (playerWin) {
      result = 'WON';
    }
    if (computerWin) {
      result = 'LOST';
    }
    if (playerWin || computerWin) {
      gameField.innerHTML = `${gameField.innerHTML}
<p>Round ${roundCounter}, ${player} vs. ${computer}. You've ${result}!</p>`;
    } else {
      gameField.innerHTML = `${gameField.innerHTML}
<p>Round ${roundCounter}, ${player} vs. ${computer}. It's a draw</p>`;
    }
    showScore(playerScore, computerScore);
    roundCounter += 1;
    // eslint-disable-next-line no-magic-numbers
    if (playerScore === 3) {
      winnerField.classList.remove('disabled');
      winnerField.innerHTML = 'YOU WIN!';
    }
    // eslint-disable-next-line no-magic-numbers
    if (computerScore === 3) {
      winnerField.classList.remove('disabled');
      winnerField.innerHTML = 'COMPUTER WIN!';
    }
  }
};
