// function sumRange(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//       sum += i;
//     }
//     return sum;
//   }

// function findGCD(a, b) {
//     let gcd = 1;
//     let divisor = Math.min(a, b);
    
//     while (divisor > 1) {
//       if (a % divisor === 0 && b % divisor === 0) {
//         gcd = divisor;
//         break;
//       }
//       divisor--;
//     }
    
//     return gcd;
//   }

// function findDivisors(num) {
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//         console.log(i);
//       }
//     }
//   }

// function countDigits(num) {
//     let count = 0;
    
//     while (num >= 1) {
//       count++;
//       num = Math.floor(num / 10);
//     }
    
//     return count;
//   }

// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < 10; i++) {

//   if (number > 0) {
//     positiveCount++;
//   } else if (number < 0) {
//     negativeCount++;
//   } else {
//     zeroCount++;
//   }

//   if (number % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }

// do {
//     const number1 = parseFloat(prompt("Введіть перше число:"));
//     const number2 = parseFloat(prompt("Введіть друге число:"));
//     const operator = prompt("Введіть знак операції (+, -, *, /):");
  
//     let result;
  
//     switch (operator) {
//       case "+":
//         result = number1 + number2;
//         break;
//       case "-":
//         result = number1 - number2;
//         break;
//       case "*":
//         result = number1 * number2;
//         break;
//       case "/":
//         result = number1 / number2;
//         break;
//       default:
//         console.log("Невірний знак операції");
//         continue;
//     }
  
//     console.log("Результат:", result);
  
//     const choice = prompt("Бажаєте розв'язати ще один приклад? (Так або Ні)").toLowerCase();
    
//     if (choice !== "так") {
//       break;
//     }
//   } while (true);
  

// const number = prompt("Введіть число:");
// const shift = parseInt(prompt("На скільки цифр його змістити:"));
// const numberString = number.toString();
// const shiftedNumberString = numberString.slice(shift) + numberString.slice(0, shift);
// const shiftedNumber = parseInt(shiftedNumberString);
// console.log("Результат:", shiftedNumber);
