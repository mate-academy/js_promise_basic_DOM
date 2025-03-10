'use strict';

const logoElement = document.querySelector('.logo');

const showMessage = (text, isError = false) => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (isError) {
    messageDiv.classList.add('error-message');
  }

  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
};

const clickPromise = new Promise((resolve) => {
  logoElement.addEventListener(
    'click',
    () => resolve('Promise was resolved!'),
    { once: true },
  );
});

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

clickPromise
  .then(showMessage)
  .catch((error) => showMessage(error.message, true));

timeoutPromise
  .then(showMessage)
  .catch((error) => showMessage(error.message, true));
