'use strict';

const logo = document.querySelector('.logo');

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject({
      text: 'Promise was rejected!', className: 'error-message',
    });
  }, 3000);
});

errorPromise.catch(addMessage);

logo.addEventListener('click', (e) => {
  const successClickPromise = new Promise((resolve) => {
    resolve({
      text: 'Promise was resolved!', className: 'message',
    });
  });

  successClickPromise.then(addMessage);
});

function addMessage(params) {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add(params.className);
  errorMessage.innerText = params.text;
  document.body.append(errorMessage);
}
