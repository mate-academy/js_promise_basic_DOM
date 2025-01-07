'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve) => resolve('Good'));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong!'));
  }, 3000);
});

promise2
  .then(() => addMessage())
  .catch(() => {
    addMessage(true);
  });

logo.addEventListener('click', () => {
  promise1
    .then(() => addMessage())
    .catch(() => {
      addMessage(true);
    });
});

function addMessage(isError = false) {
  const messageBox = document.createElement('div');
  const title = document.createElement('h2');

  messageBox.classList.add('message');

  if (isError) {
    messageBox.classList.add('error-message');
  }

  title.innerText = isError ? 'Promise was rejected!' : 'Promise was resolved!';

  document.body.append(messageBox);
  messageBox.append(title);
}
