# Знакомство с веб-технологиями
## Основы JavaScript
### 1. Необходимо создать html-страницу с названием 1.html, в которой подключить файл 1.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт: Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8 Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые были получены ранее. Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32 Примечания: Пользователь всегда вводит корректное число. Советую округлить значение после расчетов, так как в некоторых случаях может получиться "длинная дробь".

**1.html**
```
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Перевод температуры</title>
    <script src="1.js" defer></script>
</head>

<body>
    <h1>Введите температуру в градусах Цельсия:</h1>
    <input type="number" id="temp_celsius">
    <button onclick="convert()">Перевести</button>
</body>

</html>
```
**1.js**
```
function convert() {
    let temp_celsius = document.getElementById('temp_celsius').value;
    let temp_fahrenheit = (9 / 5) * temp_celsius + 32;
    temp_fahrenheit = Math.round(temp_fahrenheit * 10) / 10;
    alert(`Цельсий: ${temp_celsius}, Фаренгейт: ${temp_fahrenheit}`);
}
```
### 2. Необходимо создать html-страницу с названием 2.html, в которой подключить файл 2.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт: Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие, используя переданное ей имя, в консоль. Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда полученное от пользователя значение.
**2.html**
```
<head>
    <title>2.html</title>
    <script src="2.js"></script>
</head>

<body>
    <script>
        let name = prompt("Введите имя:");
        greeting(name);
    </script>
</body>

</html>
```
**1.js**
```
function greeting(name) {
    console.log("Привет, " + name + "!");
}
```
