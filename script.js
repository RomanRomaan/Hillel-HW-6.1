// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.


function remove_chars(string, chars) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (chars.includes(string[i])) {
            continue;
        }
        else { result += string[i] }
    }
    return result
}
console.log(remove_chars('hello world', ['l', 'd']))

