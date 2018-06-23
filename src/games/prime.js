import startNewGame from '..';
import getRoundRandomNumber from '../utils';

const gameDiscription = 'Is this number prime?';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  
  const sqrtNumber = Math.sqrt(number);

  for (let i = 2; i <= sqrtNumber; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const getRightAnswer = n => (isPrime(n) ? 'yes' : 'no');

const getGameData = () => {
  const question = getRoundRandomNumber(1, 100);
  const answer = getRightAnswer(question);

  const gameData = {
    question,
    answer,
  };
  return gameData;
};

const runGame = () => startNewGame(gameDiscription, getGameData);
export default runGame;
