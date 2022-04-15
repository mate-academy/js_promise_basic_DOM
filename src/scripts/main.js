'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const createMessage = (type, text) => {
  const messageSay = document.createElement('div');

  messageSay.className = `${type}`;
  // messageSay.setAttribute('data-qa', 'notification');
  messageSay.innerText = `${text}`;

  body.append(messageSay);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(resolve => createMessage(`message`, resolve));
promise2.catch(resolve => createMessage(`error-message`, resolve));
