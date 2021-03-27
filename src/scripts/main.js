'use strict';

function addMessage(type, text) {
  const message = document.createElement('div');

  message.className = type;
  message.innerText = text;
  document.body.append(message);
}

const firstPromise = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

firstPromise.then(() => {
  addMessage('message', 'Promise was resolved!');
});

secondPromise.catch(() => {
  addMessage('error-message message', 'Error!');
});
