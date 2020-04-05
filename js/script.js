'use strict';
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const getRandomNum = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const gameRandom = function() {
  const randomNum = getRandomNum(1, 100);
  console.log(randomNum);
  return function checkNumber() {
    let userNumber = prompt('Угадай число от 1 до 100');
        if(isNum(userNumber)) {
        let num = +userNumber;
        if(num > randomNum) {
          alert('число меньше');
          return checkNumber();
        } else if (num < randomNum) {
          alert('число больше');
          return checkNumber();
        } else {
          if (confirm ('вы угадали хотите ещё!')) {
          gameRandom ()();
          } else {
          alert('пока!');
        } 
      }
    } else if (userNumber === null) {
          alert('вы звершили игру');
    } else {
    return checkNumber();
  }
 };
};
gameRandom()();