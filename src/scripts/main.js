'use strict';

function createMessage(messageText, elementClasses, parentElement) {
  const newElement = document.createElement('div');
  newElement.classList.add(...elementClasses);
  newElement.textContent = messageText;
  parentElement.appendChild(newElement);
}

const logoButton = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logoButton.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  createMessage('Promise was resolved!', ['message'], document.body);
});

promise2.catch((error) => {
  createMessage(error.message, ['error-message', 'message'], document.body);
});
