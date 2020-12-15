export function takeLongTimeToDoSomething() {
  shitLoaderOfTimeForExercise();

  console.log("Finished our long running job");
}

const shitLoaderOfTimeForExercise = () => {
  console.log("Start our long running job...");
  const seconds = 5;
  const start = new Date().getTime();
  const delay = seconds * 1000;

  while (true) {
    if (new Date().getTime() - start > delay) {
      break;
    }
  }
};

export function takeALongTimeToAddTwoNumbers(number1: number, number2: number) {
  shitLoaderOfTimeForExercise();
  const totalSum = number1 + number2;
  console.log("finishing adding");
  return totalSum;
}
