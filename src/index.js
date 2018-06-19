import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const startGame = (condition, object) => {
  const prepareGame = () => {
    console.log('Welcome to the Brain Games!');
    let maxIter = 3;

    if (condition) {
      console.log(condition);
    } else {
      maxIter = 0;
    }

    console.log('');
    const userName = getUserName();
    console.log(`Hello, ${userName}!`);

    if (condition) {
      console.log('');
    }

    for (let i = 0; i < maxIter; i++) {
      const logicalObj = object();
      const exp = logicalObj.expression;

      console.log(`Question: ${exp}`);
      const answer = readlineSync.question('Your answer: ');
      const rightAnswer = logicalObj.calc;

      if (answer === rightAnswer.toString()) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (condition) {
      console.log(`Congratulations, ${userName}!`);
    }
  };
  return prepareGame();
};

export default startGame;
