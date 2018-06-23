const getRoundRandomNumber = (min, max) => {
  const result = Math.round((Math.random() * (max - min)) + min);
  return result;
};
export default getRoundRandomNumber;
