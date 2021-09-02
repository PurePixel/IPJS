// function copy(mainObj) {
//     let objCopy = {};
//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:3
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d:18,
//     e:20
// };

// console.log(Object.assign(numbers,add));

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //es5 copy array

newArray[1] = 'fad';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a','b'];

const newArraay = [...array];

const es9 = {
    one:1,
    two: {
        ash: 'gray',
        dust: 'clay'
    }
};

const newObj = {...es9};
console.log(newObj);