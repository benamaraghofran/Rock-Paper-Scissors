 let wins = 0, losses = 0, draws = 0;

    const playerHand = document.getElementById('playerHand');
    const computerHand = document.getElementById('computerHand');
    const resultMessage = document.getElementById('resultMessage');

    const handImages = {
      rock: {
        left: 'rock-left.png',
        right: 'rock-right.png'
      },
      paper: {
        left: 'paper-left.png',
        right: 'paper-right.png'
      },
      scissors: {
        left: 'scissors-left.png',
        right: 'scissors-right.png'
      }
    };

function play(playerChoice) {
  playerHand.classList.remove('shake');
  computerHand.classList.remove('shake');

  void playerHand.offsetWidth;
  void computerHand.offsetWidth;

  playerHand.classList.add('shake');
  computerHand.classList.add('shake');

  setTimeout(() => {

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];


    playerHand.src = handImages[playerChoice].left;
    computerHand.src = handImages[computerChoice].right;

    let result = '';
    if (playerChoice === computerChoice) {
      result = "It's a draw! 🤝";
      draws++;
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "Congrats, You Won! 🎉";
      wins++;
    } else {
      result = "Oops! You Lost! 😢";
      losses++;
    }

    resultMessage.textContent = result;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('draws').textContent = draws;

    playerHand.classList.remove('shake');
    computerHand.classList.remove('shake');

  }, 800); 
}

    function resetGame() {
      resultMessage.textContent = 'Make your move!';
      playerHand.src = handImages['rock'].left;
      computerHand.src = handImages['rock'].right;
    }
