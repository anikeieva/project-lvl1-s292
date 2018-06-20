import { startGame, getRoundRandomNumber } from '..';

const gameDiscription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (n) => {
  const result = n % 2 === 0;
  return result;
};

const getRightAnswer = (n) => {
  const result = isEven(n) ? 'yes' : 'no';
  return result;
};

const getGameLogic = () => {
  const questionExpression = getRoundRandomNumber(1, 100);
  const rightAnswer = getRightAnswer(questionExpression);
  const gameLogicObj = {
    game: 'even',
    question: questionExpression,
    answer: rightAnswer,
  };
  return gameLogicObj;
};

const runGame = () => startGame(gameDiscription, getGameLogic);
export default runGame;
