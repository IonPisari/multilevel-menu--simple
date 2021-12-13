const getUserChoice = userInput => {
      userInput = userInput.toLowerCase();
      if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
        console.log('Error! Use only rock, paper, or scissors!');
    };
  }
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
      if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lost!';
      } else {
        return 'You won!';
      }    
    }
      if (userChoice === 'paper') {
          if (computerChoice === 'scissors') {
          return 'You lost!';
          } else {
          return 'You won!';
          }
      }
      if (userChoice === 'scissors') {
          if (computerChoice === 'rock') {
          return 'You lost!';
          } else {
          return 'You won!';
          }
      }
    } 
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    const res = determineWinner(userChoice, computerChoice);
    console.log('I choose you: ' + userChoice);
    console.log('The Computer threw: ' + computerChoice);
    console.log(res);
  };
  playGame();