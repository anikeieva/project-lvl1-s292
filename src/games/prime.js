import startNewGame from '..';
import getRoundRandomNumber from '../untils';

const gameDiscription = 'Is this number prime?';

const isPrime = (number) => {
  if (number < 2 || number % 2 === 0) {
    if (number === 2) {
      return true;
    }
    return false;
  }
  for (let i = 3; i < number; i + 2) {
    if (number % i === 0) {
      return false;
    }
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
