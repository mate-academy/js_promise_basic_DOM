'use strict';

const logo = document.querySelector('.logo');

function createMessage(messageClass, text) {
  const div = document.createElement('div');

  div.className = `${messageClass}`;
  div.innerHTML = `<h2>${text}</h2>`;
  document.body.append(div);
}

function promiseFirst() {
  return new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });
}

function promiseSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error);
    }, 3000);
  });
}

promiseFirst()
  .then(() => createMessage('message', 'Promise was resolved!'));

promiseSecond()
  .catch(() => createMessage('error-message', 'Promise was rejected!'));
