'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const createMessage = (message, className) => {
  const div = document.createElement('div');

  div.className = className;
  div.innerText = message;
  document.body.append(div);
};

promise1
  .then(() => {
    createMessage('Promise was resolved!', 'message');
  })
  .catch(() => {
    createMessage('Promise was rejected!', 'error-message');
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const mesage = 'Promise was rejected!';

    reject(mesage);
  }, 3000);
});

promise2
  .then(() => {
    createMessage('Promise was resolved!', 'message');
  })
  .catch((message) => {
    createMessage('Promise was rejected!', 'error-message');
  });
