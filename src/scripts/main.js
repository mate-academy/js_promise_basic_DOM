'use strict';

const logo = document.querySelector('.logo');

function complete(result) {
    const div = document.createElement('div');

    div.innerHTML = `Promise is was created!`;
    div.className = 'message';
    document.body.appendChild(div);
}

function error(data) {
    const div = document.createElement('div');

    div.innerHTML = `Promise was reject!`;
    div.className = 'error-message';
    document.body.appendChild(div);
}

const promise1 = new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
        resolve();
    });
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(error);
    }, 3000);
});

promise1
    .then(complete)
    .catch(error);

promise2
    .then(complete)
    .catch(error);