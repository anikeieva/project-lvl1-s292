import startNewGame from '..';
import getRoundRandomNumber from '../untils';

const balanceNumber = (number) => {
  const numberNumeralsStr = number.toString().split('');
  const numberNumerals = numberNumeralsStr.map(item => parseInt(item, 10));

  const balance = (numerals) => {
    const min = Math.min(...numerals);
    const max = Math.max(...numerals);
    let indexMin;
    let indexMax;

    numerals.forEach((item, index) => {
      if (item === max) {
        indexMin = index;
      } else if (item === min) {
        indexMax = index;
      }
    });

    if (min === max || min + 1 === max || min === max + 1) {
      return numerals;
    }
    const balancedNumerals = numerals.slice();
    balancedNumerals[indexMax] = max - 1;
    balancedNumerals[indexMin] = min + 1;

    return balance(balancedNumerals);
  };
  const sortInRise = (n) => {
    const compareNumeric = (a, b) => a - b;
    const sortNumber = n.sort(compareNumeric);
    return sortNumber;
  };

  return sortInRise(balance(numberNumerals)).join('');
};

const gameDiscription = 'Balance the given number.';

const getGameData = () => {
  const question = getRoundRandomNumber(1, 1000);
  const answer = balanceNumber(question);

  const gameData = {
    question,
    answer,
  };
  return gameData;
};

const runGame = () => startNewGame(gameDiscription, getGameData);
export default runGame;
