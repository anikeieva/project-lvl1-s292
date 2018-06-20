import { getUserName } from '..';

const startWelcomeGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
};
export default startWelcomeGame;
