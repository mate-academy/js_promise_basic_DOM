'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const message = 'Promise was resolved!';

    resolve(message);
  });
});

promise1.then((message) => {
  addMessage(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then((message) => {
    addMessage(message); // Обробка успіху
  })
  .catch((error) => {
    addMessage(error, true);
  });

function addMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.textContent = text;
  messageDiv.classList.add('message');

  if (isError) {
    messageDiv.classList.add('error-message');
  }
  document.body.append(messageDiv);
}
