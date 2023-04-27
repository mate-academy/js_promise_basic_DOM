/* eslint-disable prefer-promise-reject-errors */
'use strict';

const handleSuccess = (success) => showMessage(success);
const handleError = (error) => showMessage(error, true);

function showMessage(message, messageIsError) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (messageIsError) {
    div.classList.add('error-message');
  };
  div.innerText = message;
  document.body.append(div);
}

function promise1() {
  return new Promise((resolve, reject) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', (e) => {
      resolve('Promise was resolved!');
    });
  });
};

function promise2() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      reject('Promise was rejected!');
    }, 3000);
  });
};

promise1().then(handleSuccess).catch(handleError);
promise2().then(handleSuccess).catch(handleError);
