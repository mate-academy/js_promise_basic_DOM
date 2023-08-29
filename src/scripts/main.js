'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const createPromise = (isAccepted = true) => {
  return new Promise((resolve, reject) => {
    if (!isAccepted) {
      return setTimeout(reject, 3000);
    }

    return logo.addEventListener('click', resolve);
  });
};

const handleMessage = (isAccepted = true) => {
  const message = isAccepted
    ? '<div class="message">Promise was resolved!</div>'
    : '<div class="message error-message">Promise was rejected!</div>';

  body.insertAdjacentHTML('afterbegin', message);
};

const handlePromise = (promise) => {
  promise
    .then(() => handleMessage())
    .catch(() => handleMessage(false));
};

const promise1 = createPromise();
const promise2 = createPromise(false);

handlePromise(promise1);
handlePromise(promise2);
