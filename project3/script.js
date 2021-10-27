// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// touches
// targetTouches
// changedTouches

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });
    
    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();

    //     console.log('move');
    // });
    
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end');
    // });
    
    // box.addEventListener('touchenter', (e) => {
    //     e.preventDefault();

    //     console.log('enter');
    // });
    
    // box.addEventListener('touchleave', (e) => {
    //     e.preventDefault();

    //     console.log('leave');
    // });
    
    // box.addEventListener('touchcancel', (e) => {
    //     e.preventDefault();

    //     console.log('cancel');
    // });
    
    // box.addEventListener('touches', (e) => {
    //     e.preventDefault();

    //     console.log('touches');
    // });

});