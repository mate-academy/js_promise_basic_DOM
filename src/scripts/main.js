'use strict';

const logo = document.querySelector('.logo');
const errorMessage = 'Promise was rejected!';

function addMessage(className, text) {
  const message = document.createElement('div');

  message.classList.add(className);
  message.textContent = text;
  document.body.append(message);
}

const promiseOne = new Promise(resolve => {
  logo.addEventListener('click', resolve);
});

const promiseTwo = Promise.reject(errorMessage);

promiseOne
  .then(() => {
    addMessage('message', 'Promise was resolved!');
  });

promiseTwo
  .catch((error) => {
    setTimeout(() => {
      addMessage('error-message', error);
    }, 3000);
  });
