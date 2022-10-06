'use strict';

const promise1 = new Promise(resolver1);

function resolver1(complete, error) {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        complete();
    })
}

const promise2 = new Promise(resolver2);

function resolver2(complete, error) {
    setTimeout(error, 3000);
}

const page = document.querySelector('body');

promise1.then(() => {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerText = 'Promise was resolved!';

    page.append(message);
})

promise2.catch(() => {
    const message = document.createElement('div');
    message.classList.add('error-message');
    message.innerText = 'Promise was rejected!';

    page.append(message);
})