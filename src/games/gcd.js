import startNewGame from '..';
import getRoundRandomNumber from '../utils';

const gameDiscription = 'Find the greatest common divisor of given numbers.';

const getGreaterCommonDivisor = (number1, number2) => {
  const [maxNumber, minNumber] = (number1 > number2) ? [number1, number2] : [number2, number1];

  const getDivisor = (max, min) => {
    const interiumResult = max % min;

    if (interiumResult === 0) return min;
    return getDivisor(min, interiumResult);
  };

  return getDivisor(maxNumber, minNumber);
};

const getGameData = () => {
  const number1 = getRoundRandomNumber(1, 100);
  const number2 = getRoundRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const answer = getGreaterCommonDivisor(number1, number2);

  const gameData = {
    question,
    answer,
  };
  return gameData;
};

const runGame = () => startNewGame(gameDiscription, getGameData);
export default runGame;
