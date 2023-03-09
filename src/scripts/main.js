'use strict';

function insertMessage(messageClass, message) {
  document.body.insertAdjacentHTML('beforeend',
    `<div class="${messageClass}"> ${message} </div>`
  );
};

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

promise1.then(
  insertMessage('message', 'Promise was resolved!')).catch();

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(Error), 3000));

promise2.then().catch(insertMessage('error-message', 'Promise was rejected!'));
