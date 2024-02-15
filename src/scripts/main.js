'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout((error) => {
    reject(error);
  }, 3000);
});

promise1.then(() => {
  const newMessage = document.createElement('div');

  newMessage.className = 'message';
  newMessage.textContent = 'Promise was resolved!';

  document.body.append(newMessage);
});

promise2.catch(() => {
  const newMessage = document.createElement('div');

  newMessage.className = 'message error-message';
  newMessage.textContent = 'Promise was rejected!';

  document.body.append(newMessage);
});
