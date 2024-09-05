'use strict';

// №1

let name;
let admin;
name = 'Джон';
admin = name;
alert(admin);

// №2

let city = prompt('Введите навзание города');
let year = prompt('Введите год образования');
let population = prompt('Введите количество населения');
let agecity = 2024 - year;
alert(`Городу ${city} исполнилось ${agecity} лет с момента его образования. Население - ${population} человек"`);

// №3

let r = prompt('Введите радиус круга');
let S = Math.PI * (r ** 2);
alert(`Площадь круга с радиусом ${r} равна ${S}`);

// #4

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
alert(`Сумма = ${num1 + num2}, Разность = ${num1-num2}, Частное = ${num1 / num2}, Произведение = ${num1 * num2}`);
