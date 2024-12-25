// Increase Counter
export const increaseCounter = (counter, setCounter) => {
  let result = counter + 1;
  setCounter(result);
}


// Decrease Counter
export const decreaseCounter = (counter, setCounter) => {
  if (counter > 0) {
    let result = counter - 1;
    setCounter(result);
  }
}