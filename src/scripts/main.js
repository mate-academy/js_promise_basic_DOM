'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', (e) => {
  const successClickPromise = new Promise((resolve) => {
    resolve({
      text: 'Promise was resolved!', className: 'message',
    });
  });

  const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({
        text: 'Promise was rejected!', className: 'error-message',
      });
    }, 3000);
  });

  successClickPromise.then(addMessage);
  errorPromise.catch(addMessage);
});

function addMessage(params) {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add(params.className);
  errorMessage.innerText = params.text;
  document.body.append(errorMessage);
}
