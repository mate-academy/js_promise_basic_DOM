/* eslint-disable no-unused-vars */
'use strict';

const logo = document.querySelector('.logo');
const createPositiveMessage = function () {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';

  return message;
};
const createNegativeMessage = function () {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = 'Promise was rejected!';

  return errorMessage;
};

const promise1 = new Promise(function (resolve, reject) {
  if (logo) {
    logo.onclick = () => {
      resolve();
    };
  }
})
  .then(() => {
    const whatToSend = createPositiveMessage();

    document.body.appendChild(whatToSend);
  })
  .catch(() => {
    const whatToSend = createNegativeMessage();

    document.body.appendChild(whatToSend);
  });
const promise2 = new Promise(function (resolve, reject) {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject(), 3000);
})
  .then(() => {
    const whatToSend = createPositiveMessage();

    document.body.appendChild(whatToSend);
  })
  .catch(() => {
    const whatToSend = createNegativeMessage();

    document.body.appendChild(whatToSend);
  });
