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

push.onclick = () => {

  let attr = []
  out.forEach((element) => {
    console.log(element.dataset.num)
  })
  console.log(attr)
}