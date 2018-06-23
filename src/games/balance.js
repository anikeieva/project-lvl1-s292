import startNewGame from '..';
import getRoundRandomNumber from '../utils';

const balanceNumber = (number) => {
  const numberNumeralsStr = number.toString().split('');
  const numberNumerals = numberNumeralsStr.map(item => parseInt(item, 10));

  const balance = (numerals) => {
    const min = Math.min(...numerals);
    const max = Math.max(...numerals);
    let indexMin;
    let indexMax;

    for (let i = 0; i < numerals.length; i++) {
      if (numerals[i] === min) {
        indexMin = i;
      } else if (numerals[i] === max) {
        indexMax = i;
      }
    }

    if (min === max || min + 1 === max || min === max + 1) {
      return numerals;
    }
    const balancedNumerals = [];

    for (let i = 0; i < numerals.length; i++) {
      if (i === indexMin) {
        balancedNumerals.push(numerals[i] + 1);
      } else if (i === indexMax) {
        balancedNumerals.push(numerals[i] - 1);
      } else {
        balancedNumerals.push(numerals[i]);
      }
    }

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
