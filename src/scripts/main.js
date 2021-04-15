'use strict';

const createMessage = (text, class1, class2) => {
  const message = document.createElement('div');

  message.classList.add(class1, class2);
  message.textContent = text;
  document.body.append(message);
};

new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    createMessage('Promise was resolved!', 'message');

    resolve('Resolve');
  });
}).then();

new Promise((resolve, reject) => {
  setTimeout(() => {
    createMessage('Promise was rejected!', 'message', 'error-message');

    const err = document.querySelector('.error-message');

    setTimeout(() => {
      err.remove();
    }, 2000);
    reject(new Error());
  }, 3000);
}).catch();
