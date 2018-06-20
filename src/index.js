import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const startGame = (gameDiscription, getGameLogic) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDiscription);
  console.log('');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log('');

  const maxIter = 3;

  for (let i = 0; i < maxIter; i++) {
    const gameLogicObj = getGameLogic();
    const questionExpression = gameLogicObj.question;

    console.log(`Question: ${questionExpression}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = gameLogicObj.answer;

    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const getRandomNumber = (min, max) => {
  const result = (Math.random() * (max - min)) + min;
  return result;
};

export const getRoundRandomNumber = (a, b) => {
  const result = Math.round(getRandomNumber(a, b));
  return result;
};
