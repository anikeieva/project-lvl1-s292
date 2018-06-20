import { startGame, getRoundRandomNumber } from '..';

const gameDiscription = 'Find the greatest common divisor of given numbers.';

const getGreaterCommonDivisor = (number1, number2) => {
  const maxNumber = (number1 > number2) ? number1 : number2;
  const minNumber = (maxNumber === number1) ? number2 : number1;

  const getDivisor = (max, min) => {
    const interiumResult = max % min;

    if (interiumResult === 0) return min;
    return getDivisor(min, interiumResult);
  };

  return getDivisor(maxNumber, minNumber);
};

const getGameLogic = () => {
  const number1 = getRoundRandomNumber(1, 100);
  const number2 = getRoundRandomNumber(1, 100);

  const questionExpression = `${number1} ${number2}`;
  const rightAnswer = getGreaterCommonDivisor(number1, number2);

  const gameLogicObj = {
    game: 'calc',
    question: questionExpression,
    answer: rightAnswer,
  };
  return gameLogicObj;
};

const runGame = () => startGame(gameDiscription, getGameLogic);
export default runGame;
