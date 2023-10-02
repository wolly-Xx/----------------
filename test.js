// объявляем функцию

function sayHello() {
    const username = prompt("Введите имя");

    if (username === 'Admin') {
        alert("Добро пожаловать, Админ!")
    }

    else if (username === 'qwerty') {
        alert("Выпопали в секретную часть сайта")
    }

    else if (username === null) {
        alert("Привет, незнакомый пользователь")
    }

    else {
        alert("Привет " + username + "!");
    }
}

//function sumNums(a, b) {
    //console.log(a + '+' + b + '=' + (a + b))
//}

// Вызов функции
//sumNums(12, 78)
//sumNums(9, -3)
//sumNums(0, 111)

function calc() {
    alert("Добро пожаловать в калькулятор")

    choice = prompt(`Введите действия:
    1 - сумма
    2 - вычитание
    3 - умножение
    4 - деление
    5 - деление без остатка`)

    if (parseInt(choice) > 5 || parseInt(choice) < 1)  {
        alert(`Неверный ввод действия`)
        return
    }

    a = prompt("Введите первое число")
    b = prompt("Введите второе число")

    a = parseFloat(a)
    b = parseFloat(b)

    if (choice === '1') {
        alert(`${a} + ${b} = ${a + b}`)
    }

    else if (choice === '2') {
        alert(`${a} - ${b} = ${a - b}`)
    }

    else if (choice === '3') {
        alert(`${a} * ${b} = ${a * b}`)
    }
    else if (choice === '4') {
        alert(`${a} / ${b} = ${a / b}`)
    }

    else if (choice === '5') {
        floordiv(a, b)
    }

    else {
        alert(`Неверный ввод действия`)
    }

}

//Вызов функции
calc()






function floordiv(a, b) {
   const remainder = a % b;

   alert((a - remainder) / b)
}

floordiv(70, 6)

const firstName = 'Julia';
const job = 'программист';
const birthYear = 2000;

//Индексация
console.log(firstName[0])
//Длина строки
console.log(firstName.length)

let lastSymbol = firstName[firstName.length - 1]

console.log(lastSymbol)
