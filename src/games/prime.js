import startNewGame from '..';
import getRoundRandomNumber from '../untils';

const gameDiscription = 'Is this number prime?';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  }
  const remainer = [];
  for (let i = 2; i < number; i++) {
    remainer.push(number % i === 0);
  }
  let result = true;
  remainer.forEach((item) => {
    if (item) result = false;
  });
  return result;
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
