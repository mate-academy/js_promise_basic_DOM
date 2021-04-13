'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  return new Promise((resolve) => {
    const message = document.createElement('div');

    message.textContent = 'Promise was resolved!';
    message.className = 'message';
    resolve(message);
  }).then(message => {
    document.body.append(message);
  });
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    const errorMessage = document.createElement('div');

    errorMessage.textContent = 'Promise was rejected!';
    errorMessage.className = 'message error-message';

    reject(errorMessage);
  }, 3000);
}).catch(error => {
  document.body.append(error);

  setTimeout(() => {
    error.remove();
  }, 2000);
});
