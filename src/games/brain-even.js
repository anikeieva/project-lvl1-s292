export const gameCondition = 'Answer "yes" if number even otherwise answer "no".';

export const getRandomNumber = (min, max) => {
  const result = (Math.random() * (max - min)) + min;
  return result;
};

export const randomNumber = (a, b) => {
  const result = Math.round(getRandomNumber(a, b));
  return result;
};

const isEven = (n) => {
  let result;
  if (n % 2 === 0) {
    result = true;
  }
  return result;
};

export const getRightAnswerEven = (n) => {
  const result = isEven(n) ? 'yes' : 'no';
  return result;
};

export const getEvenLogical = () => {
  const expressionValue = randomNumber(1, 100);
  const calcValue = getRightAnswerEven(expressionValue);
  const resultObj = {
    game: 'even',
    expression: expressionValue,
    calc: calcValue,
  };
  return resultObj;
};
