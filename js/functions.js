let random = () => {
  // eslint-disable-next-line no-magic-numbers
  let number = 1 + Math.random() * (3 - 1);
  return Math.round(number);
};

export let computerChoice = () => {
  let compuerNum = random();
  let computerChoice = '';
  switch (compuerNum) {
    // eslint-disable-next-line no-magic-numbers
    case 1:
      computerChoice = 'Rock';
      break;
    // eslint-disable-next-line no-magic-numbers
    case 2:
      computerChoice = 'Paper';
      break;
    // eslint-disable-next-line no-magic-numbers
    case 3:
      computerChoice = 'Scissors';
      break;
    default:
      alert('ERROR');
  }
  return computerChoice;
};
export let showScore = (player, computer) => {
  const playerScore = document.querySelector('.player-wins');
  const computerScore = document.querySelector('.computer-wins');
  playerScore.innerHTML = player;
  computerScore.innerHTML = computer;
};
