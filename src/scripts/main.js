'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').onclick = () => {
    resolve();
  };
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1.then(() => {
  createMessage('message', 'resolved');
});

promise2.catch(() => {
  createMessage('error-message', 'rejected');
});

function createMessage(type, description) {
  const message = document.createElement('div');

  message.classList.add(type);
  message.innerText = `Promise was ${description}!`;
  document.body.append(message);
}
