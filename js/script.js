'use strict';
//  рекурсия
// function pow(x, y) {
//   if(y == 1) return x;
//   return pow(x, y - 1) * x
// }
// const a = pow(2, 3);
// console.log(a);
// .........................
// счетчик случайных чисел
const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const getRandomNum = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// запуск функции
// debugger;
const gameRandom = function() {
  const randomNum = getRandomNum(1, 100);
  console.log(randomNum);
  return function checkNumber() {
    const userNumber = prompt('угадайте число');
    if(isNum(userNumber)) {
      let repeat = false;
        const num = +userNumber;
        if(num > randomNum) {
          alert('число меньше');
          return checkNumber();
        }
        if (num < randomNum) {
          alert('число больше');
          return checkNumber();
        }
        if(num == randomNum) {
        repeat = confirm ('вы угадали');
          return gameRandom();
        } 
      if (userNumber !== null){
      alert('введите число1');
        return gameRandom();
    }
  }
    const repeatNum = prompt('введите число');
    if (isNum(repeatNum)) {
      let repeatNum = false;
      return checkNumber();
    }
  // alert('пока друг');
  }();
};
const game = gameRandom();