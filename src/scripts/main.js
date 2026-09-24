'use strict';

const logoElement = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logoElement.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then((messageText) => {
    const messageElement = document.createElement('div');

    messageElement.className = 'message';
    messageElement.textContent = messageText;
    document.body.append(messageElement);
  })
  .catch();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then().catch((error) => {
  const messageElement = document.createElement('div');

  messageElement.className = 'message error-message';
  messageElement.textContent = error.message;
  document.body.append(messageElement);
});
