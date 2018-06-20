import readlineSync from 'readline-sync';

export const startGame = (gameDiscription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDiscription);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  for (let i = 0; i < 3; i++) {
    const gameData = getGameData();
    const questionExpression = gameData.question;

    console.log(`Question: ${questionExpression}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = gameData.answer;

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
export default startGame;
