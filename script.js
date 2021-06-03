"use strict";

////////////// task1


let number1 = +prompt('Укажите любое число - начало дипазона');
let number2 = +prompt('Укажите еще одно число - конец дипазона');
let sum = 0;

while ( number1 <= number2) {
    sum += number1;
    number1++; 
  }
  alert(`Сумма всех чисел диапазона равняется ${sum}`);


///////////////task2
/*
let number1 = +prompt('Укажите любое число');
let number2 = +prompt('Укажите еще одно число');
let res1 = 0;
let res2 = 0;
for ( let i = 1; i <= number1; i++){
   res1 = number1 % i; 
   if (res1 == 0){
    Math.max(i);
}

for ( let j = 1; j <= number2; j++){
    res2 = number2 % j; 
    if (res2 == 0){
    Math.max(j);
}
}
if (Math.max(i) > Math.max(j)){
    alert(Math.max(i));
}
else{    alert(Math.max(j));
}}
*/
/////////////task 3
/*
let number1 = +prompt('Укажите любое число');
let res1 = 0;
for ( let i = 1; i <= number1; i++){
    res1 = number1 / i; 
    if (Number.isInteger(res1)) {
    alert(res1);
}}
*/
/////////task 4
/*
let value = +prompt('Укажите любое число');
value = String(value);
alert(value.length);
*/
/////////////////////task5
/*
let negative = 0, positive = 0, zero = 0, even = 0, odd = 0;
for (let i = 0; i <= 10; i++){
    let a = prompt('Введите любое число');
    switch(a) {
        case a == 0:
            zero++;
            break;
        case a > 0:
            positive++;
            break;
        case a < 0:
            negative++;
            break;
        case a % 2 == 0:
            even++;
            break;
        case a % 2 != 0:
            odd++;
            break;    
        default:


            break;
    }
} 
alert(`Вы ввели ${zero} нулей, ${positive} положительных, ${negative} отрицательных, ${even} четных, ${odd} нечетных чисел`);
*/
/////////task 6
/*
do {
    let number1 = +prompt('Укажите любое число');
    let number2 = +prompt('Укажите еще одно число');
    let sign = prompt('Укажите любой математический оператор: +, -, * или /');

    switch (sign) {
        case '+':
            alert(number1 + number2);
            break;
        case '-':
            alert(number1 - number2);
            break;
        case '*':
            alert(number1 * number2);
            break;
        case '/':
            alert(number1 / number2);
        default:
            break;
              }
    }
while (confirm('Хотите попробовать еще раз?'));
*/
//////////////task 7
/*

let number = +prompt("Введите любоe число");
let char = +prompt("на сколько знаков его сдинуть?");
let newRow = "";

  for (let i = 0; i <= char; i--) 
  {
      if (char = 0){var d = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        document.getElementById("demo").innerHTML = days[d.getDay()];
        </script>
        newRow = number.charAt[0];
    }
  }
  console.log(newRow);
*/

  /////////////task8

let d = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currDay = 0;
while (confirm(`Сегодня ${days[d.getDay()]}. Хотите увидеть следующий день?`))
{    d.setDate(d.getDate() + 1)
    alert(`Завтра ${d}`)

}


