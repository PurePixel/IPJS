const arr = [1, 42, 3, 64, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.pop();
// arr.push(10);
// arr.shift();
// arr.unshift(20);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//Хорош для break continue
// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} Внитри массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));