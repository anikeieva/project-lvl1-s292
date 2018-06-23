import startNewGame from '..';
import getRoundRandomNumber from '../utils';

const gameDiscription = 'What number is missing in this progression?';

const getArithmeticProgression = (length, maxStep, minFirstNumber, maxFirstNumber) => {
  const step = getRoundRandomNumber(1, maxStep);
  const firstNumber = getRoundRandomNumber(minFirstNumber, maxFirstNumber);
  const progression = [];
  progression.push(firstNumber);

  for (let i = 1; i < length; i++) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const getQuestion = (progression, hiddenIndex) => {
  const question = [];

  for (let i = 0; i < progression.length; i++) {
    if (i === hiddenIndex) {
      question.push('..');
    } else {
      question.push(progression[i]);
    }
  }
  return question.join(' ');
};

const getGameData = () => {
  const progresLength = 10;
  const maxStep = 10;
  const minFirstNum = 1;
  const maxFirstNum = 100;
  const progression = getArithmeticProgression(progresLength, maxStep, minFirstNum, maxFirstNum);
  const hiddenIndex = getRoundRandomNumber(0, progression.length - 1);
  const answer = progression[hiddenIndex];
  const question = getQuestion(progression, hiddenIndex);

  const gameData = {
    question,
    answer,
  };
  return gameData;
};

const runGame = () => startNewGame(gameDiscription, getGameData);
export default runGame;
