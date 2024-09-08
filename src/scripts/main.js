'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const message = document.createElement('div');

function switchClassListMessage(res, isSuccess = false) {
  message.classList.add('message');
  message.classList.add(!isSuccess && 'error-message');
  message.textContent = res;
}

const firstPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const secondPromise = new Promise((resolve, reject) => {
  let isSuccess = false;

  logo.addEventListener('click', () => {
    isSuccess = true;
  });

  setTimeout(() => {
    if (isSuccess) {
      resolve('Promise was resolved after 3 seconds!');
    } else {
      const err = 'Promise was rejected!';

      reject(err);
    }
  }, 3000);
});

firstPromise.then((result) => {
  switchClassListMessage(result, true);

  body.appendChild(message);
});

secondPromise
  .then((result) => {
    switchClassListMessage(result, true);

    body.appendChild(message);
  })
  .catch((error) => {
    switchClassListMessage(error, false);

    body.appendChild(message);
  });
