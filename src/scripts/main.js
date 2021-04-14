'use strict';

const logo = document.querySelector('.logo');

const addMessage = (messageText, className) => {
  const message = document.createElement('div');

  message.textContent = messageText;
  message.className = className;
  document.body.append(message);
};

// eslint-disable-next-line no-unused-vars
const firstPromise = new Promise(resolve => {
  logo.addEventListener('click', () => {
    const messageText = 'Promise was resolved!';

    addMessage(messageText, 'message');
  });
});
// eslint-disable-next-line no-unused-vars
const secondPromise = new Promise((resolve, reject) => {
  const errorMessageText = 'Promise was rejected!';

  setTimeout(() => {
    addMessage(errorMessageText, 'message error-message');
    reject(new Error(errorMessageText));
  }, 3000);
});
