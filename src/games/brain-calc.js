import { getRandomNumber, randomNumber } from './brain-even';

export const gameCondition = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.round(getRandomNumber(0, operators.length - 1));
  const operator = operators[index];
  return operator;
};

export const getCalcLogical = () => {
  const num1 = randomNumber(1, 30);
  const num2 = randomNumber(1, 30);
  const operator = getRandomOperator();

  const getCalc = () => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };

  const calcValue = getCalc();
  const expressionValue = `${num1} ${operator} ${num2}`;
  const resultObj = {
    game: 'calc',
    expression: expressionValue,
    calc: calcValue,
  };
  return resultObj;
};
