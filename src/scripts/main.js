/* eslint-disable no-console */
'use strict';

const logo = document.querySelector('.logo');

const notificationCreator = (messageText, className) => {
  const message = document.createElement('div');

  message.className = className;
  message.textContent = messageText;
  document.body.append(message);
};

logo.addEventListener('click', () => {
  return new Promise(resolve => {
    const messageText = 'Promise was resolved!';

    notificationCreator(messageText, 'message');
    resolve(messageText);
  }).then(message => console.log(message));
});

// eslint-disable-next-line
const rejected = new Promise((resolve, reject) => {
  const errorMessageText = 'Promise was rejected!';

  setTimeout(() => {
    notificationCreator(errorMessageText, 'message error-message');
    reject(new Error(errorMessageText));
  }, 3000);

  setTimeout(() => {
    document.querySelector('.error-message').remove();
  }, 6000);
}).catch(error => console.error(error));
