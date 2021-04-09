'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  return new Promise(resolve => {
    const message = document.createElement('div');
    const messageText = 'Promise was resolved!';

    message.className = 'message';
    message.textContent = messageText;

    document.body.append(message);
    resolve(messageText);
  }).then(message => alert(message));
});

// eslint-disable-next-line
const rejected = new Promise((resolve, reject) => {
  const errorMessage = document.createElement('div');
  const errorMessageText = 'Promise was rejected!';

  errorMessage.textContent = errorMessageText;
  errorMessage.className = 'message error-message';

  setTimeout(() => {
    document.body.append(errorMessage);
    reject(new Error(errorMessageText));
  }, 3000);
  // eslint-disable-next-line
}).catch(error => console.error(error));
