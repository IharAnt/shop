import { toUpper, memoize, roundGoldByPrecision } from "./plugin.js";
import { Store } from './store.js'

export function printName(name) {
    console.log(name)
}

export function printSurname(surname) {
    console.log(surname)
}

// Этот вызов чтобы получить пропатченную функцию
export const upperedName = toUpper(printName);
export const upperdSurname = toUpper(printSurname)

// Этот вызов должен вывести в консоль 'FRONTEND GUILD'
upperedName('frontend guild')

// Этот вызов должен вывести в консоль 'WARGAMING'
upperdSurname('wargaming')


// ----------------------------------- Мемоизация ------------------------------------------------------ //

// мемоизируем функцию
const printNameMemorized = memoize(printName);

printNameMemorized("Product 1")
printNameMemorized("Product 2")
printNameMemorized("Product 1")
printNameMemorized("Product 1") // этот вызов не должен инициировать повторное вычисление
printNameMemorized("Product 2")


// ------------------------------- Карринг результаты  ---------------------------------------------------------- //

const twoPointPrecision = roundGoldByPrecision(2)
const fourPointPrecision = roundGoldByPrecision(4)

console.log(twoPointPrecision(12.1231233))
console.log(twoPointPrecision(22.1291233))

console.log(fourPointPrecision(12.1231233))
console.log(fourPointPrecision(22.1291233))

// -------------- Псевдокласс ----------- //

const store = new Store({ });

console.log(store.getStartTime()) // "2:44:53 AM"

forge.options = {} // нужно исключить возможность переопределять options

console.log(store.getStartTime()) // сечас вывод такой - "Invalid Date" - должно быть время