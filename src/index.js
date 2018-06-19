import readlineSync from 'readline-sync';

let userName;

export const greeting = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const getEvenOrNot = () => {
  const getRandomNumber = (min, max) => {
    const result = (Math.random() * (max - min)) + min;
    return result;
  };
  let counter = 0;
  const maxIter = 3;

  console.log('');

  while (counter !== maxIter) {
    const randomNumber = Math.round(getRandomNumber(1, 100));

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    const getRightAnswer = () => {
      if (randomNumber % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    const rightAnswer = getRightAnswer();

    if (answer === rightAnswer) {
      console.log('Correct!');
      counter++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (counter === maxIter) {
    console.log(`Congratulations, ${userName}!`);
  }
};
