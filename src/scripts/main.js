'use strict';

const logo = document.querySelector('.logo');

const createElement = (result, className) => {
  const message = document.createElement('div');

  message.textContent = result;
  message.className = className;

  return message;
};

logo.addEventListener('click', () => {
  return new Promise((resolve) => {
    resolve(createElement('Promise was resolved!', 'message'));
  }).then(message => {
    document.body.append(message);
  });
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(createElement('Promise was rejected!', 'message error-message'));
  }, 3000);
}).catch(error => {
  document.body.append(error);

  setTimeout(() => {
    error.remove();
  }, 2000);
});
