import startNewGame from '..';
import getRoundRandomNumber from '../untils';

const gameDiscription = 'Is this number prime?';

const isPrime = (n) => {
  if (n === 2 || n === 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let w = 2;
  for (let i = 5; i * i <= n; i += w) {
    if (n % i === 0) {
      return false;
    }
    w = 6 - w;
  }
  return n > 1;
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
