import startNewGame from '..';
import getRoundRandomNumber from '../utils';

const gameDiscription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = n => n % 2 === 0;

const getRightAnswer = n => (isEven(n) ? 'yes' : 'no');

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
