if (4 == 9) {
    console.log('Yup');
} else {
    console.log('Nope');
}

const num = 50;

if (num < 49) {
    console.log('Мало');
} else if (num > 51) {
    console.log('Много');
} else {
    console.log('Норм');
}

const ifItsTrue = (num === 50) ? console.log('Yup') : console.log('Nope');

switch (num) {
    case 49:
        console.log('Nope');
        break;
    case 51:
        console.log('Too much');
        break;
    case 50:
        console.log(`That's it`);
        break;
    default:
        console.log('Not this time');
}