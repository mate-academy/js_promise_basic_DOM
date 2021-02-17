'use strict';

const logo = document.querySelector(`.logo`);

function createNotification(bool) {
  if (bool) {
    const message = document.createElement('div');

    message.classList.add('message');
    message.innerText = 'Promise was resolved!';
    document.body.append(message);
  } else {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('error-message');
    errorMessage.innerText = 'Promise was rejected!';
    document.body.append(errorMessage);
  }
}

const firstPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(true);
  });
});

firstPromise.then(res => createNotification(res));

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('timeout'));
  }, 3000);
});

secondPromise.catch(() => createNotification(false));
