'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function createMessage(text, isError = false) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError === true) {
    message.classList.add('error-message');
  }
  message.textContent = text;
  document.body.appendChild(message);
}

promise1.then(
  () => createMessage(`Promise was resolved!`),
  () => createMessage(`Promise was rejected!`, true),
);

promise2.then(
  () => createMessage(`Promise was resolved!`),
  () => createMessage(`Promise was rejected!`, true),
);
