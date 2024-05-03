let index = prompt()
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
let arr_1 = arr.splice(index, 1)
if (index >= 5) {
    alert('Такого элемента нету!!!')
} else {
    console.log(arr);
}
let arr_2 = [1, 2, 4, 5, 6, false, 'hello', 24, 'world', undefined, 'error', 22]
const arr_3 = arr_2.filter((item) => !isNaN(item)).length;
if (arr_3 > 5) {
    console.log('good')
}