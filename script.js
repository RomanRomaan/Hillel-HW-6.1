// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

const str = prompt("Enter string:");
const charsStr = prompt("Enter characters to remove:");
const chars = charsStr.split('');

function remove_chars(string, chars) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (chars.includes(string[i])) {
            continue;
        }
        else { result += string[i] }
    }
    alert(result)
}


remove_chars(str, chars)

