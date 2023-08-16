'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const result = 'Promise was resolved!';

    resolve(result);
  });
});

const createMessage = (message, className) => {
  const div = document.createElement('div');

  div.className = className;
  div.innerText = message;
  document.body.append(div);
};

promise1
  .then((result) => {
    createMessage(result, 'message');
  })
  .catch(() => {
    createMessage('Promise was rejected!', 'error-message');
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const message = 'Promise was rejected!';

    reject(message);
  }, 3000);
});

promise2
  .then(() => {
    createMessage('Promise was resolved!', 'message');
  })
  .catch((result) => {
    createMessage(result, 'error-message');
  });
