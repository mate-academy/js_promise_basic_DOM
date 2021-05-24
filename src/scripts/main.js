'use strict';

const logo = document.querySelector('.logo');

const errorPromise = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve({
      text: 'Promise was resolved!', className: 'message',
    });
  });

  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject({
      text: 'Promise was rejected!', className: 'error-message',
    });
  }, 3000);
});

errorPromise.then(addMessage).catch(addMessage);

function addMessage(params) {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add(params.className);
  errorMessage.innerText = params.text;
  document.body.append(errorMessage);
}
