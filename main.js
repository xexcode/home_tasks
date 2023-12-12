//=========
// ЗАДАЧА_1 [+]
//=========

// CLEAN UP: Очистите массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
// Аргумент: Массив смешанных значений
// Пример входных и выходных значений: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

//=========
// Решение: 
//=========

function cleanUp(array) {
    let sortedArray = []
    for (element of array) {
        if (element && typeof element !== 'string') {
            sortedArray[sortedArray.length] = element
        }
    }
    return sortedArray
}

console.log(cleanUp([0, 1, false, 2, undefined, '', 3, null, 'str']) + ' <===== задача.1 cleanUp')


//=========
// ЗАДАЧА_2.1 [+]
//=========

//IS_OBJECT: Проверьте, является ли элемент именно простым объектом, а не массивом, null и т.п. Вернуть true если это объект, false в противном случае.
//Аргумент может быть объектом или не объектом
//Ожидаемый результат: ({ a: 1 }) => true, ([1, 2, 3]) => false

//=========
// Решение: 
//=========

function isObject(object) {
    let result = (Object.prototype.toString.call(object) === '[object Object]') ? 'true' : 'false';
    return result
}

console.log(isObject({}) + ' <===== задача 2.1 isObject');

// альтернативное решение на случай

//function isObject2(object) {
//
//    const errorBook = {
//        good: 'true',
//        bad: 'false'
//    }
//
//    let result = ''
//
//    if (object.constructor.name === 'Object') {
//        message = errorBook.good
//    } else if (object === null || object === undefined) {
//        message = errorBook.bad
//    } else {
//        message = errorBook.bad
//    }
//
//    return result
//}
//
//console.log(isObject2()) // ломается при пустом аргументе, переделать


//=========
// ЗАДАЧА_2.2 [+]
//=========

// KEY_VALUE: Вернуть массив пар, вложенными массивами вида [[key, value], [key, value]].
// Аргумент: Объект
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

//=========
// Решение: 
//=========

function keyValue(data) {
    let result = []

    for (let key in data) {
        result[result.length] = [key, data[key]]
    }

    return result
}

console.log(keyValue({ a: 1, b: 2, c: 3 }) + ' <===== задача 2.2 keyValue')


//=========
// ЗАДАЧА_2.3 [++]
//=========

// DELETE_OF_PROPERTY: Вернуть новый объект без указанных значений.
// Аргумент: Объект и название свойств, которые нужно удалить
// Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }

function deleteOfProperty(object, userInput) {
    const messageError = 'ключ не был найден!'

    for (key in object) {
        if (key === userInput) {
            delete object[key]
            return object
        }
    }
    return messageError
}

console.log(deleteOfProperty({ a: 1, b: 2 }, 'b'), '<===== задача 2.3 deleteOfProperty')


//=========
// ЗАДАЧА_3 [!!]
//=========

// SUBSTRING: Определите, есть ли подстрока в строке. Если подстрока есть, верните индекс вхождения в строку (индекс первого совпавшего символа, с которого нашлась вся подстрока), иначе верните -1. В строке нет знаков препинания.
// Аргумент: Строка и подстрока (подстрока может состоять из сколько угодно символов). 
// Пример входных и выходных значений: (”На столе”, “стол”) => 2










