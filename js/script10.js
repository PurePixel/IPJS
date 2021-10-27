const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    // hearts = document.querySelectorAll('.heart'),
    // oneHeart = document.querySelector('.heart');
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.BorderRadius = '100%';
circles[0].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was here');

div.classList.add('black');

wrapper.append(div); 
// wrapper.prepend(div);

// wrapper.appendChild(div); //old

// hearts[1].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]); //old

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); //old

div.innerHTML = "<h1>Hail to the king</h1>";

// div.textContent = 'Hell';

// div.insertAdjacentHTML('beforebegin', '<h2>Hell</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hell</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hell</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hell</h2>');