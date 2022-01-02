const push = document.querySelector('.push');
const menu = document.querySelector('.menu');
const input = document.querySelector('.input');
const out = document.querySelectorAll('.out');

// let a = input.value;

// console.log(a.split(','))


// let arr = [11, 22, 33, 44, 55, 66, 78, 98];

// // push.onclick = () => {
// //   out[0].innerHTML = arr.join(' , ')
// // }

// arr.forEach(function (element, index) {
//   console.log(element);
//   console.log(index);
//   console.log('__')
// })


// ----------------------------task 1

// let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]

// push.onclick = () => {
//   let sumArray = [];
//   a1.forEach((element) => {
//     sumArray.push(element * 2)
//   })
//   console.log(sumArray)
// }
// -----------------------------------task2

// push.onclick = () => {
//   let array = [];
//   a1.forEach((element) => {
//     array.push(element / 2)
//   })
//   console.log(array)
// }

// -------------------------------task 3
const a3 = [2, "hello", 3, "hi", 4, "Mazai", 5, 6, 7, 8, 'gogog', 'tank', 'i']

// push.onclick = () => {
//   let number = []
//   a3.forEach((element) => {
//     if (typeof element == 'number')
//       number.push(element);
//   })
//   console.log(number)
// }

// -------------------------------task 4

// push.onclick = () => {

//   let attr = []
//   out.forEach((element) => {
//     attr.push(+element.dataset.num)
//   })
//   console.log(attr)
// }

// --------------------------task 5
// let dataArray = []
// out.forEach(function (element) {
//   element.addEventListener('click', () => {
//     dataArray.push(element.dataset.num)
//     console.log(dataArray)
//     return dataArray
//   })
// })
// push.onclick = () => {
//   console.log(dataArray)
// }

// -------------------------------task 6

// push.onclick = function () {
//   let array = input.value;
//   out[0].innerHTML = array.split('');
// }

// -----------------------------task 7

// push.onclick = function () {
//   let array = input.value;
//   text = array.split(' ');
//   out[1].innerHTML = text;
// }

// -----------------------------task 8

// let a8 = [1, 2, 66, 77, 15];

// push.onclick = function () {
//   out[3].innerHTML = a8.join(', ');
// }


// -----------------------------task9

let a9 = [
  ['hi', 'mahai'],
  ['test', 'best']
]
push.onclick = function () {
  let arrText = []
  a9.forEach(function (element) {
    arrText.push(element.join(', '));
  })
  out[2].innerHTML = arrText.join(', ');
}