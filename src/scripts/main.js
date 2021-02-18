'use strict';

const logo = document.querySelector(`.logo`);

function createNotification(promiseMessage) {
  switch (promiseMessage) {
    case 'Promise was resolved!':
      const message = document.createElement('div');

      message.classList.add('message');
      message.innerText = promiseMessage;
      document.body.append(message);

      break;

    case 'Promise was rejected!':
      const errorMessage = document.createElement('div');

      errorMessage.classList.add('error-message');
      errorMessage.innerText = promiseMessage;
      document.body.append(errorMessage);

      break;
  }
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
