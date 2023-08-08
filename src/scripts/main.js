'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const createPromise = (withReject) => {
  return new Promise((resolve, reject) => {
    if (withReject) {
      setTimeout(reject, 3000);

      return;
    }

    logo.addEventListener('click', resolve);
  });
};

const appendMessage = (isErrorMsg = false) => {
  let promiseStatus = 'resolved';

  const message = document.createElement('div');

  message.className = 'message';

  if (isErrorMsg) {
    message.classList.add('error-message');
    promiseStatus = 'rejected';
  }

  message.textContent = `Promise was ${promiseStatus}!`;
  body.appendChild(message);
};

const handlePromise = (promise) => {
  promise
    .then(() => appendMessage())
    .catch(() => appendMessage(true));
};

const promise1 = createPromise();
const promise2 = createPromise(true);

handlePromise(promise1);
handlePromise(promise2);
