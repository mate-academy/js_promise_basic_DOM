'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const promise1 = Promise.resolve();

  promise1.then((resolve) => {
    createMessage('Promise was resolved!', 'message');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise2.catch((reject) => {
  createMessage('Promise was rejected!', 'message', 'error-message');
});

function createMessage(text, ...arrayClasses) {
  const message = document.createElement('div');

  for (const nameClass of arrayClasses) {
    message.classList.add(nameClass);
  }

  message.textContent = text;

  document.body.append(message);
}
