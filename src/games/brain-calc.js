import startNewGame from '..';
import getRoundRandomNumber from '../untils';

const gameDiscription = 'What is the result of the expression?';

const getRandomOperator = (operators) => {
  const index = getRoundRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  return operator;
};

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const operand1 = getRoundRandomNumber(1, 30);
  const operand2 = getRoundRandomNumber(1, 30);
  const operator = getRandomOperator(operators);

  const getAnswer = (number1, number2, sign) => {
    switch (sign) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      default:
        return number1 * number2;
    }
  };

  const answer = getAnswer(operand1, operand2, operator);
  const question = `${operand1} ${operator} ${operand2}`;
  const gameData = {
    question,
    answer,
  };
  return gameData;
};

const runGame = () => startNewGame(gameDiscription, getGameData);
export default runGame;
