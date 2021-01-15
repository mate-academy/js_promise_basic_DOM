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
    logo.addEventListener('click', e => {
      createMessage('message', 'Promise was resolved!');
    });
    resolve();
  }
  );
}

function promiseSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      createMessage('error-message', 'Promise was rejected!');
    }, 3000);
    reject(Error);
  });
}

promiseFirst();
promiseSecond();
