import startNewGame from '..';
import getRoundRandomNumber from '../untils';

const gameDiscription = 'What number is missing in this progression?';

const getArithmeticProgression = (length, maxStep, minFirstNumber, maxFirstNumber) => {
  const step = getRoundRandomNumber(1, maxStep);
  const firstNumber = getRoundRandomNumber(1, maxFirstNumber);
  const progression = [];
  progression.push(firstNumber);

  for (let i = 1; i < length; i++) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const getHiddenIndex = progression => getRoundRandomNumber(0, progression.length - 1);
const getRightAnswer = (progression, hiddenIndex) => progression[hiddenIndex];
const getQuestion = (progression, hiddenIndex) => {
  const question = progression.slice();
  question[hiddenIndex] = '..';
  return question.join(' ');
};

const getGameData = () => {
  const progression = getArithmeticProgression(10, 10, 1, 100);
  const hiddenIndex = getHiddenIndex(progression);
  const answer = getRightAnswer(progression, hiddenIndex);
  const question = getQuestion(progression, hiddenIndex);

  const gameData = {
    question,
    answer,
  };
  return gameData;
};

const runGame = () => startNewGame(gameDiscription, getGameData);
export default runGame;
