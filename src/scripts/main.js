/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', async () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);

  try {
    await wait(2000);
    message.remove();
  } catch (error) {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);

    message.remove();
  }
});

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error time;)'));
    }, ms);
  });
}
