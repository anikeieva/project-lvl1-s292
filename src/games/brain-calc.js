import { startGame, getRoundRandomNumber } from '..';

const gameDiscription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRoundRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  return operator;
};

const getGameLogic = () => {
  const operand1 = getRoundRandomNumber(1, 30);
  const operand2 = getRoundRandomNumber(1, 30);
  const operator = getRandomOperator();

  const getCalc = () => {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      default:
        return operand1 * operand2;
    }
  };

  const rightAnswer = getCalc();
  const questionExpression = `${operand1} ${operator} ${operand2}`;
  const gameLogicObj = {
    game: 'calc',
    question: questionExpression,
    answer: rightAnswer,
  };
  return gameLogicObj;
};

const runGame = () => startGame(gameDiscription, getGameLogic);
export default runGame;
