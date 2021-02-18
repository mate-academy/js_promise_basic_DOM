'use strict';

const logo = document.querySelector(`.logo`);

function createNotification(promiseMessage) {
  const message = document.createElement('div');

  message.innerText = promiseMessage;

  switch (promiseMessage) {
    case 'Promise was resolved!':
      message.classList.add('message');

      break;

    case 'Promise was rejected!':
      message.classList.add('error-message');

      break;
  }

  document.body.append(message);
}

const firstPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

firstPromise.then(res => createNotification(res));

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

secondPromise.catch(() => createNotification('Promise was rejected!'));
