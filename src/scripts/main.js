'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const Promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const Promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

Promise1.then(success);
Promise1.catch(error);

Promise2.then(success);
Promise2.catch(error);

function success() {
  const message = document.createElement('div');

  message.className = 'message';
  message.innerText = 'Promise was resolved!';
  body.append(message);
}

function error() {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.innerText = 'Promise was rejected!';
  body.append(message);
}
