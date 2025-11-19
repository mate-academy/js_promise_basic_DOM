'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.querySelector('body').append(message);
  })
  .catch(() => {
    const anotherMessage = document.createElement('div');

    anotherMessage.classList.add('message error-message');
    anotherMessage.textContent = 'Promise was rejected!';
    document.querySelector('body').append(anotherMessage);
  });

promise2
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.querySelector('body').append(message);
  })
  .catch(() => {
    const anotherMessage = document.createElement('div');

    anotherMessage.classList.add('message error-message');
    anotherMessage.textContent = 'Promise was rejected!';
    document.querySelector('body').append(anotherMessage);
  });
