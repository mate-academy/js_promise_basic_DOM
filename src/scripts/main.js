'use strict';

// write your code here

const promise1 = new Promise((resolve, reject) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        resolve('Logo clicked!');
    });
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promise was rejected!'));
    }, 3000);
});

promise1
    .then(() => {
        const message = document.createElement('div');

        message.className = 'message';
        message.innerText = 'Promise was resolved!';
        document.body.appendChild(message);
    })
    .catch((error) => {
        const message = document.createElement('div');

        message.className = 'error-message';
        message.innerText = error.message;
        message.innerText = 'Promise was rejected!'

        document.body.appendChild(message);
    });

promise2
    .then(() => {
        const message = document.createElement('div');

        message.className = 'message';
        message.innerText = 'Promise was resolved!';
        document.body.appendChild(message);
    })
    .catch((error) => {
        const message = document.createElement('div');

        message.className = 'message error-message';
        message.innerText = error.message;
        message.innerText = 'Promise was rejected!'

        document.body.appendChild(message);
    });
