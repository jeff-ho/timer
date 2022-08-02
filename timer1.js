const timer1 = function () {
  let arg = process.argv.slice(2);
  if (arg === undefined) {
    return;
  }

  let newTimesArray = arg.filter(Number).filter((num) => num >= 0);
  let timesArray = newTimesArray.map((num) => num * 1000);
  let sortedTimesArray = timesArray.sort((a, b) => a - b);

  if (sortedTimesArray === undefined) {
    return;
  }

  for (let time of sortedTimesArray) {
    setTimeout(() => {
      console.log("BEEP!!!!!");
    }, time);
  }
};

timer1();
